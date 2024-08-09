const advantagesData = [
  {
    img: "./images/advantages1.jpg",
    altImg: "мама с ребёнком",
    title: "Уверенность в завтрашнем дне",
    text: "ООО «Conecom», российское подразделение французского концерна DuffBeer. Мы компания, которая честно ведет свой бизнес на территории РФ, соблюдая законодательство и гарантируя стабильность и уверенность в завтрашнем дне.",
  },
  {
    img: "./images/advantages2.jpg",
    altImg: "мужчина на работе",
    title: "Безопасность на рабочем месте - приоритет №1",
    text: "Вопросам безопасности и качества пищевой продукции в нашей компании уделяется повышенное внимание. Все производства группы DuffBeer в России постоянно работают над улучшением процессов и стремятся сделать все возможное, чтобы рабочий процесс был максимально безопасным и комфортным.",
  },
  {
    img: "./images/advantages3.jpg",
    altImg: "мужчина смотрит вдаль",
    title: "Стабильная заработная<br />плата",
    text: "Каждый сотрудник в нашей компании обеспечен полисом добровольного медицинского страхования. Кроме того, на каждом заводе есть медицинский пункт для сотрудников. Осуществляется страхование от несчастных случаев с первого дня работы.",
  },
  {
    img: "./images/advantages4.jpg",
    altImg: "врач и пациент",
    title: "Заботимся о здоровье сотрудников",
    text: "Мы обеспечиваем нашим сотрудникам стабильную заработную плату в соответствии с рынком региона. Средний стаж работы в нашей компании – 7 лет.",
  },
  {
    img: "./images/advantages5.jpg",
    altImg: "мужчина на работе",
    title:
      "Предоставление удобной спецодежды и СИЗ для производственного персонала",
    text: "Мы предоставляем удобные СИЗ и спецодежду и в случае износа или порчи обмениваются на новые.",
  },
  {
    img: "./images/advantages6.jpg",
    altImg: "конференция",
    title: "Обучение: различные программы обучения и профессиональные тренинги",
    text: "Мы ставим перед собой амбициозные и интересные цели, а реализация задач является командной работой сотрудников из различных подразделений.  Мы также принимаем активное участие в работе над кросс-функциональными проектам с коллегами из других стран присутствия DuffBeer.",
  },
  {
    img: "./images/advantages7.jpg",
    altImg: "общее фото сотрудников на природе",
    title: "Возможности для реализации творческого потенциала",
    text: "Мы уделяем много внимания развитию наших сотрудников. В компании работает Внутренний центр обучений и ежегодно проводится большое количество обучающих мероприятий как локально на заводах, так и в головном офисе DuffBeer во Франции.",
  },
  {
    img: "./images/advantages8.jpg",
    altImg: "общее фото семей с детьми сотрудников",
    title: "Мы - семейная компания и любим проводить время вместе",
    text: "Наша миссия лежит в основе социально-корпоративной ответственности. Мы ведем свою деятельность в соответствии с тремя основными правилами:  мы заботимся о людях; наша деятельность устойчива по своей природе; мы заботимся об окружающей среде.",
  },
  {
    img: "./images/advantages9.jpg",
    altImg: "мужчина заботится о растении",
    title: "Мы - социально ответственная компания и заботимся об окружающих",
    text: "Ежегодно мы проводим корпоративные мероприятия не только для наших сотрудников, но и для семей наших сотрудников. А корпоративные подарки для детей сотрудников – наша добрая предновогодняя традиция.",
  },
];

function createCardElement(data) {
  const cardHtml = `
    <li class="advantages__list-item">
      <div class="advantages__list-item-img-block" style="background-image: url(${data.img});"></div>
      <div class="advantages__list-item-text-block">
        <h3 class="advantages__list-item-title">
          ${data.title}
        </h3>
        <p class="advantages__list-item-text">
          ${data.text}
        </p>
        <button class="advantages__list-item-button">
          <span></span>
          <span></span>
        </button>
      </div>
    </li>
  `;

  return cardHtml;
}

const advantagesList = document.querySelector(".advantages__list");

advantagesData.forEach((data) => {
  advantagesList.insertAdjacentHTML("beforeend", createCardElement(data));
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".advantages__list-item-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const listItem = button.closest(".advantages__list-item");
      listItem.classList.toggle("active");
    });
  });
});

$(document).ready(function () {
  function initializeSlick(selector, settings) {
    if (!$(selector).hasClass("slick-initialized")) {
      $(selector).slick(settings);
    }
  }

  function destroySlick(selector) {
    if ($(selector).hasClass("slick-initialized")) {
      $(selector).slick("unslick");
    }
  }

  function handleSlick(selector, settings) {
    var windowWidth = $(window).width();
    if (windowWidth <= 1019) {
      initializeSlick(selector, settings);
    } else {
      destroySlick(selector);
    }
  }

  var commonSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:
      '<button type="button" class="slider-btn slider-prev"><svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="slider-btn-color" d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM11 3.5L1 3.5V4.5L11 4.5V3.5Z" fill="#0A3B93"/></svg></button>',
    nextArrow:
      '<button type="button" class="slider-btn slider-next"><svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="slider-btn-color" d="M0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM11 3.5L1 3.5V4.5L11 4.5V3.5Z" fill="#0A3B93"/></svg></button>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function initAllSlicks() {
    handleSlick(".advantages__list", commonSettings);
    handleSlick(".figures__list-mob", commonSettings);
  }

  initAllSlicks();

  $(window).resize(function () {
    initAllSlicks();
  });
});
