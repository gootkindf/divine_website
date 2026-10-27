
//initalized the entire footer usuing javascript so it can be loaded into multiple pages
function initFooter() {
    var output = `
        <a class="logo footer" href="home.html"> 
            <h3>divine timing</h3> 
            <h3 class="collective">collective</h3>
        </a>
        <div class="parentFoot">
            <div class="footerContent"> 
                <a id="home" class="buttons foot" href="home.html">Home</a>
                <a id="about" class="buttons foot" href="#">About</a>
                <a id="instagram" class="buttons foot" href="https://www.instagram.com/divinetimingcollective/">Instagram</a>
                <a id="search" class="buttons foot" href="search.html">Search</a>
                <a id="gallery" class="buttons foot" href="gallery.html">Gallery</a>
                <a id="bag" class="buttons foot" href="checkout.html">Bag</a>
            </div>
            <a id="contact" class="buttons foot" href="contact.html">Contact Us</a>
        </div>
    `;
    document.getElementById("footer").innerHTML = output;
}

initFooter();
