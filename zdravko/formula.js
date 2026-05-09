const colors = {
  ferrari: '#3d0000',
  merc: '#003d2e',
  redbull: '#00003d',
  'redbull-': '#001a4d',
  maclaren: '#3d1500',
  williams: '#00154d',
  haas: '#2a2a2a',
  audi: '#1a1a1a',
  astonMartin: '#003d1a',
  alpine: '#00004d',
  cadillac: '#0f003d'
};

window.addEventListener('scroll', () => {
  for (const [team, color] of Object.entries(colors)) {
    const section = document.getElementById(team);
    if (!section) return;
    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      document.body.style.backgroundColor = color;
    }
  }
});