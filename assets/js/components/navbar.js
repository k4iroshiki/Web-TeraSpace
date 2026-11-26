/**
 * Navigasi & Mobile Collapse Handler
 * Teras JTI - Kelompok 4 (NoBugNoCry)
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Auto-close navbar collapse on mobile when link is clicked
  const mobileCollapse = document.getElementById("navMobileMenu") || document.getElementById("navPublicMenu");
  const mobileNavLinks = document.querySelectorAll("#navMobileMenu .nav-link, #navPublicMenu .nav-link");

  if (mobileCollapse && window.bootstrap) {
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileCollapse.classList.contains("show")) {
          const bsCollapse = window.bootstrap.Collapse.getInstance(mobileCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // 2. Smooth scrolling for internal anchor links (#)
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

  // 3. Highlight active link in internal topbar based on URL
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const internalNavLinks = document.querySelectorAll(".nav-utama .nav-link");
  internalNavLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPath) {
      internalNavLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    }
  });

  // 4. Scroll spy: ubah menu aktif di navbar publik sesuai posisi scroll
  const allNavAnchors = [
    ...document.querySelectorAll('.pola-navbar-link[href^="#"]'),
    ...document.querySelectorAll('#navMobileMenu .nav-link[href^="#"]')
  ];

  const spySections = allNavAnchors
    .map((link) => ({
      link,
      section: document.querySelector(link.getAttribute("href")),
    }))
    .filter((item) => item.section);

  if (spySections.length) {
    const updateActiveNav = () => {
      const offset = 120; // sedikit di bawah tinggi navbar sticky
      let currentSectionId = null;

      spySections.forEach((item) => {
        if (item.section.getBoundingClientRect().top <= offset) {
          currentSectionId = item.section.getAttribute("id");
        }
      });

      // Mentok di bawah halaman -> aktifkan menu terakhir (Kontak)
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 6;
      if (atBottom) {
        currentSectionId = "kontak";
      }

      allNavAnchors.forEach((link) => {
        const href = link.getAttribute("href");
        const isActive = href === `#${currentSectionId}` || (!currentSectionId && href === "#beranda");
        link.classList.toggle("active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    };

    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("resize", updateActiveNav);
    updateActiveNav();
  }
});
