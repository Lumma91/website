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
    SpreadsheetApp.openById(HOJA).getSheets()[0].appendRow([
      d.fecha || new Date().toLocaleString('es-US', { timeZone: 'America/New_York' }),
      d.nombre || '',
      d.empresa || '',
      d.email || '',
      d.telefono || '',
      d.inversion || '',
      d.primera || '',
      d.origen || '',
      d.pagina || ''
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    // Se registra el fallo pero se responde 200: si respondiera error, el
    // navegador no podría leerlo de todas formas por el modo no-cors.
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

## 4. Pásame la URL

Al terminar te da una **URL de la aplicación web**, que termina en `/exec`.
Mándamela y la pego en `oferta.html`, en la constante `SHEET_URL`.

---

## Mientras tanto

La página ya funciona. Con `SHEET_URL` vacía, el lead **llega igual a HubSpot** —
el envío no se bloquea esperando a la hoja. Lo único que falta hasta que me
pases la URL es la copia en Drive.

## Si algún día deja de llegar

Lo más probable es que hayas editado el script sin volver a desplegar. En Apps
Script, **Implementar → Gestionar implementaciones → el lápiz → Versión: Nueva**.
Cada cambio necesita una versión nueva; la URL no cambia.
