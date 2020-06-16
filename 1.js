 $(function(){
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