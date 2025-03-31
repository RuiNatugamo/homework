(function() {

 // Бургер ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  document.addEventListener('click', burgerInit)

  function burgerInit(event) {

      const target = event.target
      
      const burgerIcon = target.closest('.burger-icon')
      const burgerNavLink = target.closest('.header__link')
      
      if (!burgerIcon && !burgerNavLink) return
      if (document.documentElement.clientWidth > 1100) return
  
      if (!document.body.classList.contains('body--opened-menu')) {
          document.body.classList.add('body--opened-menu')
   } else {
      document.body.classList.remove('body--opened-menu')
   }
  }

  // Первый слайдер //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const swiper = new Swiper('.preview__slider', {

    slidesPerView: 1,
    direction: 'vertical',
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  
  });

   // Второй слайдер //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    new Swiper('.directory__slider', {
      
    spaceBetween: 40,
  
    navigation: {
      nextEl: '.directory__next',
      prevEl: '.directory__prev',
    },

    breakpoints: {

      320: {
        slidesPerView: 1,
      },

      1100: {
        slidesPerView: 2,
      },

      1500: {
        slidesPerView: 3,
      },

      1800: {
        slidesPerView: 4,
      }

    }

  });

  // Аккордено  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const btnOpen = document.querySelector('.accordion__button-open')
  const btnClose = document.querySelector('.accordion__button-close')
  const accordionList = document.querySelector('.accordion-list')


  const openAccordion = () => {
    accordionList.classList.add('accordion--open')
    btnClose.classList.add('show--btn')
    btnOpen.classList.add('hide--btn')
  }

  const closeAccordion = () => {
    accordionList.classList.remove('accordion--open')
    btnClose.classList.remove('show--btn')
    btnOpen.classList.remove('hide--btn')
  }

  btnOpen.addEventListener('click', openAccordion)

  btnClose.addEventListener('click', closeAccordion)


})()