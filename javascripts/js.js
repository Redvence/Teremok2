//кнопочки!! переключение экранов
$(document).ready(function(){
  $(".basenokia").click(function(){
    $(".sectionmain").css("display","none");
    $(".nokiasection").css("display","block");
  });
});
$(document).ready(function(){
  $(".basetv").click(function(){
    $(".sectionmain").css("display","none");
    $(".tvsection").css("display","block");
  });
});
$(document).ready(function(){
  $(".back").click(function(){
    $(".nokiasection, .tvsection").css("display","none");
    $(".sectionmain").css("display","block");
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
  $(function() {
      $( ".tape" ).draggable();
      });
      let inside = false;

      $(function() {
          $(".tape").draggable();
          $(".tapeinall").droppable({
              drop: function() {
                  $(".tape").css("display", "none");
              }
          });
      });
