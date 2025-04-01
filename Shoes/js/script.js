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

  // Аккорденон //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const btnOpen = document.querySelector('.accordion__button-open')
  const btnClose = document.querySelector('.accordion__button-close')
  const accordionList = document.querySelector('.accordion-list')


  const openAccordion = () => {
    accordionList.classList.toggle('accordion--open')
    accordionList.style.maxHeight = accordionList.scrollHeight + 'px'

    btnClose.classList.add('show--btn')
    btnOpen.classList.add('hide--btn')
  }
  
  const closeAccordion = () => {
      if (accordionList.classList.contains('button__filters-content--opened')) {
          accordionList.style.maxHeight = accordionList.scrollHeight + 'px'
      } else {
        accordionList.style.maxHeight = null
      }

    btnClose.classList.remove('show--btn')
    btnOpen.classList.remove('hide--btn')
  }

  btnOpen.addEventListener('click', openAccordion)
  btnClose.addEventListener('click', closeAccordion)


// Фильтр  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const buttonFilters = document.querySelector('.button__filters')
  const buttonContent = document.querySelector('.button__filters-content')

  const openContent = () => {
    buttonContent.classList.toggle('button__filters-content--opened')
    buttonFilters.classList.toggle('button__filters--opened')
  
      if (buttonContent.classList.contains('button__filters-content--opened')) {
         buttonContent.style.maxHeight = buttonContent.scrollHeight + 'px'
    } else {
        buttonContent.style.maxHeight = null
    }
  }

  buttonFilters.addEventListener('click', openContent)

})()