import '../scss/style.scss';
import Swiper from 'swiper/bundle';
console.log('Works!');
const slider = document.querySelector('.swiper-container')
const slider2 = document.querySelector('.swiper-container_2')
const slider3 = document.querySelector('.swiper-container_3')
const swiper = new Swiper(slider, {
  spaceBetween: 16,
  slidesPerView: "auto",
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
})
const swiper2 = new Swiper(slider2, {
  spaceBetween: 16,
  slidesPerView: "auto",
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
})
const swiper3 = new Swiper(slider3, {
  spaceBetween: 16,
  slidesPerView: "auto",
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
})
let click = document.addEventListener('click', action)
const menu = document.querySelector('.menu')
const blur = document.querySelector('.blur')
const feedback = document.querySelector('.feedback')
const call = document.querySelector('.call')
const forms = document.querySelectorAll('form')
const contentTexts = {
  '1': 'Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br><br>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.<br>Мы являемся авторизованным сервисным центром по ремонту техники Dell. Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.<br><br>Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера, что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь, советуют нас родным и близким.',
  '2': 'Не следует, однако забывать, что реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации форм развития. Значимость этих проблем настолько очевидна, что укрепление и развитие структуры позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. С другой стороны новая модель организационной деятельности в значительной степени обуславливает создание соответствующий условий активизации. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. <br><br> Повседневная практика показывает, что укрепление и развитие структуры способствует подготовки и реализации систем массового участия. Задача организации, в особенности же дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки новых предложений. Товарищи! начало повседневной работы по формированию позиции в значительной степени обуславливает создание новых предложений. Повседневная практика показывает, что рамки и место обучения кадров требуют определения и уточнения новых предложений.',
  '3': 'Повседневная практика показывает, что сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности позволяет оценить значение дальнейших направлений развития.<br><br>Разнообразный и богатый опыт консультация с широким активом требуют от нас анализа модели развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Значимость этих проблем настолько очевидна, что консультация с широким активом требуют определения и уточнения новых предложений. Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации дальнейших направлений развития.',
  '4': 'Задача организации, в особенности же реализация намеченных плановых заданий способствует подготовки и реализации новых предложений. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности играет важную роль в формировании дальнейших направлений развития. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же реализация намеченных плановых заданий способствует подготовки и реализации существенных финансовых и административных условий. Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.<br><br>Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Таким образом дальнейшее развитие различных форм деятельности позволяет оценить значение систем массового участия. Задача организации, в особенности же дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание соответствующий условий активизации.',
  '5': 'Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. С другой стороны укрепление и развитие структуры влечет за собой процесс внедрения и модернизации систем массового участия. Разнообразный и богатый опыт новая модель организационной деятельности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют определения и уточнения существенных финансовых и административных условий.<br><br>Значимость этих проблем настолько очевидна, что новая модель организационной деятельности способствует подготовки и реализации направлений прогрессивного развития. Равным образом начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации форм развития.',
  '6': 'Идейные соображения высшего порядка, а также реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.<br><br>Не следует, однако забывать, что дальнейшее развитие различных форм деятельности требуют определения и уточнения систем массового участия. Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач.',
}
const contentImages = {
  '1': './img/PictureCopy.jpg',
  '2': './img/2.jpg',
  '3': './img/3.png',
  '4': './img/4.jpg',
  '5': './img/5.jpg',
  '6': './img/6.jpg',
}
function action(event){
  let targetEl= event.target
  let act = targetEl.dataset.act
  let visible = document.querySelector('.visible')
  switch (act){
    case 'burger':{
      menu.classList.add('visible')
      blur.classList.add('visible')
      break
    }
    case 'close': {
      let parentEl = targetEl.closest('.visible')
      parentEl.classList.remove('visible')
      blur.classList.remove('visible')
      break
    }
    case 'massage': {
      menu.classList.remove('visible')
      feedback.classList.add('visible')
      blur.classList.add('visible')
      break
    }
    case 'call': {
      menu.classList.remove('visible')
      call.classList.add('visible')
      blur.classList.add('visible')
      break
    }
    case 'blur': {
      blur.classList.remove('visible')
      document.querySelector('.visible').classList.remove('visible')
      break
    }
    case 'link': {
      document.querySelector('.link_active').classList.remove('link_active')
      targetEl.classList.add('link_active')
      break
    }
    case 'lang': {
      document.querySelector('.link_lang').classList.remove('link_lang')
      targetEl.classList.add('link_lang')
      break
    }
    case 'nav':{
      let active = document.querySelector('.page-nav__button_active')
      active.classList.remove('page-nav__button_active')
      targetEl.classList.add('page-nav__button_active')
      let content = targetEl.dataset.content
      changeContent(content)
      break
    }
    default: break
  }

  function changeContent(key){
    const textBlock = document.querySelector('.content-block__text')
    const img = document.querySelector('#img')
    textBlock.innerHTML = contentTexts[key]
    img.setAttribute("src", contentImages[key] )
  }
  for (let form of forms) {
    form.onsubmit = function () {
      let parentEl = form.closest('.visible')
      let inputs = form.querySelectorAll('.input')
      for (let input of inputs){
        input.value = ""
      }
      parentEl.classList.remove('visible')
      blur.classList.remove('visible')
    }
  }
}
