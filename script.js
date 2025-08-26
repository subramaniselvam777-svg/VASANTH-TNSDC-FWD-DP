// Hero animations
anime({
  targets: '#title',
  translateY: [-100, 0],
  opacity: [0, 1],
  duration: 2000,
  easing: 'easeOutBounce'
});

anime({
  targets: '.subtitle',
  translateX: [-200, 0],
  opacity: [0, 1],
  delay: 800,
  duration: 1500,
  easing: 'easeOutExpo'
});

anime({
  targets: '.btn',
  scale: [0, 1],
  delay: 1500,
  duration: 1000,
  easing: 'easeOutElastic(1, .8)'
});

// Animate skill cards
anime({
  targets: '.skill-card',
  opacity: [0, 1],
  translateY: [50, 0],
  delay: anime.stagger(200, { start: 1000 }),
  duration: 1200,
  easing: 'easeOutExpo'
});

// Animate project cards on scroll
window.addEventListener("scroll", () => {
  let projects = document.querySelectorAll(".project-card");
  projects.forEach((card, i) => {
    let pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      anime({
        targets: card,
        opacity: [0, 1],
        translateY: [50, 0],
        delay: i * 200,
        duration: 1000,
        easing: "easeOutExpo"
      });
    }
  });
});