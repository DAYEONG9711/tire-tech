$('.navbar-gnb, .navSub_shadow').on('mouseenter mouseleave',function(ev){
    if($(window).width() > 1169){ //데스크탑(pc) 상태
        if(ev.type == 'mouseenter'){ //데스크탑 상태에서 마우스를 올려놨을 때
            $('.navSub_shadow').stop().slideDown();
            $('.sub').stop().fadeIn();
        } else{
            $('.navSub_shadow').stop().slideUp(250,function(){
                $(this).removeAttr('style'); 
                //slideUp 실행 뒤(콜백함수) 남아있는 style을 없애줌
            });
            $('.sub').stop().fadeOut(250,function(){
                $(this).removeAttr('style');
            });
        }
    }
});

var $mainBtn = $('.navbar-gnb > li > a'); //메인 메뉴

$mainBtn.click(function(){ //모바일 상태에서 서브메뉴 슬라이드
    if($(window).width() < 1170){ //모바일 상태

        if(!$(this).parents('li').is('.act')){ //li에 act 클래스가 없을 때(닫혀있는 상태)
            $('.navbar-gnb > li').removeClass('act');
            $(this).parents('li').addClass('act');
            $('.icon').removeClass('on');
            $(this).siblings('.icon').addClass('on')
        } else { //li에 act 클래스가 있을 때(열려있는 상태)
            $('.navbar-gnb > li').removeClass('act');
            $('.icon').removeClass('on');
        }
    };
});

//모바일 상태에서 햄버거 버튼을 누르면 사이드바 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');
    if($(this).hasClass('open')){
        $('.side-gnb').animate({right:0},500);
        $('.navbar-wrap').animate({left:-250},500);
    } else {
        $('.side-gnb').animate({right:-250},500);
        $('.navbar-wrap').animate({left:0},500);
    }
});

