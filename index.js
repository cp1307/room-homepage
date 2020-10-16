var current = ["first", "second", "third"];
var nextId;
var activeId;

$(".left-arrow").click(function() {
  activeId = $(".active-text").attr("id");
  console.log(activeId);
  if (activeId === "f1")
    nextId = "t3";
  else if (activeId === "s2")
    nextId = "f1";
  else
    nextId = "s2";

  carousel(activeId, nextId);

})
$(".right-arrow").click(function() {
  activeId = $(".active-text").attr("id");
  console.log(activeId);
  if (activeId === "f1")
    nextId = "s2";
  else if (activeId === "s2")
    nextId = "t3";
  else
    nextId = "f1";

  carousel(activeId, nextId);

})

function carousel(current, next) {
  $("#" + current).removeClass("active-text").addClass("inactive-text");
  $("#" + next).removeClass("inactive-text").addClass("active-text");

  $("#bgc").removeClass("bgc-hero" + current.slice(1, 2)).addClass("bgc-hero" + next.slice(1, 2));

}

  var win = $(window).width();
  console.log(win);
  if(win <= 992)
  {
    $(".row").removeClass("row");
    $(".col-7").removeClass("col-7");
    $(".col-5").removeClass("col-5");
  }
  else {
    $(".row").addClass("row");
    $(".col-7").addClass("col-7");
    $(".col-5").addClass("col-5");
  }
