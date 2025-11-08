// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinksEl = document.querySelector('.nav-links');

navToggle && navToggle.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Smooth scroll with navbar offset (for anchor links)
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if(!href.startsWith('#') || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if(!target) return;
    const navbar = document.getElementById('navbar');
    const navHeight = navbar ? navbar.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 14;
    window.scrollTo({top, behavior:'smooth'});
    // close mobile menu if open
    if(navLinksEl.classList.contains('open')){
      navLinksEl.classList.remove('open');
      navToggle.classList.remove('open');
    }
  });
});

// Contact form demo behaviour
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('¡Gracias! Tu mensaje fue enviado. 💌');
    this.reset();
  });
}

// Parallax: ligera traslación de la parallax-layer según scroll
const parallaxLayer = document.querySelector('.parallax-layer');
window.addEventListener('scroll', function(){
  if(parallaxLayer){
    const scrolled = window.pageYOffset;
    parallaxLayer.style.transform = `translateY(${scrolled * 0.06}px)`;
  }
});

// Animate elements when in view
function animateOnView(){
  const revealElems = document.querySelectorAll('.card, .testimonial-card, .project, .cert-card');
  const triggerPoint = window.innerHeight * 0.85;
  revealElems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if(rect.top < triggerPoint){
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', animateOnView);
window.addEventListener('load', () => {
  // ensure hero animations run on load
  animateOnView();

  
});
// === Animación de aparición al hacer scroll ===
window.addEventListener('scroll', ()=>{
  document.querySelectorAll('.card').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight * 0.85){
      el.classList.add('visible');
    }
  });
});

