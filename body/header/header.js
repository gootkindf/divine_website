function initHeader() {
    var output = `
        <div class="navLeft">
            <a class="buttons active" href="#">Unisex</a>
            <a class="buttons" href="#">Mens</a>
            <a class="buttons" href="#">Womans</a>
        </div>
        <div class="logo"> divine </div>
        <div class="navRight"> 
            <a class="buttons" href="#">Gallery</a>
            <a class="buttons" href="#">Instagram</a>
            <a class="buttons" href="#">Search</a>
            <a class="buttons" href="#">Bag</a>
        </div>
    `;
    document.getElementById("head").innerHTML = output;
        
}

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

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Update selected button styling
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        displayClothes(button.textContent);
        // Filter and display the data
        // displayProducts(button.dataset.category);
    });
});