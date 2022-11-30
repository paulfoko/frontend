 let srch= document.querySelector("#search-icon");
 
 srch.addEventListener('click',function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  var element, length, deg, z, move=0;


let back_to_top = document.querySelector('.btn_back_up');
window.addEventListener('scroll', () => {
if (window.pageYOffset > 100) {
        back_to_top.classList.add('show');
} else {
        back_to_top.classList.remove('show');
}
});
back_to_top.addEventListener('click', function (e) {
window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
});
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
    if (etape < 0){
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
    t.add('active');
    text_slider[etape].classList.add('print');
}, 5000)

  $(window).scrollTop() = 0;
jQuery(document).ready(function() {
  
    let btn = document.querySelector('.btn_back_up');
    let nav = document.querySelector('.nav-bar');
  
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
            nav.removeClass('.nav-bar');
            nav.addClass('.nav-bar_down');
        } else {
            btn.removeClass('show');
            nav.removeClass('.nav-bar_down');
            nav.addClass('.nav-bar');
        }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });
 
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  