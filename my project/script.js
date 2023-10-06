// Define arrays for different pieces of data
const starters = ["Today is a great day to", "Don't forget to", "You should"];
const middleParts = ["dream big", "stay positive", "learn something new", "take a break"];
const endings = ["and make it happen!", "for a brighter tomorrow.", "to create your own luck."];

// Function to generate a random message
function generateRandomMessage() {
    // Randomly select elements from each array
    const randomStarter = starters[Math.floor(Math.random() * starters.length)];
    const randomMiddlePart = middleParts[Math.floor(Math.random() * middleParts.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];

    // Combine the selected elements into a message
    const randomMessage = `${randomStarter} ${randomMiddlePart} ${randomEnding}`;

    // Display the message on the web page
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.textContent = randomMessage;
}

// Attach the generateRandomMessage function to the button click event
const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generateRandomMessage);

// Initial message generation
generateRandomMessage();