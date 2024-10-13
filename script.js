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

    //5 Create a function that adds a new box. 

    //In this function, set the box ID as content, the class name, ????
    //and the background color from the box color variable we created in Step 3.

    // Besides, set the box ID to a data attribute. -??????

    //You'll need this attribute to set the display text back to ID when the mouse leaves. (inner text????)
    //Since we used this counter ID, increment it using the counter variable 
    //we created in Step 3 to keep its uniqueness.
    const createNewBox = function () {
        const box = document.createElement('div'); //creates the box
        console.dir(box);
        box.className = "box"; //create css class box
        box.style.backgroundColor = boxColor; //sets the background color to the box color variable
        boxContainer.appendChild(box); //appends box to the box container div when you create a new box

        boxIdCounter++; //increment the box ID counter
        box.setAttribute('id', `box-${boxIdCounter}`);
        box.textContent = `Box ${boxIdCounter}`; // Display the ID inside the box

    }

    //4 When the form is submitted, get the value from the color input element 
    // from Step 2 and set this color to all boxes (to get all boxes, use the 
    // class name box). Remember to reset the color input element's value and 
    // store the color in the box color variable we created in Step 3.

    colorForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(colorInput.value);
        const colorValue = colorInput.value; // Get the value from the input field
        const boxes = document.getElementsByClassName('box'); // Get all elements with the class 'box'
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = colorValue;   // Loop through all boxes and set their background color
        }

        boxColor = colorValue;  // Store the selected color in the boxColor variable


        colorInput.value = ''; // Reset the input field
    });

    newBoxBtn.addEventListener('click', function () {
        createNewBox();
    })


    boxContainer.addEventListener('dblclick', function (event) {
        event.preventDefault();
        const box = document.querySelector('.box');
        box.remove();
    })

    boxContainer.addEventListener('mouseover', function (event) {
        if (event.target.classList.contains("box")) {
            event.target.textContent = `x: ${event.pageX}, y: ${event.pageY}`; //Changes the display text to the coordinates.
        }
    })

    boxContainer.addEventListener('mouseout', function (event) {
        if (event.target.classList.contains("box")) {
            event.target.textContent = `Box ${boxIdCounter}`; // Return to displaying the ID inside the box after mouse moves out of box.
        }
    })

    //10 To create a new box when the N key is pressed, listen to the key-down events
    // in the document. If the key is N (check both upper and lower cases), call
    // the function that adds a new box. Remember to ignore the event if it is
    // triggered from the color input element.

    // document.addEventListener('keydown', function (e) {
    //     e.preventDefault();
    //     if (e.target.id === 'color-input') {
    //         return;
    //     }
    //     else (e.key === "N" || e.key === "n") {
    //         createNewBox();
    //     }
    // })


})