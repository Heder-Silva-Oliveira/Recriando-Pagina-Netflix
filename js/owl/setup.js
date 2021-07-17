$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
function  clicou () {
    window.open("https://www.youtube.com/watch?v=Y_THXMXAczQ&ab_channel=GameofThrones")
}

function info(){
    alert("Game of Thrones está de volta para sua oitava e última temporada. Com o Rei da Noite finalmente cruzando a Muralha junto a um dragão de gelo, novas alianças e traições determinam o destino de todos em Westeros.")
}