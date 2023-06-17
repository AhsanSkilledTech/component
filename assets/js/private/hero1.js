var hero1 = new Swiper(".hero1", {
    loop:true,
    speed: 900,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

if ($(window).innerWidth() <= 1023) {
    $(".navbtn").click(function(){
        $(this).toggleClass("active");
        $(".navlist").slideToggle(400);
    });
    
    $("body").click(function(){
        $(".navlist").slideUp(400);
        $(".navbtn").removeClass("active");
    });
    
    $(".navbtn, .navlist").click(function(event){
        event.stopPropagation();
    });
} 
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $(".header").addClass("sticky animated fadeInDown");
    } else {
        $(".header").removeClass("sticky animated fadeInDown");
    }
})