window.onscroll = function () {
  myFunction();
};
var r = document.querySelector(":root");
var header = document.getElementById("myHeader");
var hiddenheader = document.getElementById("hiddenheader");

function myFunction() {
  if (window.pageYOffset > 10) {
    // alert(window.pageYOffset);
    // header.style.position = "fixed";
    header.style.backgroundColor = "white";
    r.style.setProperty("--link-color", "rgba(0, 0, 0, 0.7)");
    // // header.style.zIndex = -1;
    // hiddenheader.style.display = "flex";
  } else {
    header.style.backgroundColor = "transparent";
    r.style.setProperty("--link-color", "rgba(255, 255, 255, 0.7)");

    // alert(window.pageYOffset);
    // header.style.display = "flex";
    // hiddenheader.style.display = "none";
  }
}
