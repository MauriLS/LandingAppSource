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
- **Ruta del enlace "La Solución":** Apunta a `href="#solucion"`, el cual fue reasignado a la sección `"Centraliza toda tu operacion en un solo sistema"` (anteriormente `#mapas-interactivos`), garantizando que el scroll lleve directamente al usuario al inicio de la propuesta de solución centralizada.

## 4. Limpieza Visual
- Se eliminaron las etiquetas decorativas en el *Hero Section* (`SYSTEM // ONLINE` y `PARTNERS: META`) para tener una entrada más directa al mensaje principal.
- **Sección Migración Segura (`#migracion`):** Se eliminó el recuadro/reproductor de video del lado izquierdo y se reestructuró la sección en dos columnas equilibradas: el título ("Tus datos están 100% Seguros con Nosotros") a la izquierda y el contenido explicativo con lista de ventajas a la derecha.
- **Sección Casos de Éxito (`#casos-de-exito`):** Se retiraron los 3 contenedores de video testimonio (formato 9:16). Las cards de testimonios de texto (Caps2, Red Litoral, MegaFiber, Intercable) se rediseñaron con un estilo premium (calificación 5.0 con estrellas, ícono sutil de cita, micro-interacción hover, logotipo de empresa con su rubro ISP y badge "Verificado"). Se reemplazó la empresa DKM Net por MegaFiber. Los testimonios se redactaron en un lenguaje natural, directo y humano (tono operador ISP chileno en terreno: soporte directo por WhatsApp ante problemas con boletas o procesos operativos sin bots ni tickets, conciliación automática con Webpay/CuentaRUT, traspaso transparente de base de datos sin alterar facturación SII, y unificación de costos vs. plataformas en USD), omitiendo deliberadamente la palabra "Isostema" dentro de las citas para evitar sonar artificial o publicitario.
- **Sección Demostración en Video (`#video-caracteristicas`):** Las pestañas "Clientes y Mensajería" y "Facturación SII" fueron actualizadas al formato Vimeo con portada interactiva (`vimeo-title-overlay`), botón de reproducción centrado y pausa automática de videos de Vimeo al cambiar entre pestañas en `js/main.js`.

## 5. Formulario de Contacto y Asesoría Gratuita (`#contacto`)
- **Ubicación:** Ubicado directamente bajo la sección de testimonios (`#casos-de-exito`), antes del footer.
- **Enlace del CTA:** El botón `[Solicitar Mi Asesoría Gratuita Hoy]` (anteriormente con ID `waFinalBtn`) se vinculó a `href="#contacto"` y se desacopló del redirect de WhatsApp en `js/main.js`. Al pulsarlo, el scroll suave de Lenis lleva al usuario al formulario con el offset de `-80px`.
- **Destino del Correo:** Configurado para enviar todas las solicitudes a `kismannf@gmail.com` utilizando FormSubmit (`https://formsubmit.co/ajax/kismannf@gmail.com`).
- **Campos del Formulario:**
  - Nombre Completo (`nombre`, obligatorio)
  - Nombre de tu ISP o Empresa (`empresa`, obligatorio)
  - Correo Electrónico (`email`, obligatorio)
  - Teléfono / WhatsApp (`telefono`, obligatorio)
  - Rango de abonados (`abonados`, selector)
  - Sistema actual (`sistema_actual`, selector: MicroWISP, SmartOLT, WispHub, etc.)
  - Consulta o desafío técnico (`mensaje`, textarea opcional)
- **Experiencia de Usuario (AJAX):**
  - Envío asíncrono con `fetch` que evita recargas o salidas de la página.
  - Estado de carga animado en el botón (`Enviando solicitud...` con spinner).
  - Alerta de éxito con confirmación instantánea.
  - Protección antispam sin captcha intrusivo (`_captcha: false`, campo honeypot oculto).
  - Fallback por error de conexión indicando correo directo.



