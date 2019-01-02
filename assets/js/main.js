var $svg = $(".svg").drawsvg({
  duration: 5000,
  stagger: 1000
});
$svg.drawsvg("animate");
setTimeout(function() {
  $("#Layer_1")
    .removeClass("svg")
    .addClass("svg1");
}, 3000);
setTimeout(function() {
  $("body").removeClass("loading");
  $(".wrapper")
    .removeClass("beforewrapper")
    .addClass("afterwrapper");
}, 2300);
function openNav() {
  $("body").addClass("loading");
  $("#header")
    .removeClass("stickyheader")
    .addClass("hiddenheader");
  $("header").css({ height: "0" });
  $("#sidemenu")
    .removeClass("hiddenheader")
    .addClass("stickyheader");
  $("#mySidenavEffect")
    .addClass("sidenaveffect")
    .removeClass("beforesidenaveffect");
  $("#mySidenavEffect1")
    .addClass("sidenaveffect1")
    .removeClass("beforesidenaveffect1");
  $(".sidenaveffect1right").addClass("slideInLeft");
  $("#mySidenavEffect2")
    .addClass("sidenaveffect2")
    .removeClass("beforesidenaveffect2");
  $("#mySidenav")
    .addClass("sidenav")
    .removeClass("beforesidenav");
}
function closeNav() {
  $("body").removeClass("loading");
  $("#header")
    .addClass("stickyheader")
    .removeClass("hiddenheader");
  $("header").css({ height: "100" });
  $("#sidemenu")
    .addClass("hiddenheader")
    .removeClass("stickyheader");
  $("#mySidenavEffect")
    .addClass("beforesidenaveffect")
    .removeClass("sidenaveffect");
  $("#mySidenavEffect1")
    .addClass("beforesidenaveffect1")
    .removeClass("sidenaveffect1");
  $(".sidenaveffect1right").removeClass("slideInLeft");
  $("#mySidenavEffect2")
    .addClass("beforesidenaveffect2")
    .removeClass("sidenaveffect2");
  $("#mySidenav")
    .removeClass("sidenav")
    .addClass("beforesidenav");
}
$(".fullBackground").fullClip({
  images: [
    "http://pitchcardiff.com/wp-content/uploads/2018/10/5D3_2546.jpg",
    "http://pitchcardiff.com/wp-content/uploads/2018/10/Asset-16.jpg",
    "http://pitchcardiff.com/wp-content/uploads/2018/03/Asset-7@330x-100-e1538505839244-uai-1600x800.jpg"
  ],
  transitionTime: 2000,
  wait: 10000
});
