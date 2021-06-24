$(document).ready(() =>{
    if ($(window).scrollTop>300){
        $(".scroll-top").css({
            display: "none"
        })
    }

    $('a').click((e) =>{
        /*e.preventDefault()*/
        if(e.target.id==="link1"){
            $("html, body").animate({
                scrollTop: $(".div1").offset().top - 70

            },900)
        }
        else if (e.target.id==="link2"){
            $("html, body").animate({
                scrollTop:$(".div22").offset().top - 80
            },900)
        }
        else if(e.target.id==="link3"){
            $("html, body").animate({
                scrollTop:$(".div3").offset().top - 50
            },900)
        }

    })

    $('.scroll-top').click(() => {
        $("html, body").animate({
            scrollTop:50
        },900)
    })
    $(window).scroll(function (){
        if ($(window).scrollTop()>300){
            $(".scroll-top").css({
                display: "block"
            })
        } else {
            $(".scroll-top").css({
                display: "none"
            })
        }
    })
})

var main = function() {
    $('.btn').click(function() {
        var post = $('.status-box').val();
        $('<li>').text(post).prependTo('.posts');
        $('.status-box').val('');
        $('.counter').text('250');
        $('.btn').addClass('disabled');
    });
    $('.status-box').keyup(function() {
        var postLength = $(this).val().length;
        var charactersLeft = 250 - postLength;
        $('.counter').text(charactersLeft);
        if (charactersLeft < 0) {
            $('.btn').addClass('disabled');
        } else if (charactersLeft === 250) {
            $('.btn').addClass('disabled');
        } else {
            $('.btn').removeClass('disabled');
        }
    });
}
$('.btn').addClass('disabled');
$(document).ready(main)