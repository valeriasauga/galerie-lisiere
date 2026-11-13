const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  }));
}
const form = document.getElementById('newsletter-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form-status').textContent = 'Formulaire de démonstration : aucun e-mail n’est envoyé. Il faudra connecter un service d’inscription.';
});
