$(".slick-slider").not(".slick-initialized").slick({
  lazyLoad: "ondemand",
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});




document.addEventListener("DOMContentLoaded", function () {
  const dots = document.querySelectorAll(".slick-dots li");
  const slides = document.querySelectorAll(".slick-slide");
  const colors = document.querySelectorAll(".text-box .flex-item");
  const texts = document.querySelectorAll(".div59 .xm-text");

  // Função principal para ativar o índice
  function activateItem(index) {
    // Dots
    dots.forEach((dot, i) => {
      dot.classList.toggle("slick-active", i === index);
    });

    // Slides
    slides.forEach((slide, i) => {
      slide.setAttribute("aria-hidden", i !== index);
      slide.style.display = i === index ? "inline-block" : "none";
    });

    // Cores
    colors.forEach((item, i) => {
      item.classList.toggle("text_active", i === index);
      item.setAttribute("aria-selected", i === index);
      item.setAttribute("tabindex", i === index ? "0" : "-1");
    });

    // Textos
    texts.forEach((txt, i) => {
      txt.classList.toggle("text_active", i === index);
    });
  }

  // Ativar clique nos dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      activateItem(index);
    });
  });

  // Ativar clique nas cores
  colors.forEach((item, index) => {
    item.addEventListener("click", () => {
      activateItem(index);
    });
  });

  // Inicializa o primeiro ativo
  activateItem(0);
});
