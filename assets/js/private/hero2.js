
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $(".hdrbtm").addClass("sticky animated fadeInDown");
        } else {
            $(".hdrbtm").removeClass("sticky animated fadeInDown");
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

    if($('.revolution-slider .tp-banner').length){
		jQuery('.revolution-slider .tp-banner').show().revolution({
            delay:10000,
            startwidth:1200,
            startheight:720,
            hideThumbs:600,
        
            thumbWidth:80,
            thumbHeight:50,
            thumbAmount:5,
	
            navigationType:0,
            navigationArrows:"1",
            navigationStyle:"preview3",
        
            touchenabled:"on",
            onHoverStop:"off",
	
            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,
	
            parallax:"mouse",
            parallaxBgFreeze:"on",
            parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
        
            keyboardNavigation:"off",
	
            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:0,
	
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:0,
            soloArrowLeftVOffset:0,
        
            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:0,
            soloArrowRightVOffset:0,
        
            shadow:0,
            fullWidth:"on",
            fullScreen:"off",
        
            spinner:"spinner4",
        
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
	
            shuffle:"off",
        
            autoHeight:"off",
            forceFullWidth:"on",
        
            hideThumbsOnMobile:"on",
            hideNavDelayOnMobile:1500,
            hideBulletsOnMobile:"on",
            hideArrowsOnMobile:"on",
            hideThumbsUnderResolution:0,
        
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0,
            videoJsPath:"",
            fullScreenOffsetContainer: ""
	    });
	}
    // Elements Animation