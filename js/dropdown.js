var dropdownToggles = document.getElementsByClassName("dropdown-toggle");

var dropdownTogglesArray = [];
for (var i = 0; i < dropdownToggles.length; i++) {
    dropdownTogglesArray.push(dropdownToggles[i]);
}

for (var i = 0; i < dropdownTogglesArray.length; i++) {
  var dropdownToggle = dropdownTogglesArray[i];
  dropdownToggle    .addEventListener("click", function(){
    var dropdownMenuId = this.getAttribute("data-dropdown");
    var dropdownMenu = document.getElementById(dropdownMenuId);
    dropdownMenu.classList.toggle("active")
  })
}
