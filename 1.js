 $(function(){
    //tim vi tri
    $('.top1 a.btn.btn-default').click(function () { 
        $('html,body').animate({scrollTop:$('.top2').offset().top});
        $('.menu').removeClass('show');
        $('.nutmenu').removeClass('show');
        return false;
    });
    $('.home').click(function () { 
        $('html,body').animate({scrollTop:$('.top1').offset().top});
        $('.menu').removeClass('show');
        $('.nutmenu').removeClass('show');
        return false;
    });
    $('.about').click(function () { 
        $('html,body').animate({scrollTop:$('.top2').offset().top});
        $('.menu').removeClass('show');
        $('.nutmenu').removeClass('show');
        return false;
    });
    $('.service').click(function () { 
        $('html,body').animate({scrollTop:$('.top3').offset().top});
        $('.menu').removeClass('show');
        $('.nutmenu').removeClass('show');
        return false;
    });
    $('.contact').click(function () { 
        $('html,body').animate({scrollTop:$('.top7').offset().top});
        $('.menu').removeClass('show');
        $('.nutmenu').removeClass('show');
        return false;
    });
    //resize trang web
    var docao = $(window).height();
    $('.top1').css({'height':docao})
    $(window).resize(function () { 
        var docao = $(window).height();
        $('.top1').css({'height':docao})
    });
    // hieu ung khi click menu
    $('.nutmenu').click(function () { 
        $('.menu').addClass('show');
        $('.nutmenu').addClass('show');
        return false;
    });
    $('.tat').click(function () { 
        $('.menu').removeClass('show');
        $('.nutmenu').removeClass('show');
        return false;
    });
})