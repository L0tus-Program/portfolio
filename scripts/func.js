var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});


/*

$(function(){ 
    $("button").click(function(){
        $("h1").css("color", "red").removeClass("red")
     //   $("#mensagem").text("APERTEI ESSA PORRA").css("color","blue").fadeOut(5000)
     $("#mensagem")
        .text("APERTEI ESSA PORRA")
        //.css("color","blue")
        .css({
            color:"blue",
            border:"1px solid red"  // variaveis com traço como background-color ficam como backgroundColor kernel case
        })
        .fadeOut(5000)
        .addClass("green") // adiciona uma classe ao elemento, nao pode entrar em conflito com um css inserido no jquery   -> jquery aplica CSS INLINE, que tem prioridade
        
    })
    $("h3").delay(1000)
    $("h3").fadeIn("fast") 
   
})

*/

