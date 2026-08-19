# UCALP Abierta

Landing institucional de UCALP Abierta con formulario de interés conectado a Formspree y contacto configurable por WhatsApp.

## Desarrollo local

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Vite mostrará la URL local disponible (normalmente `http://localhost:5173`).

Antes de iniciar el servidor, completá en `.env.local`:

```dotenv
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
VITE_WHATSAPP_NUMBER=5492210000000
```

El número de WhatsApp debe incluir código de país y área, sin el signo `+`. Los archivos `.env` y `.env.local` están excluidos de Git.

## Verificaciones

```bash
npm run lint
npm run build
npm run preview
```

## Alcance

- React, Vite, Tailwind CSS y JavaScript.
- Navegación animada, indicador lateral de sección y animaciones sutiles.
- Diseño responsive para mobile, tablet y desktop.
- Formulario funcional mediante Formspree, sin backend propio.
- CTAs de WhatsApp configurables en navbar, hero y formulario; si falta el número, dirigen al formulario.
- Sin configuración de deploy ni credenciales incluidas en el repositorio.
