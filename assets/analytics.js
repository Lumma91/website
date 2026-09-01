/* ── Medición del recorrido comercial ──────────────────────────────────────
   Un solo archivo para las cuatro páginas. Hasta ahora GA4 sólo recibía
   páginas vistas: no había un solo gtag('event') en el sitio, así que del
   embudo no se veía nada. Meta sí medía Lead, y eso se respeta tal cual —
   este archivo no toca el píxel ni el envío a HubSpot.

   Eventos que emite:
     cta_click      · clic en cualquier botón o enlace de acción
     form_start     · primer campo enfocado, una vez por formulario y sesión
     form_submit    · envío, además del Lead de Meta que ya existía
     booking_click  · clic en el enlace de agenda

   Además guarda el origen de la visita (UTM y referente) para que el
   formulario pueda mandarlo a HubSpot sin preguntárselo a nadie.

   Se carga con defer: si falla o se bloquea, la página funciona igual. */
(function () {
  'use strict';

  var send = function (name, params) {
    try { if (typeof gtag === 'function') gtag('event', name, params || {}); }
    catch (e) { /* la medición nunca debe romper la página */ }
  };

  /* ── origen de la visita ───────────────────────────────────────────────
     Se guarda en la primera página de la sesión y sobrevive la navegación
     interna, para que el formulario sepa de dónde vino aunque se envíe
     tres páginas después. */
  var SOURCE_KEY = 'lumma_source';

  function captureSource() {
    var stored = null;
    try { stored = sessionStorage.getItem(SOURCE_KEY); } catch (e) {}
    if (stored) return;

    var q = new URLSearchParams(location.search);
    var utm = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
      var v = q.get(k);
      if (v) utm[k.replace('utm_', '')] = v.slice(0, 80);
    });

    // Sin UTM, el referente es lo mejor que tenemos.
    if (!Object.keys(utm).length && document.referrer) {
      try {
        var host = new URL(document.referrer).hostname.replace(/^www\./, '');
        if (host && host !== location.hostname.replace(/^www\./, '')) utm.referrer = host;
      } catch (e) {}
    }

    if (!Object.keys(utm).length) utm.direct = '1';
    utm.landing = location.pathname;

    try { sessionStorage.setItem(SOURCE_KEY, JSON.stringify(utm)); } catch (e) {}
  }

  /* Lo consume el manejador del formulario para añadirlo al mensaje de
     HubSpot. Devuelve una línea legible, no un objeto. */
  window.lummaSource = function () {
    try {
      var raw = sessionStorage.getItem(SOURCE_KEY);
      if (!raw) return 'directo';
      var o = JSON.parse(raw);
      return Object.keys(o).map(function (k) { return k + '=' + o[k]; }).join(' · ');
    } catch (e) { return 'desconocido'; }
  };

  /* ── etiqueta legible de un botón ──────────────────────────────────────
     El texto visible dice más que cualquier id que inventemos, y sobrevive
     a los cambios de copy mejor que una clase. */
  function labelOf(el) {
    var t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    return t.slice(0, 40) || el.getAttribute('aria-label') || 'sin etiqueta';
  }

  /* /gracias no usa las mismas clases que el resto del sitio: sus botones son
     .btn-green y .btn-outline a secas, sin .btn. Van listadas aparte. */
  var CTA = '.btn, .btn-green, .btn-outline, .nav-cta, .spin-badge, .submit-btn, [data-open-contact]';

  document.addEventListener('click', function (ev) {
    if (!ev.target.closest) return;

    /* La agenda se resuelve por destino y no por clase, para que siga midiendo
       aunque el enlace cambie de sitio o de estilo. */
    var cal = ev.target.closest('a[href*="calendar.app.google"]');
    if (cal) { send('booking_click', { page: location.pathname }); return; }

    var el = ev.target.closest(CTA);
    if (!el) return;
    var href = el.getAttribute('href') || '';

    send('cta_click', {
      cta_label: labelOf(el),
      page: location.pathname,
      destino: href || 'modal'
    });
  }, true);

  /* ── formularios ───────────────────────────────────────────────────────
     form_start mide cuánta gente empieza y abandona, que es el dato que
     falta para saber si el formulario es demasiado largo. */
  var started = {};

  document.addEventListener('focusin', function (ev) {
    var form = ev.target.closest ? ev.target.closest('form') : null;
    if (!form) return;
    var id = form.getAttribute('data-form') || form.id || 'form';
    if (started[id]) return;
    started[id] = true;
    send('form_start', { form_id: id, page: location.pathname });
  }, true);

  /* El envío se escucha en el documento: el manejador de cada página llama
     a preventDefault, pero el evento submit se dispara y burbujea igual, así
     que no hace falta tocar esos manejadores. */
  document.addEventListener('submit', function (ev) {
    var form = ev.target;
    if (!form || form.tagName !== 'FORM') return;
    send('form_submit', {
      form_id: form.getAttribute('data-form') || form.id || 'form',
      page: location.pathname,
      origen: window.lummaSource()
    });
  }, true);

  captureSource();
})();
