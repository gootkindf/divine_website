function initFooter() {
    var output = `
        <a class="logo footer" href="home.html"> 
            <h3>divine timing</h3> 
            <h3 class="collective">collective</h3>
        </a>
        <div class="parentFoot">
            <div class="footerContent"> 
                <a id="home" class="buttons" href="home.html">Home</a>
                <a id="about" class="buttons" href="#">About</a>
                <a id="instagram" class="buttons" href="https://www.instagram.com/divinetimingcollective/">Instagram</a>
                <a id="search" class="buttons" href="search.html">Search</a>
                <a id="gallery" class="buttons" href="gallery.html">Gallery</a>
                <a id="bag" class="buttons" href="checkout.html">Bag</a>
            </div>
            <a id="contact" class="buttons" href="contact.html">Contact Us</a>
        </div>
    `;
    document.getElementById("footer").innerHTML = output;
}

initFooter();
