$('#cancel_game').click(function() {
  $('#game_space').html('');
});

$('#start_slither').click(function() {
  $.ajax({
    url: "GameFiles/slither.html",
    success: function(result) {
      $("#game_space").html(result);
    }
  });
});

$('#start_raft').click(function() {
  $.ajax({
    url: "GameFiles/raft.html",
    success: function(result) {
      $("#game_space").html(result);
    }
  });
});

$('#start_hardest').click(function() {
  $.ajax({
    url: "GameFiles/hardest.html",
    success: function(result) {
      $("#game_space").html(result);
    }
  });
});

$('#start_bloons').click(function() {
  $.ajax({
    url: "GameFiles/bloons.html",
    success: function(result) {
      $("#game_space").html(result);
    }
  });
});
