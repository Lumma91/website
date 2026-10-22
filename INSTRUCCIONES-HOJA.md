# Conectar el formulario de `/oferta` con la hoja de Drive

Unos diez minutos, una sola vez. Es el único paso que no puedo hacer yo:
desplegar un Apps Script exige entrar con tu cuenta de Google.

**La hoja ya está creada:**
[Lumma · Leads oferta Miami (3 lugares)](https://docs.google.com/spreadsheets/d/1Qd7ZU5zdLjuMRUcxJ4_iJSVWhOkSzQ7Uv9_t1fMlIOs/edit)

**La URL del script ya está conectada** en la página. No hay que tocar nada
del sitio: todo lo que queda ocurre dentro de Google.

---

## 1 · Comprueba los encabezados de la hoja

La fila 1 debe tener exactamente estas ocho columnas, en este orden:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Fecha | Nombre | Empresa | Email | Telefono | Inversion estimada | Primera contratacion | Origen |

Hay una novena, `Pagina`, que puedes dejar o quitar.

**Sin tildes y sin mayúsculas raras.** El script compara los encabezados en
minúsculas y sin acentos, así que `Telefono` y `teléfono` valen igual, pero
`Tel.` no.

## 2 · Abre el editor de scripts

En la hoja: **Extensiones → Apps Script**.

## 3 · Borra todo lo que haya y pega esto

```javascript
// Recibe los leads de lummacreative.com/oferta y los escribe en esta hoja.
// Desplegar como aplicación web, ejecutando como yo, con acceso para cualquiera.

const HOJA = '1Qd7ZU5zdLjuMRUcxJ4_iJSVWhOkSzQ7Uv9_t1fMlIOs';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const hoja = SpreadsheetApp.openById(HOJA).getSheets()[0];

    // Las columnas las manda la fila de encabezados, no este script. Añadir
    // un campo al formulario es añadir una columna en la hoja: no hay que
    // volver a tocar ni desplegar esto.
    const cabeceras = hoja.getRange(1, 1, 1, Math.max(hoja.getLastColumn(), 1))
      .getValues()[0]
      .map(h => String(h).trim().toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, ''));

    const fila = cabeceras.map(c => d[c] !== undefined ? d[c] : '');
    if (!fila.some(v => v !== '')) {
      // Ninguna clave coincidió con una cabecera: se guarda crudo antes que
      // perder el lead.
      hoja.appendRow([new Date(), JSON.stringify(d)]);
    } else {
      if (!d.fecha) {
        const iF = cabeceras.indexOf('fecha');
        if (iF >= 0) fila[iF] = new Date().toLocaleString('es-US', { timeZone: 'America/New_York' });
      }
      hoja.appendRow(fila);
    }
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    console.error(err);
    return ContentService.createTextOutput(JSON.stringify({ ok: false }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Guarda con el icono del disquete.

## 4 · Despliega

> **Si ya habías desplegado una versión antes**, no crees una nueva
> implementación: eso te daría una URL distinta y habría que cambiarla en la
> página. Ve a **Implementar → Gestionar implementaciones → el lápiz →
> Versión: Nueva → Implementar**. La URL no cambia. Y listo, sáltate el resto
> de este paso.

Si es la primera vez: **Implementar → Nueva implementación**, y en el engranaje
elige **Aplicación web**.

| campo | valor |
|---|---|
| Descripción | `Leads oferta Miami` |
| Ejecutar como | **Yo** (`sonia@lummacreative.com`) |
| Quién tiene acceso | **Cualquier usuario** |

«Cualquier usuario» suena abierto, pero lo único que permite es *añadir* una
fila. Nadie puede leer la hoja desde ahí.

Google pedirá permisos la primera vez y mostrará un aviso de «app no
verificada»: es tu propio script. **Configuración avanzada → Ir a (nombre del
proyecto)**.

La URL que te da al final debe terminar en `/exec` y coincidir con esta, que
es la que ya está puesta en la página:

```
https://script.google.com/macros/s/AKfycbz0MCKI-GC9Uk2oNRXVP-oNVdYK79fov2qNcab-eCh_wbB4UR-ke4PgY2az_EzJ1pCJ/exec
```

**Si no coincide, pásamela** y la cambio en un minuto.

---

## 5 · Pruébalo

Abre **lummacreative.com/oferta** en el móvil, rellena el formulario con tus
datos y envíalo.

- **Aparece una fila nueva en la hoja** → listo, ya está funcionando.
- **No aparece** → casi seguro es el paso 4. Vuelve a mirar que diga
  «Ejecutar como: yo» y «Acceso: cualquier usuario», y que hayas desplegado
  una **versión nueva** y no solo guardado.

Cuando termines, **borra tu fila de prueba** antes de empezar a anunciar.

---

## Lo que conviene saber

**Esto no se ha podido probar de punta a punta.** El entorno donde se
construyó la página tiene bloqueado `script.google.com`, así que verifiqué que
la página llama al script con el cuerpo correcto, pero no que el script
responda. Por eso el paso 5 importa.

**El lead no se pierde si la hoja falla.** Cada envío va a dos sitios a la
vez, HubSpot y esta hoja, y uno no espera al otro. Mientras el script no
funcione, los leads siguen llegando a HubSpot igual.

**Para añadir o quitar un campo del formulario** ya no hace falta tocar el
script: dime qué campo y yo lo cambio en la página, y tú añades o quitas esa
columna en la hoja con el mismo nombre. Nada más.

**Si algún día dejan de llegar filas**, lo más probable es que alguien editara
el script sin volver a desplegar. Cada cambio necesita una versión nueva:
**Implementar → Gestionar implementaciones → el lápiz → Versión: Nueva**.
