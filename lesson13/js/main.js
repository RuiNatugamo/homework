(function() {

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

})()