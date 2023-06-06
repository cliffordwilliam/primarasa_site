// Update the navigation color based on the current page
var navLinks = document.getElementsByTagName("a");
var currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

if (currentPage !== "index.html") {
    var currentPage = "./" + currentPage
}

for (var i = 0; i < navLinks.length; i++) {
    var link = navLinks[i];
    var href = link.getAttribute("href");

    console.log(href);
    console.log(currentPage);


    if (href === currentPage) {
    link.style.color = "red"; // Change the color of the active link
    }
}
    