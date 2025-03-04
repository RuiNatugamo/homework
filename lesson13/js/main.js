(function() {

    // Бургер 
    document.addEventListener('click', burgerInit)

    function burgerInit(event) {

        const target = event.target
        
        const burgerIcon = target.closest('.burger-icon')
        const burgerNavLink = target.closest('.nav__link')
        
        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return
    
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
     } else {
        document.body.classList.remove('body--opened-menu')
     }
    }

    // Модалка
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(event) {
        event.preventDefault()
        document.body.classList.add('body--opened-modal')  
    }

    function closeModal(event) {
        event.preventDefault()

        const target = event.target 

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

        }

    // Табы
    const tabControls = document.querySelector('.tab-controls')
    
    tabControls.addEventListener('click', toggleTab)

    function toggleTab(event) {

        const target = event.target 

        const tabControls = target.closest('.tab-controls__link')
        
        if (!tabControls) return      
        event.preventDefault()
        if (tabControls.classList.contains('tab-controls__link--active')) return

        const tabContenID = tabControls.getAttribute('href')
        const tabContent =  document.querySelector(tabContenID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControls.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }

    // Аккордеон

    const accordionList = document.querySelectorAll('.accordion-list')

    accordionList.forEach(el => {

        el.addEventListener('click', (event) => {

        const accordionList = event.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__control')
    
        const accordionControl = event.target.closest('.accordion-list__control')
        if (!accordionControl) return
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling


        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened')
            accordionOpenedContent.style.maxHeight = null
        }
      
        accordionItem.classList.toggle('accordion-list__item--opened')

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = null
        }



     })

 })
 
})()

