# Configuraciones de la Landing Page 

Este documento guarda los parámetros y decisiones técnicas clave aplicados a la landing page para optimización y consistencia visual.

## 1. Configuración de Scroll Fluido (Lenis)
Para mantener los 120 FPS, asegurar una sensación de alta gama y evitar conflictos, se utiliza la librería Lenis con los siguientes parámetros en `js/main.js`:

```javascript
const lenis = new Lenis({
  lerp: 0.1, // Suavidad óptima por defecto para mantener alta tasa de FPS
  smoothWheel: true,
  wheelMultiplier: 0.7, // Sensibilidad ajustada a petición
});
```
* **Offset del Menú:** Se aplica un desfase en el JS de `-80px` (`lenis.scrollTo(target, { offset: -80 })`) para que al hacer clic en los enlaces del menú, la sección no quede oculta bajo el encabezado adhesivo.
* **Nota:** El scroll fluido nativo de CSS (`class="scroll-smooth"`) fue eliminado para evitar conflictos y pérdida de fotogramas al usar los enlaces ancla.

## 2. Optimizaciones de CSS Avanzadas (Anti-Tearing y GPU)
Para evitar el efecto de "catarata", parpadeo o cortes en la imagen (Screen Tearing), se aplicaron técnicas de renderizado por GPU y los estilos base oficiales de Lenis en `css/styles.css`:

```css
html {
  overscroll-behavior-y: none; /* Previene el "rebote" nativo y ahorra cálculos */
  background-color: var(--bg-primary); /* Previene destellos blancos */
}

/* Fuerza GPU en medios pesados (sin incluir .reveal para no saturar memoria) */
img, video, iframe {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Neutraliza el lag provocado por el reproductor de YouTube al hacer scroll */
.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
```

## 3. Tipografía del Menú de Navegación
Para mantener consistencia con la identidad gráfica general, se modificó la tipografía del menú superior:
- **Logo Textual:** `font-sans font-bold text-[14px]`
- **Enlaces de Menú:** `font-sans font-semibold text-[13px] uppercase`
- Anteriormente se utilizaba la fuente técnica (`font-mono`), pero el cambio a la tipografía principal del sitio (`Inter` / `font-sans`) unifica la lectura.

## 4. Limpieza Visual
- Se eliminaron las etiquetas decorativas en el *Hero Section* (`SYSTEM // ONLINE` y `PARTNERS: META`) para tener una entrada más directa al mensaje principal.
