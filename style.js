var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 300; // Adjust width as needed
canvas.height = 150;

canvas.style.marginTop = "20px"; // Adjust top margin as needed
canvas.style.marginLeft = "900px"; // Adjust left margin as needed

// Circle properties
var radius = 25; // Reduce the radius to make circles smaller
var lineWidth = 1;

// Draw circles
function drawCircle(x, y, r, fill, text) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "#008f43"; // Outline color
  ctx.stroke(); // Draw outline

  if (fill) {
    ctx.fillStyle = "#008f43"; // Fill color
    ctx.fill(); // Fill circle
  }

  ctx.fillStyle = "grey"; // Text color
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

var centerX1 = canvas.width / 4; // Adjust for the left circle
var centerX2 = canvas.width / 2; // Adjust for the middle circle
var centerX3 = (3 * canvas.width) / 4; // Adjust for the right circle
var centerY = canvas.height / 2;

// Draw three circles with numbers inside
drawCircle(centerX1, centerY, radius, false, "1"); // Adjust position and size as needed
drawCircle(centerX2, centerY, radius, true, "2"); // Adjust position and size as needed
drawCircle(centerX3, centerY, radius, false, "3"); // Adjust position and size as needed

let activeType = "general"

function onToggleGetInTouch(type) {
    const general = document.getElementById("general-inq")
    const partner = document.getElementById("partner-inq")
    const party = document.getElementById('selectedParty')

    if (type === 1) {
        partner.classList.remove("active")
        partner.classList.add("inactive")
        general.classList.remove("inactive")
        general.classList.add("active")
        activeType = "general"
        party.value = "general"
    } else {
        general.classList.remove("active")
        general.classList.add("inactive")
        partner.classList.remove("inactive")
        partner.classList.add("active")
        activeType = "partner"
        party.value = "partner"
    }
}

function getGetInTouchSelectedParty() {
    return activeType
}

function showSlide(slideNumber) {
    // Get the header element
    const header = document.querySelector(".header");

    // Get the header text box element
    const textBox = document.querySelector(".header .text-box");

    // Get the header image elements
    const greencross = document.getElementById("greencross");
    const guyWithPizza = document.getElementById("guy-with-pizza");

    // Update header image and content based on slideNumber
    switch (slideNumber) {
        case 1:
            header.style.backgroundImage = "linear-gradient(rgba(4, 10, 0, 0.5), rgba(4, 15, 0, 0.5)), url(assets/1K6A0489.webp)";
            textBox.innerHTML = "<p>Grow your business with Vuba Vuba<br>Partner with Vuba Vuba Today to reach new<br>customers, increase order volume, and drivemore sales</p>";
            greencross.src = "./assets/greencross.png";
            guyWithPizza.src = "./assets/guy-with-pizza.webp";
            break;
        case 2:
            header.style.backgroundImage = "linear-gradient(rgba(4, 10, 0, 0.5), rgba(4, 15, 0, 0.5)), url(assets/1K6A0514.webp)";
            textBox.innerHTML = "<p>Discover new flavors and enjoy fast delivery<br>with Vuba Vuba App.<br>Order now and satisfy your cravings!</p>";
            greencross.src = "./assets/greencross.png";
            guyWithPizza.src = "./assets/guy-with-pizza.webp";
            break;
        case 3:
            header.style.backgroundImage = "linear-gradient(rgba(4, 10, 0, 0.5), rgba(4, 15, 0, 0.5)), url(assets/1K6A0614.webp)";
            textBox.innerHTML = "<p>Experience the convenience of ordering<br>from your favorite restaurants<br>with Vuba Vuba App.</p>";
            greencross.src = "./assets/greencross.png";
            guyWithPizza.src = "./assets/guy-with-pizza.webp";
            break;
        default:
            // Default case, keep current slide
            break;
    }

    // Update active circle
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle, index) => {
        if (index + 1 === slideNumber) {
            circle.classList.add("active-circle");
        } else {
            circle.classList.remove("active-circle");
        }
    });
}


// Function to handle click on Apple Store image
const appleImage = document.getElementById('apple-store');
appleImage.addEventListener('click', () => {
    // Open a new tab with the specified URL
    window.open('https://example.com/new-apple-url', '_blank');
});

// Function to handle click on Play Store image
const playstoreImage = document.getElementById('playstore');
playstoreImage.addEventListener('click', () => {
    // Open a new tab with the specified URL
    window.open('https://example.com/new-playstore-url', '_blank');
});


const joinbtn = document.getElementById('join-us-btn')

joinbtn.addEventListener('onclick', () => {
    window.location.href = 'signup.html'
})



