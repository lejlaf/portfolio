(() => {
  // 1. Missing image? Remove it so the labelled placeholder shows instead of a broken icon.
  document.querySelectorAll('.media img').forEach((img) => {
    const kill = () => img.remove();
    if (img.complete && img.naturalWidth === 0) kill();
    else img.addEventListener('error', kill, { once: true });
  });

  // 2. Mobile menu
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.hidden;
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // 3. Gentle reveal on scroll
  const els = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add('in'));
  }

  // 4. Footer year
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
})();
