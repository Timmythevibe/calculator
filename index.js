// CALCULATOR PROGRAM

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
       display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
}

function calculateSquareRoot() {
    try {
      let result = Math.sqrt(eval(display.value));
      display.value = result.toFixed(2); // Limiting to 2 decimal places for readability
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  function calculateSquare() {
    try {
      let result = Math.pow(eval(display.value), 2);
      display.value = result.toFixed(2); // Limiting to 2 decimal places for readability
    } catch (error) {
      display.value = 'Error';
    }
  }