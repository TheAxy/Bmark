'use strict'

const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

if (isMobile.any()) {

    let menuItem = document.querySelectorAll('.menu__btn')
    if (menuItem.length > 0) {
        menuItem.forEach(element => {
            element.style.cursor = 'default';
            element.addEventListener('click', e => {                    
                element.parentElement.classList.toggle('_active')
                
                })
            })
    }

    const body = document.querySelector('body')
    const burger = document.querySelector('.menu-burger')
    const menuNav = document.querySelector('.header__menu')
    if (burger) {
        burger.addEventListener('click', e => {
            menuNav.classList.toggle('_active')
            burger.classList.toggle('_active')
            body.classList.toggle('_lock')
    })
    }

    const matchMedia = window.matchMedia('(max-width: 767px)')

    function handleTabletChange(e) {
        const target = e.target
        const footerButton = document.querySelectorAll('.menu-footer__btn')
        const footerItem = document.querySelectorAll('.menu-footer__item')
        
            
                
        footerButton.forEach(element => {                
            if (e.matches) {
            element.classList.add('_mobile')
            } else {
              element.classList.remove('_mobile')
            }
    })
    }
    matchMedia.addListener(handleTabletChange)
    handleTabletChange(matchMedia)
}


let swiper = new Swiper('.team__wrap', {
    slidesPerGroup: 1,
    spaceBetween: 30,
    slidesPerView: 'auto',
    pagination: {
        el: ".team__dots",
        clickable: true,
    },
    toucRatio: 1,
    touchAngle: 60,
})