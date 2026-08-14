import Lenis from 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/+esm';

// Inicializar Lenis para Scroll Fluido (Smooth Scrolling) - Configurado para máxima fluidez y rapidez
const lenis = new Lenis({
  lerp: 0.1, // Suavidad óptima (default) para mantener alta tasa de FPS
  smoothWheel: true,
  wheelMultiplier: 0.7, // Balance ideal sugerido
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Manejar los enlaces ancla (#) con Lenis para scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    if (target && target !== '#') {
      lenis.scrollTo(target, { offset: -80 }); // Añadimos el offset del header directamente aquí
    }
  });
});

// === Reemplaza con tu número real (formato 569XXXXXXXX, sin +) ===
  const WHATSAPP_NUMBER = "569XXXXXXXX";
  const WHATSAPP_MSG = encodeURIComponent("Hola, quiero pedir mi diagnóstico gratis.");
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;
  ["waNavBtn","waHeroBtn","waFinalBtn"].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.href = waLink;
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll Reveal Animation
  if (!reduceMotion) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, header > div > div').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // Timeline Interactions
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const progressBar = document.getElementById('timeline-progress');
  const statusContainer = document.getElementById('timeline-status-container');
  
  if (timelineSteps.length > 0) {
    const defaultClasses = {
      card: ['border-gray-800', 'group-hover:border-gray-600'],
      indicator: ['bg-gray-800', 'text-gray-400', 'border-[#0B0D12]'],
      title: ['text-white'],
      stepText: ['text-gray-500'],
      icon: ['text-gray-600'],
      footer: ['bg-gray-900/50', 'border-gray-800'],
      footerText: ['text-gray-500']
    };

    const activeClasses = {
      card: ['border-[#1B9CFF]/50', 'group-hover:border-[#1B9CFF]/80', 'group-hover:shadow-[0_0_25px_rgba(27,156,255,0.15)]'],
      indicator: ['bg-[#1B9CFF]', 'text-white', 'shadow-[0_0_15px_rgba(27,156,255,0.4)]', 'border-[#0B0D12]'],
      title: ['text-[#1B9CFF]'],
      stepText: ['text-[#1B9CFF]'],
      icon: ['text-[#1B9CFF]'],
      footer: ['bg-[#1B9CFF]/10', 'border-[#1B9CFF]/30'],
      footerText: ['text-gray-300']
    };

    const completedClasses = {
      card: ['border-[#1B9CFF]/30', 'group-hover:border-[#1B9CFF]/50'],
      indicator: ['bg-transparent', 'text-[#1B9CFF]', 'border-[#1B9CFF]'],
      title: ['text-white'],
      stepText: ['text-gray-400'],
      icon: ['text-[#1B9CFF]'],
      footer: ['bg-gray-900/50', 'border-gray-800'],
      footerText: ['text-gray-400']
    };
    
    timelineSteps.forEach((step, index) => {
      step.addEventListener('click', () => {
        const stepNum = index + 1;
        
        // Update progress bar
        if (progressBar) {
          if (stepNum === 1) progressBar.style.width = '0%';
          if (stepNum === 2) progressBar.style.width = '50%';
          if (stepNum === 3) progressBar.style.width = '100%';
        }
        
        // Update status text
        if (statusContainer) {
           const items = statusContainer.querySelectorAll('.status-item');
           items.forEach((item, i) => {
             if (i < stepNum) {
               item.className = 'status-item text-[#1B9CFF] font-bold transition-all';
             } else {
               item.className = 'status-item opacity-50 transition-all';
             }
           });
        }
        
        // Update cards visually
        timelineSteps.forEach((s, i) => {
          const isSelected = i === index;
          const isPast = i < index;
          const isFuture = i > index;
          
          const card = s.querySelector('.step-card');
          const indicator = s.querySelector('.step-indicator');
          const icons = s.querySelectorAll('.step-icon');
          const footer = s.querySelector('.step-footer');
          const title = s.querySelector('.step-title');
          const stepText = s.querySelector('.step-text');
          const glow = s.querySelector('.glow-bg');
          const numSpan = indicator.querySelector('.step-num');
          
          // Helper to remove all state classes
          const removeAllClasses = (el, classLists) => {
             if(!el) return;
             classLists.forEach(list => el.classList.remove(...list));
          };
          
          const applyClasses = (el, classes) => {
             if(!el) return;
             el.classList.add(...classes);
          };

          removeAllClasses(card, [defaultClasses.card, activeClasses.card, completedClasses.card]);
          removeAllClasses(indicator, [defaultClasses.indicator, activeClasses.indicator, completedClasses.indicator]);
          removeAllClasses(title, [defaultClasses.title, activeClasses.title, completedClasses.title]);
          removeAllClasses(stepText, [defaultClasses.stepText, activeClasses.stepText, completedClasses.stepText]);
          icons.forEach(icon => removeAllClasses(icon, [defaultClasses.icon, activeClasses.icon, completedClasses.icon]));
          if (footer) {
             removeAllClasses(footer, [defaultClasses.footer, activeClasses.footer, completedClasses.footer]);
             removeAllClasses(footer.querySelector('p'), [defaultClasses.footerText, activeClasses.footerText, completedClasses.footerText]);
          }

          if (isSelected) {
            s.classList.remove('opacity-60');
            applyClasses(card, activeClasses.card);
            applyClasses(indicator, activeClasses.indicator);
            applyClasses(title, activeClasses.title);
            applyClasses(stepText, activeClasses.stepText);
            icons.forEach(icon => applyClasses(icon, activeClasses.icon));
            if (footer) {
               applyClasses(footer, activeClasses.footer);
               applyClasses(footer.querySelector('p'), activeClasses.footerText);
            }
            if(glow) glow.classList.remove('opacity-0');
            if(numSpan) numSpan.innerHTML = '0' + (i + 1);
            
          } else if (isPast) {
            s.classList.remove('opacity-60');
            applyClasses(card, completedClasses.card);
            applyClasses(indicator, completedClasses.indicator);
            applyClasses(title, completedClasses.title);
            applyClasses(stepText, completedClasses.stepText);
            icons.forEach(icon => applyClasses(icon, completedClasses.icon));
            if (footer) {
               applyClasses(footer, completedClasses.footer);
               applyClasses(footer.querySelector('p'), completedClasses.footerText);
            }
            if(glow) glow.classList.add('opacity-0');
            if(numSpan) numSpan.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
            
          } else if (isFuture) {
            s.classList.add('opacity-60');
            applyClasses(card, defaultClasses.card);
            applyClasses(indicator, defaultClasses.indicator);
            applyClasses(title, defaultClasses.title);
            applyClasses(stepText, defaultClasses.stepText);
            icons.forEach(icon => applyClasses(icon, defaultClasses.icon));
            if (footer) {
               applyClasses(footer, defaultClasses.footer);
               applyClasses(footer.querySelector('p'), defaultClasses.footerText);
            }
            if(glow) glow.classList.add('opacity-0');
            if(numSpan) numSpan.innerHTML = '0' + (i + 1);
          }
        });
      });
    });
  }

  // Lógica del Menú Móvil
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && closeMobileMenuBtn && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.remove('-translate-x-full');
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('hidden');
        setTimeout(() => mobileMenuOverlay.classList.remove('opacity-0'), 10);
      }
      lenis.stop(); // Previene que el usuario haga scroll de fondo mientras el menú está abierto
    };

    const closeMenu = () => {
      mobileMenu.classList.add('-translate-x-full');
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.add('opacity-0');
        setTimeout(() => mobileMenuOverlay.classList.add('hidden'), 300);
      }
      lenis.start(); // Restaura el scroll
    };

    mobileMenuBtn.addEventListener('click', openMenu);
    closeMobileMenuBtn.addEventListener('click', closeMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        closeMenu();
        const target = this.getAttribute('href');
        if (target && target !== '#') {
          // Pequeño delay para asegurar que lenis.start() hizo efecto
          setTimeout(() => {
            lenis.scrollTo(target, { offset: -80 });
          }, 50);
        }
      });
    });
  }

