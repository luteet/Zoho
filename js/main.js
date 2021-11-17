
const body = document.querySelector('body');

body.addEventListener('click', function (e) {

    // Меню в шапке
    if (e.target.classList.contains('_accept-btn') || e.target.parentNode.classList.contains('_accept-btn')) {
        e.preventDefault();

        document.querySelectorAll('.check__label--radio').forEach(element => {
            if(element.checked) {
                window.location.href = e.target.getAttribute('href');
            }
        })

    }

})


const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 30,

    loop: true,
    navigation: {
        nextEl: '.reviews__nav--arrow-next',
        prevEl: '.reviews__nav--arrow-prev',
    },
    
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      992: {
        slidesPerView: 3,
        
      },
      769: {
        centeredSlides: true,
        slidesPerView: 2,
      }
    }
  })

