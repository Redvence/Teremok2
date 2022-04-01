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
let krya = 0;
let onoff4 = false;
$(function(){
  $(".b1").click(function(){
    if(krya == 0){
      $(".msg0, .msg1, .msg2, .msg3, .msg4, .msg5, .msg6").css("display","none");
      $(".msg7").css("display","block");
      krya++
    }
    else if (krya == 1){
      $(".msg7, .msg0, .msg2, .msg3, .msg4, .msg5, .msg6").css("display","none");
      $(".msg1").css("display","block");
      onoff4 = true;
      krya++
    }
    else if (krya == 2){
    }
  });
});
$(function(){
  $(".b2").click(function(){
    $(".msg7, .msg1, .msg2, .msg3, .msg4, .msg5, .msg6").css("display","none");
    $(".msg0").css("display","block");
    krya = 0;
    onoff4 = false;
  });
});
let current = 0;
        $(document).ready(function(){
          $(".b4").click(function(){
          if (onoff4 == true){
            if (current == 0){
            $(".msg1, .msg3, .msg4, .msg5, .msg6").css("display","none");
            $(".msg2").css("display","block");
            current++;
            }
            else if (current == 1){
            $(".msg1, .msg2, .msg4, .msg5, .msg6").css("display","none");
            $(".msg3").css("display", "block");
            current++;
            }
            else if(current == 2){
            $(".msg1, .msg2, .msg3, .msg5, .msg6").css("display","none");
            $(".msg4").css("display", "block");
            current++;
            }
            else if(current == 3){
            $(".msg1, .msg2, .msg3, .msg4, .msg6").css("display","none");
            $(".msg5").css("display", "block");
            current++;
            }
            else if(current == 4){
            $(".msg1, .msg2, .msg3 .msg4, .msg5").css("display","none");
            $(".msg6").css("display", "block");
            current++;
            }
            else if (current => 5){
            $(".msg1").css("display","block");
            $(".msg2, .msg3, .msg4, .msg5, .msg6").css("display","none");
            current = 0;
            }
            console.log(current);
          }
          });
        });
        $(document).ready(function(){
          $(".b5").click(function(){
          if (onoff4 == true){
            if (current <= 0){
            $(".msg6").css("display","block");
            $(".msg2, .msg4, .msg3, .msg5, .msg1").css("display","none");
            current = 5;
            }
            else if (current == 4){
            $(".msg1, .msg2, .msg3, .msg5, .msg6").css("display","none");
            $(".msg4").css("display","block");
            current--;
            }
            else if (current == 3){
            $(".msg1, .msg2, .msg5, .msg4, .msg6").css("display", "none");
            $(".msg3").css("display", "block");
            current--;
            }
            else if (current == 2){
            $(".msg1, .msg3, .msg4, .msg5, .msg6").css("display","none");
            $(".msg2").css("display", "block");
            current--;
            }
            else if (current == 1){
            $(".msg2, .msg3, .msg4, .msg5, .msg6").css("display", "none");
            $(".msg1").css("display", "block");
            current--;
            }
            else if (current == 5){
            $(".msg3, .msg2, .msg4, .msg1, .msg6").css("display","none");
            $(".msg5").css("display", "block");
            current--;
            }
            console.log(current);
          }
          });
        });
        function lel(){
          console.log(current);
        }
