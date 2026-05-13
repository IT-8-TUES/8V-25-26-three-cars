const colors = {
  ferrari: '#3d0000',
  merc: '#003d2e',
  redbull: '#00003d',
  'redbull-': '#001a4d',
  maclaren: '#4d1f00',
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
    if (!section) continue;
    const rect = section.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      document.body.style.backgroundColor = color;
    }
  }
});



document.querySelectorAll('.carousel').forEach(carousel => {
  const img = carousel.querySelector('img');
  const images = img.dataset.images.split(',');
  let current = 0;

  carousel.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    img.src = images[current];
  });

  carousel.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % images.length;
    img.src = images[current];
  });
});


function toggleMenu() {
  const menu = document.getElementById('teamMenu');
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
  } else {
    menu.classList.add('open');
    menu.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('teamMenu');
  const btn = document.querySelector('.team-nav-btn');
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});

document.querySelectorAll('.team-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('teamMenu').classList.remove('open');
  });
});