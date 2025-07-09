// Particles.js configuration
particlesJS('particles-js', {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#FFD700'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#FFD700',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      },
      
    }
  },
  retina_detect: true
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".read-more").forEach(function (button) {
    button.addEventListener("click", function () {
      const projectCard = button.closest(".project-card");
      const dots = projectCard.querySelector(".dots-readmore");
      const moreText = projectCard.querySelector(".more-text");
      const readMoreText = projectCard.querySelector(".read-more");

      if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        readMoreText.textContent = "Read More";
      } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        readMoreText.textContent = "Read Less";
      }
    });
  });
});
