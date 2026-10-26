
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

function updateClock() {
    const now = new Date(); // Get the current live time

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate rotation degrees
    const secondDegrees = seconds * 6; 
    const minuteDegrees = (minutes * 6) + (seconds * 0.1); // subtle shift based on seconds
    const hourDegrees = (hours * 30) + (minutes * 0.5);   // smooth transition between hours

    // Apply the rotation styles to the DOM elements
    document.getElementById('secondhand').style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    document.getElementById('minutehand').style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    document.getElementById('hourhand').style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

// Initilize clock
initClock();

// Run the function every 1000ms (1 second)
setInterval(updateClock, 1000);

// Call it immediately so the clock doesn't "jump" on page load
updateClock();