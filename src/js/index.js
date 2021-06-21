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
      break
    }
    default: break
  }
}
