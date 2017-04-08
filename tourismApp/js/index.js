var win = document.getElementById('html');
var w = document.documentElement.clientWidth;
win.style.fontSize = w*0.03125 + 'px';
window.onresize = function(){
    var w = document.documentElement.clientWidth;
    win.style.fontSize = w*0.03125 + 'px';
}


$(".btn1").click(function(){
   var cont = $(".btn-content").text();
    cont++;
    if(cont>=20){
        cont=20
    }
    $(".btn-content").html(cont);
})
$(".btn2").click(function(){
    var cont = $(".btn-content").text();
    cont--;
    if(cont<=0){
        cont=0
    }
    $(".btn-content").html(cont);
})

$(".btn3").click(function(){
    var cont = $(".btn-content1").text();
    cont++;
    if(cont>=7){
        cont=7
    }
    $(".btn-content1").html(cont);
})
$(".btn4").click(function(){
    var cont = $(".btn-content1").text();
    cont--;
    if(cont<=0){
        cont=0
    }
    $(".btn-content1").html(cont);
})

$(".btn5").click(function(){
    var cont = $(".btn-content2").html();
    cont++;
    cont+=99;
    if(cont>=500){
        cont=500
    }
    $(".btn-content2").html(cont);
})
$(".btn6").click(function(){
    var cont = $(".btn-content2").text();
    cont--;
    cont-=99;
    if(cont<=0){
        cont=0
    }
    $(".btn-content2").html(cont);
})


var liw=document.getElementsByClassName('mainmenu');
$(liw[0]).css({"background":"#33B5E6"});


for (var i = 0; i < liw.length; i++) {
    liw[i].onclick=function(){
        for(var i = 0; i < liw.length; i++){
            var imgss=liw[i].getElementsByTagName('img');
            if (this==liw[i]) {
                $(liw[i]).css({"background":"#33B5E6"});
                imgss[0].style.display="none";
                imgss[1].style.display="block";
            }else{
                liw[i].style.backgroundColor="";
                imgss[1].style.display="none";
                imgss[0].style.display="block";
            }
        };
    }

};
var it=document.getElementsByClassName("bo2");
for (var i = 0; i < it.length; i++) {
    it[i].onclick=function(){
        for(var i = 0; i < it.length; i++){
            if (this==it[i]) {
                $(it[i]).css({"color":"#33B5E6"});
            }else{
                $(it[i]).css({"color":"black"});
            }
        };
    }

};
window.onload=function(){
    $("#mainn").css({"height":window.screen.height+"px"});
}

var chengshi=document.getElementsByClassName("chengshi");
for (var i = 0; i < chengshi.length; i++) {
    chengshi[i].onclick=function(){
        for(var i = 0; i < chengshi.length; i++){
            if (this==chengshi[i]) {
                var chengshiming = $(chengshi[i]).text();
                $(".title").html(chengshiming);
            }
        };
    }

};


    // for(var i= 0;i<4;i++){
    //     var  _all = document.getElementById('main_body'+i).getElementsByTagName('div');
    //     // for(var i=0;i<_all.length;i++){
    //         _all[i].onclick = function(){
    //             for(var i=0;i<_all.length;i++){
    //                 if(this==_all[i]){
    //                     alert(_all[i].innerHTML);
    //                 }
    //             }
    //         }
    //     // }
    //     console.log(_all);
    // }

$("#main_body0 div").click(function(){$('.text0').val($(this).text());})
$("#main_body1 div").click(function(){$('.text1').val($(this).text());})
$("#main_body2 div").click(function(){$('.text2').val($(this).text());})
$("#main_body3 div").click(function(){$('.text3').val($(this).text());})

// for(var i=0;i<4;i++){
//     console.log($("#main_body"+i+" div"))
//     $("#main_body"+i+" div").click($('.text'+i).val($(this).text()))
//     console.log($('.text'+i))
//     console.log($(this).text());
// }


// for(var z=0;z<4;z++){
//    var $chengshiZ=document.getElementsByClassName("chengshi"+z);
//    console.log($chengshiZ)
//    for (var i = 0; i < $chengshiZ.length; i++) {
//        $chengshiZ[i].onclick=function(){
//            // for(var i = 0; i < $chengshiZ.length; i++){
//                // if (this==$chengshiZ[i]) {
//                    // var chengshiming = $chengshiZ[i].innerTEXT;
//                    alert($chengshiZ[i].innerTEXT)
//                     // $(".text0").val($chengshiZ[i].innerTEXT();
//                     // console.log($(".modal-body .chengshi0").text());
                 
//                // }
//            // };
//        }

//    };
// }




// var chengshi=document.getElementsByClassName("chengshi0");
//     for (var i = 0; i < chengshi.length; i++) {
//         chengshi[i].onclick=function(){
//             for(var i = 0; i < chengshi.length; i++){
//                 if (this==chengshi[i]) {
//                     $(".text0").val($(chengshi[i]).text());
//                 }
//             };
//         }

//     };
// var chengshi1=document.getElementsByClassName("chengshi1");
// for (var i = 0; i < chengshi1.length; i++) {
//     chengshi1[i].onclick=function(){
//         for(var i = 0; i < chengshi1.length; i++){
//             if (this==chengshi1[i]) {
//                 $(".text1").val($(chengshi1[i]).text());
//             }
//         };
//     }

// };
// var chengshi2=document.getElementsByClassName("chengshi2");
// for (var i = 0; i < chengshi2.length; i++) {
//     chengshi2[i].onclick=function(){
//         for(var i = 0; i < chengshi2.length; i++){
//             if (this==chengshi2[i]) {
//                 $(".text2").val($(chengshi2[i]).text());
//             }
//         };
//     }

// };
// var chengshi3=document.getElementsByClassName("chengshi3");
// for (var i = 0; i < chengshi3.length; i++) {
//     chengshi3[i].onclick=function(){
//         for(var i = 0; i < chengshi3.length; i++){
//             if (this==chengshi3[i]) {
//                 $(".text3").val($(chengshi3[i]).text());
//             }
//         };
//     }

// };


