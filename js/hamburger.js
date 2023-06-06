var hamburgerIcons = document.getElementsByClassName("hamburger-icon");
var offCanvasBackdrop = document.getElementsByClassName("off-canvas-backdrop")

var hamburgerIconsArray = [];
for (var i = 0; i < hamburgerIcons.length; i++) {
  hamburgerIconsArray.push(hamburgerIcons[i]);
}

for (var i = 0; i < hamburgerIconsArray.length; i++) {
  var hamburgerIcon = hamburgerIconsArray[i];
  hamburgerIcon.addEventListener("click", function(){
    var hamburgerMenuId = this.getAttribute("data-dropdown");
    var hamburgerMenu = document.getElementById(hamburgerMenuId);
    hamburgerMenu.classList.toggle("show");
    document.body.classList.toggle('sidebar-active');
  })
}

window.addEventListener("resize", function(){
  if (window.innerWidth > 992) {
    for (var i = 0; i < hamburgerIconsArray.length; i++) {
      var hamburgerIcon = hamburgerIconsArray[i];
      var hamburgerMenuId = hamburgerIcon.getAttribute("data-dropdown");
      var hamburgerMenu = document.getElementById(hamburgerMenuId);
      if (hamburgerMenu.classList.contains("show") && document.body.classList.toggle('sidebar-active')) {
        hamburgerMenu.classList.remove("show");
        document.body.classList.remove('sidebar-active'); 
      }
    }
  }
})

var offCanvasBackdropArray = [];
for (var i = 0; i < offCanvasBackdrop.length; i++) {
  offCanvasBackdropArray.push(offCanvasBackdrop[i]);
}

for (var i = 0; i < offCanvasBackdropArray.length; i++) {
  var offCanvasBackdrop = offCanvasBackdropArray[i];
  offCanvasBackdrop.addEventListener("click", function(){
    for (var i = 0; i < hamburgerIconsArray.length; i++) {
      var hamburgerIcon = hamburgerIconsArray[i];
      var hamburgerMenuId = hamburgerIcon.getAttribute("data-dropdown");
      var hamburgerMenu = document.getElementById(hamburgerMenuId);
      if (hamburgerMenu.classList.contains("show") && document.body.classList.toggle('sidebar-active')) {
        hamburgerMenu.classList.remove("show");
        document.body.classList.remove('sidebar-active'); 
      }
    }
  })
}