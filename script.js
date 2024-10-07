//1 The script.js is included in the head of the index.html. 
// To run your code after the DOM is loaded, wrap it with a 
// callback function of an event listener (DOMContentLoaded).

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM CONTENT LOADED');


    //2 Get the elements from the DOM that you will work on(box 
    // container, new box button, color form, color input).

    const boxContainer = document.getElementById('box-container');
    const newBoxBtn = document.getElementById('new-box-button');
    const colorForm = document.getElementById('color-form');
    const colorInput = document.getElementById('color-input');

    //3 Create variables to store the box color and counter for the box ID.

    let boxColor = null; // Stores the selected box color from the form.
    let boxIdCounter = 0; // Counter for assigning unique IDs to new boxes.

    //4 When the form is submitted, get the value from the color input element 
    // from Step 2 and set this color to all boxes (to get all boxes, use the 
    // class name box). Remember to reset the color input element's value and 
    // store the color in the box color variable we created in Step 3.

    colorForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        const colorValue = colorInput.value; // Get the value from the input field
        const boxes = document.getElementsByClassName('box'); // Get all elements with the class 'box'

        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = colorValue;   // Loop through all boxes and set their background color
        }

        boxColor = colorValue;  // Store the selected color in the boxColor variable


        colorInput.value = ''; // Reset the input field
    });
})

