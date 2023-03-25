// const itemSlider = document.querySelectorAll('.slider-item')
// const wrapSlider = document.querySelector('.slider-wrapper')

// let width
// let count = 0
// let offset = 0

// function init() {
//     width =  wrapSlider.offsetWidth
//     console.log(width)
//     wrapSlider.addEventListener('pointermove', (e) => {
//         console.log(e.movementX)
//         offset += e.movementX
//         //wrapSlider.classList.add(`translate-x-[${offset}]`)
//         let str = wrapSlider.classList.value
        

//         if (str.includes('translate')) {
//             let indexLastClass = wrapSlider.classList.length-1
//             let lastClass = wrapSlider.classList.item(indexLastClass)
//             wrapSlider.classList.remove('overflow-hidden')
//             wrapSlider.classList.remove(lastClass)
//             wrapSlider.classList.add(`translate-x-[${offset}]`)
//             //wrapSlider.classList.add('overflow-hidden')
//         }

//     })
// }

// init()

const swiper = new Swiper('.swiper', {
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  spaceBetween: 10,
  width: 300,
    
})