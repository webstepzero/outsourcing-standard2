const strengthPicture = new Swiper(".strength-picture", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

const strengthDiscription = new Swiper(".strength-discription", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});

strengthPicture.controller.control = strengthDiscription;
strengthDiscription.controller.control = strengthPicture;
