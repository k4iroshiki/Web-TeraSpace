/**
 * Pola C - Carousel Kartu Portrait Controller
 * Mendukung scroll per kartu, penonaktifan tombol di ujung rel (disabled state),
 * navigasi keyboard (panah kiri/kanan), dan touch-swipe scroll snap.
 */
document.addEventListener("DOMContentLoaded", () => {
  const rail = document.getElementById("polaCCarouselRail");
  const prevBtn = document.getElementById("polaCPrevBtn");
  const nextBtn = document.getElementById("polaCNextBtn");

  if (!rail || !prevBtn || !nextBtn) return;

  const getScrollAmount = () => {
    const card = rail.querySelector(".pola-c-card");
    if (!card) return 240;
    const style = window.getComputedStyle(rail);
    const gap = parseFloat(style.columnGap || style.gap) || 20;
    return card.offsetWidth + gap;
  };

  const updateButtonStates = () => {
    const scrollLeft = rail.scrollLeft;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    const tolerance = 4; // toleransi subpixel

    prevBtn.disabled = scrollLeft <= tolerance;
    nextBtn.disabled = scrollLeft >= maxScroll - tolerance;
  };

  prevBtn.addEventListener("click", () => {
    rail.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    rail.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  // Keyboard navigation when rail is focused
  rail.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      rail.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      rail.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    }
  });

  rail.addEventListener("scroll", updateButtonStates, { passive: true });
  window.addEventListener("resize", updateButtonStates);

  // Initial check
  updateButtonStates();
});
