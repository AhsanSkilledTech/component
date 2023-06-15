
    $(".searchbtn").click(function(){
        $(this).toggleClass("active")
        $(".searchform").toggleClass("active")
    })
    // search button end
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $(".stickynav").addClass("active animated fadeInDown");
        } else {
            $(".stickynav").removeClass("active animated fadeInDown");
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

    $(".navbtn").click(function(){
        $(".mobileNav").toggleClass("active")
    })
    $(".nav-close").click(function(){
        $(".mobileNav").removeClass("active")
    })
    $("body").click(function(){
        $(".mobileNav").removeClass("active")
    })
    $(".navbtn, .mobileNav").click(function(event){
        event.stopPropagation();
    })
    $(".mblnavdrpbtn").click(function(){
        $(this).toggleClass("active")
        $(".mobileNavlistDrp").slideToggle(200)
    })
    