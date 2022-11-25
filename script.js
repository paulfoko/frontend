
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

let img_slider = document.getElementsByClassName('container_img');
let text_slider = document.getElementsByClassName('text');
let etape = 0;

let nbr_img = img_slider.length;
let preview = document.querySelector('.preview');
let next = document.querySelector('.next');

function removeActiveImages(){
    for(let i = 0; i < nbr_img; i++){
        img_slider[i].classList.remove('active');
        text_slider[i].classList.remove('print');
    }
}

next.addEventListener('click', function(){
    etape++;
    if (etape >= nbr_img){
        etape = 0;
    }
    removeActiveImages();
    img_slider[etape].classList.add('active');
    text_slider[etape].classList.add('print');
})

preview.addEventListener('click', function(){
    etape--;
    if (etape < nbr_img){
        etape = nbr_img - 1;
    }
    removeActiveImages();
    img_slider[etape].classList.add('active');
    text_slider[etape].classList.add('print');
})

setInterval(function() {
    etape ++;
    if (etape >= nbr_img){
        etape =0;
    }
    removeActiveImages();
    img_slider[etape].classList.add('active');
    text_slider[etape].classList.add('print');
}, 5000)