/**
 * Navigasi Kapsul Melayang & Mobile Drawer Handler
 * Teras JTI - Kelompok 4 (NoBugNoCry)
 */
document.addEventListener("DOMContentLoaded", () => {
  const navbarWrapper = document.querySelector(".pola-navbar-wrapper");
  const mobilePanel = document.getElementById("navMobilePanel");
  const mobileNavLinks = document.querySelectorAll("#navMobilePanel a");

  // 1. Bayangan kapsul melayang lebih pekat saat halaman digulir > 8px
  if (navbarWrapper) {
    const handleScrollShadow = () => {
      if (window.scrollY > 8) {
        navbarWrapper.classList.add("is-scrolled");
      } else {
        navbarWrapper.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", handleScrollShadow, { passive: true });
    handleScrollShadow();
  }

  // 2. Tutup otomatis menu mobile setelah salah satu tautan diklik
  if (mobilePanel && window.bootstrap) {
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobilePanel.classList.contains("show")) {
          const bsCollapse = window.bootstrap.Collapse.getInstance(mobilePanel);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // 3. Smooth scrolling untuk tautan internal anchor (#)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#" && !targetId.startsWith("#modal")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // 4. ScrollSpy berbasis IntersectionObserver dengan fallback scroll listener
  const desktopLinks = document.querySelectorAll(".pola-navbar-link[href^='#']");
  const mobileLinks = document.querySelectorAll(".pola-navbar-mobile-link[href^='#']");
  const allNavLinks = [...desktopLinks, ...mobileLinks];

  const sectionIds = ["beranda", "tentang", "fasilitas", "galeri", "alur", "jadwal", "faq", "kontak"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActiveLink = (currentId) => {
    allNavLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const isActive = href === `#${currentId}`;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    };

    let activeSectionId = "beranda";

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSectionId = entry.target.id;
          setActiveLink(activeSectionId);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // Fallback bila pengguna telah menggulir sampai dasar halaman (aktifkan kontak)
    window.addEventListener(
      "scroll",
      () => {
        const atBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 16;
        if (atBottom) {
          setActiveLink("kontak");
        }
      },
      { passive: true }
    );
  } else {
    // Fallback standar scroll offset
    const handleScrollSpy = () => {
      const offset = 110;
      let currentId = "beranda";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= offset) {
          currentId = section.id;
        }
      });

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 16;
      if (atBottom) currentId = "kontak";

      setActiveLink(currentId);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
  }
});
