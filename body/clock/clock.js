

//places clock on the home page
function initClock() {
    document.write(
        `<div class="clock">
            <div class="hand hour" id="hourhand"></div>
            <div class="hand minute" id="minutehand"></div>
            <div class="hand second" id="secondhand"></div>
            <div class="center"></div>
        </div>`
    );
}

//function created to update the clock, used 
function updateClock() {
    const now = new Date(); 

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate rotation degrees, formula found online
    const secondDegrees = seconds * 6; 
    const minuteDegrees = (minutes * 6) + (seconds * 0.1); 
    const hourDegrees = (hours * 30) + (minutes * 0.5);   

    // Apply rotation styles to elements
    document.getElementById('secondhand').style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    document.getElementById('minutehand').style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    document.getElementById('hourhand').style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

initClock();

// Run the function every secpng
setInterval(updateClock, 1000);

// Immadiate call so it shows up on load of window
updateClock();