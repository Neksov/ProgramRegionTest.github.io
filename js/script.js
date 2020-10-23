// Слайдер 1
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  keyboard: true,
  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    850: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// Слайдер 2
var swiper2 = new Swiper('.swiper-container-two', {
  slidesPerView: 3,
  keyboard: true,
  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination ',
    clickable: true,
  },
});

// Слайдер 3
var swiper3 = new Swiper('.swiper-container-three', {
  slidesPerView: 3,
  keyboard: true,
  breakpoints: {
    1100: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//валидация форм
$(".send__form").validate({
  errorClass: "invalid",
  rules: {
    userEmail: {
      required: true,
      email: true,
    },
    userEmail: {
      required: "Обязательно укажите email",
      email: "Введите в формате: name@domain.com",
    },
  },
  //отправка формы через аякс
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(".send__form").serialize(), //Преобразует данные формы в строку, пригодную для использования в URL
      success: function (response) {
        $(form)[0].reset(); // чистит поля после отправки формы
      },
    });
  },
});


  //анимация
  new WOW().init();

  