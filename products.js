// selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0;
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

// Product Functionality

var productCotainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productCotainer.querySelectorAll("div")



search.addEventListener("keyup", function () {
    var enterdvalue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count = count + 1) {

        var productname = productList[count].querySelectorAll("h1").textContent
        if (productname[count].textContent.toUpperCase().indexOf(enterdvalue) < 0) {
            productList[count].style.display = "none"
        } else {
            productList[count].style.display = "block"
        }

    }
})