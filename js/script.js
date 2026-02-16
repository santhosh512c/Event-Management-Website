const eventDate = new Date("March 30, 2026 09:00:00").getTime();

const countdownEl = document.getElementById("countdown");
if (countdownEl) {
  const updateCountdown = () => {
    const now = Date.now();
    const gap = eventDate - now;

    if (gap <= 0) {
      countdownEl.textContent = "Event is live now";
      return;
    }

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);
    countdownEl.textContent = `${days} days ${hours}h ${minutes}m left`;
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const tabs = document.querySelectorAll(".tab");
if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const dayId = tab.dataset.day;
      document.querySelectorAll(".day").forEach((day) => {
        day.classList.toggle("active", day.id === dayId);
      });
      tabs.forEach((btn) => btn.classList.toggle("active", btn === tab));
    });
  });
}

const regForm = document.getElementById("regForm");
if (regForm) {
  regForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const msg = document.getElementById("msg");
    if (msg) {
      msg.textContent = "Registration successful. Check your email for the pass.";
    }
    regForm.reset();
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const msg = document.getElementById("contactMsg");
    if (msg) {
      msg.textContent = "Message received. We will get back within 24 hours.";
    }
    contactForm.reset();
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const yearEls = document.querySelectorAll("[data-year]");
if (yearEls.length) {
  const year = new Date().getFullYear();
  yearEls.forEach((el) => {
    el.textContent = year;
  });
}
