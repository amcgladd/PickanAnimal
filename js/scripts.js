$(document).ready(function() {
  $("#animalChoice").submit(function(event) {
    var userChoice = $("input#visitorChoice").val();
    console.log(userChoice);
    if (userChoice === "turtle") {
      $(".infoSheet").hide();
      $("#turtle").show();

    } else if (userChoice === "snake") {
      $(".infoSheet").hide();
      $("#snake").show();
    } else if (userChoice === "insect") {
      $(".infoSheet").hide();
      $("#insect").show();
    } else {
      alert("please try again!");
    }
    event.preventDefault();
  });
});
