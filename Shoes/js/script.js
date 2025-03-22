(function() {

  // Первый слайдер //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const swiper = new Swiper('.preview__slider', {

    slidesPerView: 1,
    direction: 'vertical',
    
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  
  });

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


})()