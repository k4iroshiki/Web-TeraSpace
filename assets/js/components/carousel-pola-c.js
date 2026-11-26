/**
 * Pola C - Carousel Kartu Portrait Controller
 * Mendukung navigasi tombol chevron (Prev / Next) dan keyboard accessibility.
 */
document.addEventListener("DOMContentLoaded", () => {
  const rail = document.getElementById("polaCCarouselRail");
  const prevBtn = document.getElementById("polaCPrevBtn");
  const nextBtn = document.getElementById("polaCNextBtn");

  if (!rail || !prevBtn || !nextBtn) return;

  const getScrollAmount = () => {
    const card = rail.querySelector(".pola-c-card");
    if (!card) return 240;
    const gap = 16;
    return card.offsetWidth + gap;
  };

  prevBtn.addEventListener("click", () => {
    rail.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    rail.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  // Keyboard navigation when rail or buttons are focused
  rail.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      rail.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      rail.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    }
  });
});
