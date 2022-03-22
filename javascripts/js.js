//кнопочки!! переключение экранов
$(function(){
  $(".basenokia").click(function(){
    $(".sectionmain").css("display","none");
    $(".nokiasection").css("display","block");
  });
});
$(function(){
  $(".basetv").click(function(){
    $(".sectionmain").css("display","none");
    $(".tvsection").css("display","block");
  });
});
$(function(){
  $(".back").click(function(){
    $(".nokiasection, .tvsection, .musicsection, .polaroidsection, .compsection").css("display","none");
    $(".sectionmain").css("display","block");
  });
});
$(function(){
  $(".baseplayer").click(function(){
    $(".sectionmain").css("display","none");
    $(".musicsection").css("display","block");
  });
});
$(function(){
  $(".basepolaroid").click(function(){
    $(".sectionmain").css("display","none");
    $(".polaroidsection").css("display","block");
  });
});
$(function(){
  $(".basepc").click(function(){
    $(".sectionmain").css("display","none");
    $(".compsection").css("display","block");
  });
});
// нокиа!!
let current = 1;
      let msgCount = 4;
        $(document).ready(function(){
          $(".b4").click(function(){
            if (current == 1){
            $(".msg1, .msg3, .msg4").css("display","none");
            $(".msg2").css("display","block");
            current++;
            }
            else if (current == 2){
            $(".msg1, .msg2, .msg4").css("display","none");
            $(".msg3").css("display", "block");
            current++;
            }
            else if(current ==3){
            $(".msg1, .msg2, .msg3").css("display","none");
            $(".msg4").css("display", "block");
            current++;
            }
            else if (current == msgCount || current <= 0 || current > msgCount){
            $(".msg1").css("display","block");
            $(".msg2, .msg3, .msg4").css("display","none");
            current = 1;
            }
          });
        });
        $(document).ready(function(){
          $(".b5").click(function(){
            if (current == 1 || current <= 0 || current > msgCount){
            $(".msg4").css("display","block");
            $(".msg1, .msg2, .msg3").css("display","none");
            current = 4;
            }
            else if (current == 4){
            $(".msg1, .msg2, .msg4").css("display","none");
            $(".msg3").css("display","block");
            current--;
            }
            else if (current == 2){
            $(".msg2, .msg3, .msg4").css("display","none");
            $(".msg1").css("display", "block");
            current--;
            }
            else if (current == 3){
            $(".msg1, .msg3, .msg4").css("display", "none");
            $(".msg2").css("display", "block");
            current--;
            }
          });
        });
//ТВ
      let insideTape = false;
      let tapeNumber = 0;
      $(function() {
          $(".tape").draggable();
          $(".tapeinall").droppable({
                  drop: function(event, ui) {
                  let droppedTape = $(ui.draggable);
                  $(droppedTape).css("display", "none");
                  insideTape = true;
                }
          });
      });
      $(function(){
        $(".tapebutton1").click(function(){
          if (insideTape == true){
          $(".tape").css("display", "block");
          insideTape = false;
        }
        });
      });
//Винил
let insideDisc = false
$(function(){
  $(".sht1").click(function(){
  if (insideDisc == true){
    $(".sht2").addClass("active");
    }
  });
});
var droppedDisc
$(function() {
  $(".disc").draggable();
    $(".karinasuper").droppable({
      drop: function(event, ui) {
      droppedDisc = $(ui.draggable);
      $(droppedDisc).css("top", "10.3vh");
      $(droppedDisc).css("left", "64vw");
      console.log(droppedDisc);
      insideDisc = true;
      }
  });
});
var audio = new Audio();
function soundClick() {
  if($(".sht2").hasClass("active")){
      if ($(droppedDisc).hasClass("disc1")) {
        audio.src = 'img/kaif.mp3';
        audio.autoplay = true;
        $(".disc1").addClass("discAnimation");
        $(droppedDisc).draggable({
          disabled: true
        });
      }
      else if ($(droppedDisc).hasClass("disc2")){
        audio.src = 'img/morgen.mp3';
        audio.autoplay = true;
        $(".disc2").addClass("discAnimation");
        $(droppedDisc).draggable({
          disabled: true
        });
      }
    }
    else{
      audio.autoplay = false;
    }
};
$(function(){
  $(".pb1").click(function(){
    audio.pause();
    audio.currentTime = 0;
    $(".disc").removeClass("discAnimation");
    $(droppedDisc).draggable({
      disabled: false
    });
    $(".sht2").removeClass("active");
  });
});
//полароид
let onoff3 = false;
$(function(){
  $(".polb1").click(function(){
    if (onoff3 == false){
      $("#countertext").css("display","block");
      onoff3 = true;
    }
    else {
      $("#countertext").css("display","none");
      $(".vspishka").removeClass("vspishka2");
      vspishka = false;
      onoff3 = false;
    }
  });
});
var count = 0;
let ready = false;
let vspishka = false;
  function ChangeOnClick(){
  if (onoff3 == true && ready == false){
  if (count == 0) {
    document.getElementById("countertext").innerHTML = "5";
    count++;
    $(".picture").css("top","0vh");
    $(".picture").css("transition","all 2s ease");
    ready = true;
      if(vspishka == true){
        $(".realvspishka").css("display","block");
          setTimeout(function(){
            $(".realvspishka").css("display","none");
          }, 200);
      }
  } else if (count == 1) {
    document.getElementById("countertext").innerHTML = "4";
    count++;
    $(".picture").css("top","0vh");
    $(".picture").css("transition","all 2s ease");
    $(".insidepicture").addClass("picture2");
    if(vspishka == true){
      $(".realvspishka").css("display","block");
        setTimeout(function(){
          $(".realvspishka").css("display","none");
        }, 200);
    }
    ready = true;
  } else if (count == 2) {
    document.getElementById("countertext").innerHTML = "3";
    count++;
  } else if (count == 3) {
    document.getElementById("countertext").innerHTML = "2";
    count++;
  } else if (count == 4) {
    document.getElementById("countertext").innerHTML = "1";
    count++;
  }
    else if (count => 5) {
    document.getElementById("countertext").innerHTML = "0";
  }
}
}
$(function(){
  $(".krestik").click(function(){
    $(".picture").css("top","-57vh");
    $(".picture").css("transition","none");
    ready = false;
  });
});
$(function(){
  $(".vspishka").click(function(){
    if (vspishka == false && onoff3 == true){
      $(this).addClass("vspishka2");
      vspishka = true;
    }
    else if (onoff3 == true){
      $(this).removeClass("vspishka2");
      vspishka = false;
    }
  });
});
