# Scarlet Lands LLC

Sitio corporativo bilingüe desarrollado con Next.js y TypeScript.

## Desarrollo local

```bash
npm install
npm run dev
```

## Generar la versión para cPanel

```bash
npm run build
```

El contenido estático listo para publicar se genera en `out/`. Para alojarlo en
cPanel, sube el contenido de esa carpeta al directorio `public_html` del dominio.

Antes del build definitivo, configura `NEXT_PUBLIC_SITE_URL` con el dominio real
para generar correctamente canonical, sitemap, robots y datos estructurados.
