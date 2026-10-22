# Conectar el formulario de `/oferta` con la hoja de Drive

Son cinco minutos y se hace una sola vez. Es el único paso que no puedo hacer yo:
desplegar un Apps Script requiere entrar con tu cuenta.

**La hoja ya está creada:**
[Lumma · Leads oferta Miami (3 lugares)](https://docs.google.com/spreadsheets/d/1Qd7ZU5zdLjuMRUcxJ4_iJSVWhOkSzQ7Uv9_t1fMlIOs/edit)

---

## 1. Abre el editor de scripts

En la hoja: **Extensiones → Apps Script**. Se abre una pestaña con un archivo
`Código.gs` que trae un `function myFunction() {}` vacío.

## 2. Borra lo que haya y pega esto

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
        .normalize('NFD').replace(/[\u0300-\u036f]/g, ''));

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

## 3. Despliega

**Implementar → Nueva implementación**, y en el engranaje elige **Aplicación web**.

Tres ajustes que importan:

| campo | valor |
|---|---|
| Descripción | `Leads oferta Miami` |
| Ejecutar como | **Yo** (`sonia@lummacreative.com`) |
| Quién tiene acceso | **Cualquier usuario** |

«Cualquier usuario» suena abierto, pero sólo permite *escribir* una fila con el
formato de arriba. Nadie puede leer la hoja desde ahí.

Google pedirá permisos la primera vez y mostrará un aviso de «app no
verificada»: es tu propio script. **Configuración avanzada → Ir a (nombre)**.

## 4. Hecho

La URL ya está conectada en `oferta.html`, en la constante `SHEET_URL`.

---

## El script es nuevo: hay que desplegarlo una vez más

Ahora lee los encabezados de la hoja y coloca cada dato en su columna, en vez
de llevar el orden escrito dentro. **Pégalo otra vez y vuelve a desplegar**
(Implementar → Gestionar implementaciones → lápiz → Versión: Nueva).

Es el último despliegue que necesitas: a partir de aquí, añadir o quitar
campos del formulario ya no obliga a tocar el script. Basta con añadir o
quitar la columna en la hoja, con ese mismo nombre.

## Comprobación pendiente

El entorno donde se construyó la página tiene bloqueado `script.google.com`,
así que la llamada real al script **no se ha podido probar desde aquí**. Está
verificado que la página la hace, con el cuerpo correcto, pero no que el script
responda.

Queda una prueba de un minuto: **enviar el formulario una vez desde el móvil y
mirar si aparece la fila.** Si no aparece, lo más probable es el paso 3 — el
despliegue tiene que ser «Ejecutar como: yo» y «Acceso: cualquier usuario».

El lead llega a HubSpot en cualquier caso: el envío no se bloquea si la hoja
falla.

## Si algún día deja de llegar

Lo más probable es que hayas editado el script sin volver a desplegar. En Apps
Script, **Implementar → Gestionar implementaciones → el lápiz → Versión: Nueva**.
Cada cambio necesita una versión nueva; la URL no cambia.
