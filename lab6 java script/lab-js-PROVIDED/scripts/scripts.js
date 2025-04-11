/****************** YOUR NAME: ZEYNEP CAMGOZ

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName = "XYZ";
let duration = 0;


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
// creating a function called recalculate() that creates a variable represent the calculated-cost span element. Then checking the value of modelName variable and calculate the new total cost depending on the given instruction.
window.onload = function () {
    function recalculate() {
        let calculated_cost = document.getElementById("calculated-cost");
        let cost;
        if (modelName === "XYZ") {
            cost = duration * 100;
        } else if (modelName === "CPRG") {
            cost = duration * 213;
        }

        calculated_cost.innerHTML = cost;
    }


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);
// INSERT YOUR CODE HERE

// getting the switch model pseudo button using for switching between "XYZ" and "CPRG" when user clicks it. It updates the model name on the page and calculates total.
let model_button = document.getElementById("model-button");

model_button.onclick = function () {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
};


/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE


// this part of the code is for setting the duration and calculating the total cost depending on the entered days. 
let duration_button = document.getElementById("duration-button");

function ChangeDuration() {
    let duration_text = document.getElementById("duration-text");
    let new_duration = prompt("Enter new duration:");
    duration = new_duration;
    duration_text.innerHTML = new_duration;
    recalculate();
}

duration_button.addEventListener("click", ChangeDuration);
};
