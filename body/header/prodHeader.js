function initHeader() {
  var output = `
        <div class="navLeft">
            <a class="buttons" href="home.html">Home</a>
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

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const buttons = document.querySelectorAll(".buttons");

  if (window.scrollY > 100) {
    header.classList.add("scrolled");
    buttons.forEach((x) => {
      x.classList.add("scrolled");
    });
  } else {
    header.classList.remove("scrolled");
    buttons.forEach((x) => {
      x.classList.remove("scrolled");
    });
  }
});

initHeader();

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update selected button styling
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    // Filter and display the data
    // displayProducts(button.dataset.category);
  });
});
