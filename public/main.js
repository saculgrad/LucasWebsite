/**
function changeSomeHTML(){
  $("#something").html ("THIS IS THE NEW CONTENT");
}
$("#something").click(changeSomeHTML);
*/

$('#start_game').click(function() {
  $.ajax({
    url: "game.html",
    success: function(result) {
      $("#game_content").html(result);
    }
  });
});