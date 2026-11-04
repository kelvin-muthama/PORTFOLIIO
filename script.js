const portfolioConfig = {
  email: "muthamakelvinmutuku@gmail.com",
  linkedin: "https://www.linkedin.com/in/kelvin-mutuku-muthama",
  github: "https://github.com/kelvin-muthama",
  projects: {
    "KHF-LAM": "https://a-data-driven-analysis-model-for-kenyas-health-facility-landsc.streamlit.app/",
    "Supermarket Sales Dashboard": "https://github.com/Taught90/POWER-BI-DASHBORDS",
    "Scrapy project": "https://github.com/Taught90/PYTHON-WEB-SCRAPERS",
    "HOTS FOR DATA": "https://hotsfordatamvp.netlify.app/"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const toast = document.getElementById("toast");

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3200);
  };

  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) window.lucide.createIcons();
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) window.lucide.createIcons();
    });
  });

  // Mark the current section in the navigation.
  const sections = document.querySelectorAll("main section[id], main section.hero");
  const navItems = document.querySelectorAll(".nav-link");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id || "top";
      navItems.forEach(item => {
        const target = item.getAttribute("href");
        item.classList.toggle("active", target === `#${id}` || (id === "top" && target === "#top"));
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => observer.observe(section));

  document.getElementById("year").textContent = new Date().getFullYear();

  // Apply contact links only when a real value has been supplied.
  const emailText = document.getElementById("emailText");
  const emailLink = document.getElementById("emailLink");
  if (portfolioConfig.email.trim()) {
    emailText.textContent = portfolioConfig.email;
    emailLink.href = `mailto:${portfolioConfig.email}`;
  } else {
    emailLink.addEventListener("click", event => {
      event.preventDefault();
      showToast("Add your email address in script.js before publishing.");
    });
  }

  const linkedinContact = document.getElementById("linkedinContact");
  if (portfolioConfig.linkedin.trim()) {
    linkedinContact.href = portfolioConfig.linkedin;
    linkedinContact.target = "_blank";
    linkedinContact.rel = "noopener noreferrer";
    linkedinContact.classList.remove("placeholder-link");
  }

  const githubLink = document.querySelector('[aria-label="GitHub profile"]');
  if (portfolioConfig.github.trim()) {
    githubLink.href = portfolioConfig.github;
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.classList.remove("placeholder-link");
  }

  document.querySelectorAll("[data-project]").forEach(link => {
    const key = link.dataset.project;
    const url = portfolioConfig.projects[key];
    if (url && url.trim()) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.remove("placeholder-link");
      link.innerHTML = 'View project <i data-lucide="arrow-up-right"></i>';
    } else {
      link.addEventListener("click", event => {
        event.preventDefault();
        showToast(`Add the real link for "${key}" in script.js.`);
      });
    }
  });


  // Contact form handler
  const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        if (!contactForm.reportValidity()) return;

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        const originalText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        try {
            const response = await fetch(
                "https://formspree.io/f/mwllaqzp",
                {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
            } else {
                const result = await response.json();
                alert(
                    result.errors
                        ? result.errors.map(error => error.message).join("\n")
                        : "Unable to send your message. Please try again."
                );
            }
        } catch (error) {
            console.error("Contact form error:", error);
            alert("A connection error occurred. Please try again.");
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}})