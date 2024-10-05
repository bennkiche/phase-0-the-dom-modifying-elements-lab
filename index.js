// index.js

// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element
newHeader.id = 'victory';

// Replace 'YOUR-NAME' with the actual name, e.g., 'John Doe'
const userName = 'Benn Kiche'; // Replace with the desired name
newHeader.innerHTML = `${userName} is the champion`;

// Append the newHeader to the body or another element in your document
document.body.appendChild(newHeader);
