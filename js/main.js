  const tabItem = document.querySelectorAll(".tabs-btn-item");
  const tabContent = document.querySelectorAll(".tabs-content-item");

  tabItem.forEach(function (element) {
    element.addEventListener("click", open);
  })

  function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item) {
      item.classList.remove("tabs-btn-item-active");
    })

    tabTarget.classList.add("tabs-btn-item-active");

    tabContent.forEach(function(item) {
      item.classList.remove("tabs-btn-item-active");
    })

    document.querySelector(`#${button}`).classList.add("tabs-btn-item-active");
  }

  const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: "fade",
  });