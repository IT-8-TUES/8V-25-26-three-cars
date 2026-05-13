// HARDER FUNCTION: Scroll-based background color changer
const colors = {
  intro: '#1a0000',
  quattro: '#1a0000',
  r8: '#240000',
  rs6: '#1a0000',
  etron: '#200000'
};
 
window.addEventListener('scroll', () => {
  for (const [sectionId, color] of Object.entries(colors)) {
    const section = document.getElementById(sectionId);
    if (!section) continue; // FIXED: was `return`, which killed the whole loop early
 
    const rect = section.getBoundingClientRect();
 
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      document.body.style.backgroundColor = color;
    }
  }
 
  // Show/hide scroll-to-top button
  const topBtn = document.getElementById('scrollTopBtn');
  if (topBtn) {
    topBtn.style.opacity = window.scrollY > 300 ? '1' : '0';
    topBtn.style.pointerEvents = window.scrollY > 300 ? 'all' : 'none';
  }
});
 
console.log('Audi page loaded - scroll to change background colors!');
 
// SCROLL-TO-TOP BUTTON — injected into the page, follows you everywhere
(function () {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.innerHTML = '&#8679;';
  btn.title = 'Back to top';
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: '9999',
    width: '3.2rem',
    height: '3.2rem',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255, 51, 51, 0.2)',
    color: 'white',
    fontSize: '1.6rem',
    cursor: 'pointer',
    opacity: '0',
    pointerEvents: 'none',
    transition: 'opacity 0.3s, background 0.2s',
    backdropFilter: 'blur(6px)',
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  btn.addEventListener('mouseenter', () => btn.style.background = 'rgba(255, 51, 51, 0.45)');
  btn.addEventListener('mouseleave', () => btn.style.background = 'rgba(255, 51, 51, 0.2)');
  document.body.appendChild(btn);
})();