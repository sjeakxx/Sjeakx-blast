// The correct passcode
const correctPasscode = "8521";  // Change this to whatever passcode you prefer

// Function to check passcode
function checkPasscode() {
    const passcode = prompt("Enter the passcode for Legowedo 2.0:");
    if (passcode === correctPasscode) {
        openPopup();
    } else {
        alert("Incorrect passcode. Please try again.");
    }
}

// Function to open the popup
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