//ТВ
      let insideTape = false;
      let tapeNumber = 0;
      let droppedTape;
      let currentVideo;
      $(function() {
          $(".tape").draggable();
          $(".tapeinall").droppable({
                  drop: function(event, ui) {
                  droppedTape = $(ui.draggable);
                  $(droppedTape).css("display", "none");
                  insideTape = true;
                  console.log(droppedTape);
                }
          });
      });
      $(function(){
        $(".tapebutton1").click(function(){
          if (insideTape == true){
          $(".tape").css("display", "block");
          insideTape = false;
          $(".video").css("display", "none");
          // var videos = document.getElementsByClassName("video");
          // videos.pause();
          // videos.currentTime = 0;
        }
        });
      });
      function VideoPlay() {
        if (insideTape == true){
          if ($(droppedTape).hasClass("tape1")){
            var videoo = document.getElementById("video1");
            videoo.play();
            $(videoo).css("display", "block");
            currentVideo = 1;
          }
          else if ($(droppedTape).hasClass("tape2")){
            videoo = document.getElementById("video2");
            videoo.play();
            $(videoo).css("display", "block");
            currentVideo = 2;
          }
          else if ($(droppedTape).hasClass("tape3")){
            videoo = document.getElementById("video3");
            videoo.play();
            $(videoo).css("display", "block");
            currentVideo = 3;
          }
          else if ($(droppedTape).hasClass("tape4")){
            videoo = document.getElementById("video4");
            videoo.play();
            $(videoo).css("display", "block");
            currentVideo = 4;
          }
        }
      }
      function VideoStop() {
        if (currentVideo == 1){
          var videoo = document.getElementById("video1");
          videoo.pause();
          videoo.currentTime = 0;
        }
        else if (currentVideo == 2){
          videoo = document.getElementById("video2");
          videoo.pause();
          videoo.currentTime = 0;
        }
        else if (currentVideo == 3){
          videoo = document.getElementById("video3");
          videoo.pause();
          videoo.currentTime = 0;
        }
        else if (currentVideo == 4){
          videoo = document.getElementById("video4");
          videoo.pause();
          videoo.currentTime = 0;
        }
          }
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
      $(droppedDisc).css("top", "10.7vh");
      $(droppedDisc).css("left", "61.8vw");
      console.log(droppedDisc);
      insideDisc = true;
      }
  });
});
var audio = new Audio();
function soundClick() {
  if($(".sht2").hasClass("active")){
      if ($(droppedDisc).hasClass("disc1")) {
        audio.src = 'img/music1.mp3';
        audio.autoplay = true;
        $(".disc1").addClass("discAnimation");
        $(droppedDisc).draggable({
          disabled: true
        });
      }
      else if ($(droppedDisc).hasClass("disc2")){
        audio.src = 'img/music2.mp3';
        audio.autoplay = true;
        $(".disc2").addClass("discAnimation");
        $(droppedDisc).draggable({
          disabled: true
        });
      }
      else if ($(droppedDisc).hasClass("disc3")){
        audio.src = 'img/music3.mp3';
        audio.autoplay = true;
        $(".disc3").addClass("discAnimation");
        $(droppedDisc).draggable({
          disabled: true
        });
      }
      else if ($(droppedDisc).hasClass("disc4")){
        audio.src = 'img/music4.mp3';
        audio.autoplay = true;
        $(".disc4").addClass("discAnimation");
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
var ready = false;
var vspishka = false;
  function ChangeOnClick(){
  if (onoff3 == true && ready == false){
  if (count == 0) {
    document.getElementById("countertext").innerHTML = "6";
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
    document.getElementById("countertext").innerHTML = "5";
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
    document.getElementById("countertext").innerHTML = "4";
    count++;
    $(".picture").css("top","0vh");
    $(".picture").css("transition","all 2s ease");
    $(".insidepicture").addClass("picture3");
    if(vspishka == true){
      $(".realvspishka").css("display","block");
        setTimeout(function(){
          $(".realvspishka").css("display","none");
        }, 200);
      }
      ready = true;
  } else if (count == 3) {
    document.getElementById("countertext").innerHTML = "3";
    count++;
    $(".picture").css("top","0vh");
    $(".picture").css("transition","all 2s ease");
    $(".insidepicture").addClass("picture4");
    if(vspishka == true){
      $(".realvspishka").css("display","block");
        setTimeout(function(){
          $(".realvspishka").css("display","none");
        }, 200);
      }
      ready = true;
  } else if (count == 4) {
    document.getElementById("countertext").innerHTML = "2";
    count++;
    $(".picture").css("top","0vh");
    $(".picture").css("transition","all 2s ease");
    $(".insidepicture").addClass("picture5");
    if(vspishka == true){
      $(".realvspishka").css("display","block");
        setTimeout(function(){
          $(".realvspishka").css("display","none");
        }, 200);
      }
      ready = true;
  }
    else if (count == 5) {
    document.getElementById("countertext").innerHTML = "1";
    count++;
    $(".picture").css("top","0vh");
    $(".picture").css("transition","all 2s ease");
    $(".insidepicture").addClass("picture6");
    if(vspishka == true){
      $(".realvspishka").css("display","block");
        setTimeout(function(){
          $(".realvspishka").css("display","none");
        }, 200);
      }
      ready = true;
  }
    else if (count => 6) {
      document.getElementById("countertext").innerHTML = "0";
      $(".picture").css("top","0vh");
      $(".picture").css("transition","all 2s ease");
      $(".insidepicture").addClass("picture7");
      if(vspishka == true){
        $(".realvspishka").css("display","block");
          setTimeout(function(){
            $(".realvspishka").css("display","none");
          }, 200);
        }
      ready = true;
}
}
console.log(count);
}
// function ChangeOnClick(){
//   console.log(count);
// }
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
//комп
$(function(){
  $(".f1").click(function(){
    $(".ok1").css("display","block");
  });
});
$(function(){
  $(".kr1").click(function(){
    $(".ok1").css("display","none");
    $(".pic").css("display","none");
  });
});
$(function(){
  $(".f2").click(function(){
    $(".ok2").css("display","block");
  });
});
$(function(){
  $(".kr2").click(function(){
    $(".ok2").css("display","none");
    $(".pic").css("display","none");
  });
});
$(function(){
  $(".p1").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic2");
    $(".pic").removeClass("pic3");
    $(".pic").removeClass("pic4");
    $(".pic").removeClass("pic5");
    $(".pic").removeClass("pic6");
    $(".pic").removeClass("pic7");
    $(".pic").removeClass("pic8");
    $(".pic").removeClass("pic9");
    $(".pic").addClass("pic1");
  });
});
$(function(){
  $(".p2").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic1");
    $(".pic").removeClass("pic3");
    $(".pic").removeClass("pic4");
    $(".pic").removeClass("pic5");
    $(".pic").removeClass("pic6");
    $(".pic").removeClass("pic7");
    $(".pic").removeClass("pic8");
    $(".pic").removeClass("pic9");
    $(".pic").addClass("pic2");
  });
});
$(function(){
  $(".p3").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic1");
    $(".pic").removeClass("pic2");
    $(".pic").removeClass("pic4");
    $(".pic").removeClass("pic5");
    $(".pic").removeClass("pic6");
    $(".pic").removeClass("pic7");
    $(".pic").removeClass("pic8");
    $(".pic").removeClass("pic9");
    $(".pic").addClass("pic3");
  });
});
$(function(){
  $(".p4").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic1");
    $(".pic").removeClass("pic2");
    $(".pic").removeClass("pic3");
    $(".pic").removeClass("pic5");
    $(".pic").removeClass("pic6");
    $(".pic").removeClass("pic7");
    $(".pic").removeClass("pic8");
    $(".pic").removeClass("pic9");
    $(".pic").addClass("pic4");
  });
});
$(function(){
  $(".p5").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic1");
    $(".pic").removeClass("pic2");
    $(".pic").removeClass("pic3");
    $(".pic").removeClass("pic4");
    $(".pic").removeClass("pic6");
    $(".pic").removeClass("pic7");
    $(".pic").removeClass("pic8");
    $(".pic").removeClass("pic9");
    $(".pic").addClass("pic5");
  });
});
$(function(){
  $(".p6").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic1");
    $(".pic").removeClass("pic2");
    $(".pic").removeClass("pic3");
    $(".pic").removeClass("pic4");
    $(".pic").removeClass("pic5");
    $(".pic").removeClass("pic7");
    $(".pic").removeClass("pic8");
    $(".pic").removeClass("pic9");
    $(".pic").addClass("pic6");
  });
});
$(function(){
  $(".p7").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic1");
    $(".pic").removeClass("pic2");
    $(".pic").removeClass("pic3");
    $(".pic").removeClass("pic4");
    $(".pic").removeClass("pic5");
    $(".pic").removeClass("pic6");
    $(".pic").removeClass("pic8");
    $(".pic").removeClass("pic9");
    $(".pic").addClass("pic7");
  });
});
$(function(){
  $(".p8").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic1");
    $(".pic").removeClass("pic2");
    $(".pic").removeClass("pic3");
    $(".pic").removeClass("pic4");
    $(".pic").removeClass("pic5");
    $(".pic").removeClass("pic7");
    $(".pic").removeClass("pic6");
    $(".pic").removeClass("pic9");
    $(".pic").addClass("pic8");
  });
});
$(function(){
  $(".p9").click(function(){
    $(".pic").css("display","block");
    $(".pic").removeClass("pic1");
    $(".pic").removeClass("pic2");
    $(".pic").removeClass("pic3");
    $(".pic").removeClass("pic4");
    $(".pic").removeClass("pic5");
    $(".pic").removeClass("pic7");
    $(".pic").removeClass("pic8");
    $(".pic").removeClass("pic6");
    $(".pic").addClass("pic9");
  });
});
$(function(){
  $(".kr3").click(function(){
    $(".pic").css("display","none");
  });
});
