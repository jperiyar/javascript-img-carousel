import "./styles.css";

// swap the active image index

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const offset = btn.dataset.carouselButton === "next" ? 1 : -1;

    // find the current active image
    const slideContainer = btn
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeImage = slideContainer.querySelector("[data-active]");
    const slideElements = [...slideContainer.children];

    const newIndex =
      (slideElements.indexOf(activeImage) + offset + slideElements.length) %
      slideElements.length;
    console.log("newIndex", newIndex);

    // swap the active image
    slideElements[newIndex].dataset.active = true;

    // delete the current active
    delete activeImage.dataset.active;
  });
});
