
    $(".searchbtn").click(function(){
        $(".search").addClass("active")
    })
    $(".search__close").click(function(){
        $(".search.active").removeClass("active")
    })
    // search button end
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
            $(".headerbottm").addClass("sticky animated fadeInDown");
        } else {
            $(".headerbottm").removeClass("sticky animated fadeInDown");
        }

    })
    // sticky header end
    // language toggle start
    if (document.dir == "ltr") {
        $('.english').hide();
        $('.arabic').show();
    } else if (document.dir == "rtl") {
        $('.english').show();
        $('.arabic').hide();
    }
    $('.arabic').click(function() {
        $('html').attr('dir', 'rtl');
        $('body').addClass('rtl').removeClass('ltr');
        $('.arabic').hide();
        $('.english').show();
        localStorage.setItem('rtl', 'true');
    });
    $('.english').click(function() {
        $('html').attr('dir', 'ltr');
        $('body').addClass('ltr').removeClass('rtl');
        $('.english').hide();
        $('.arabic').show();
        localStorage.removeItem('rtl');
    });
    if (localStorage.getItem('rtl') === 'true') {
        $('.arabic').hide();
        $('.english').show();
        $('body').addClass('rtl').removeClass('ltr');
        $('html').attr('dir', 'rtl');
    }
    // language toggle end
    // dark theme toggle start
     $('.lightoff').click(function() {
        $('body').addClass('dark');
        localStorage.setItem('darkClass', 'true');
    });
    $('.lighton').click(function() {
        $('body').removeClass('dark');
        localStorage.removeItem('darkClass');
    });
	if (localStorage.getItem('darkClass') === 'true'){
		$('body').addClass('dark');
	}
    // dark theme toggle end
    // if (window.innerWidth <= 1023) {
    //     $(".navlist__item").click(function() {
    //       $(this).toggleClass("active");
    //     });
    // }
    $(".navbtn").click(function(){
        $(".navlist").slideToggle(200)
    })