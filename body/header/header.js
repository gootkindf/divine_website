//initalized the entire footer usuing javascript so it can be loaded into multiple pages
function initHeader() {
    var output = `
        <div class="navLeft">
            <a id="unisex" class="buttons active" href="home.html">Unisex</a>
            <a id="men" class="buttons" href="home.html#mens">Mens</a>
            <a id="woman" class="buttons" href="home.html#womans">Womans</a>
        </div>
        <a class="logo" href="home.html"> divine </a>
        <div class="navRight"> 
            <a id="gallery" class="buttons" href="gallery.html">Gallery</a>
            <a class="buttons" target="_blank" href="https://www.instagram.com/divinetimingcollective/">Instagram</a>
            <a id="search" class="buttons" href="search.html">Search</a>
            <a id="bag" class="buttons" href="checkout.html">Bag</a>
        </div>
    `;
    document.getElementById("head").innerHTML = output;
        
}
//adds a scroll effect to the window so that the header changes color as you scroll down.
// this is achieved through adding a class that changes the css.
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const buttons = document.querySelectorAll(".buttons");

    if (window.scrollY > 100) {
        header.classList.add("scrolled");
        buttons.forEach(x => {
            x.classList.add("scrolled");
        });
    } else {
        header.classList.remove("scrolled");
        buttons.forEach(x => {
            x.classList.remove("scrolled");
        });
    }
});

initHeader();

const buttons = document.querySelectorAll(".buttons");

//This is for the filtering of clothes on the home page based on header buttons
buttons.forEach(button => {
        button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        if(button.textContent == "Mens"){
            displayClothes("men");
        } else if(button.textContent == "Womans"){
            displayClothes("woman");
        } else {
            displayClothes("Unisex");
        }
    });
});

