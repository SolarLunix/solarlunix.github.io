//Get all items needed from the document
var colourSquares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");

//Create other variables that are needed
var numColours = 6;
var colourArray = createColoursArray(numColours);
var colourGoal = pickColour();

//SETUP
//Give all the squares their colours
for(var i = 0; i < colourSquares.length; i++){
	//add click event to squares
	colourSquares[i].addEventListener("click", function(){
		//Get the colour of the square
		thisColour = this.style.background;

		//Check if the colour is the same as the win colour
		if(thisColour === colourGoal){
			changeColours(colourGoal);
			messageDisplay.textContent = "Correct!";
			h1.style.background = colourGoal;
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

updateSquares();
colourDisplay.textContent = colourGoal;

//Resets everything if the reset button is clicked
reset.addEventListener("click", function(){
	colourArray = createColoursArray(numColours);
	colourGoal = pickColour();
	colourDisplay.textContent = colourGoal;
	updateSquares();
});//end reset button click

//FUNCTIONS
//updates all of the colours according to the colour array
function updateSquares(){
	for(var i = 0; i < colourSquares.length; i++){
		colourSquares[i].style.background = colourArray[i];
	}
}//end updateSquares

//creates an array of colours of length num
function createColoursArray(num){
	var anArray = [];

	//add num colours to array
	for(var i = 0; i < num; i++){
		//create the random colour and add it to the array
		anArray.push(createColour());
	}

	return anArray;
}//end createColours Array

//creates a single colour in rgb() format.
function createColour(){
	//create the values
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

	//create the colour string
	var colourVal = "rgb(" + r + ", " + g + ", " + b + ")";

	//return the colour
	return colourVal;
}//end createColour

//pick a number between 0 and coloursArray.length
function pickColour(){
	//pick a colour value within the colours array.
	var rnd = Math.floor(Math.random() * colourArray.length);
	var picked = colourArray[rnd];
	return picked;
}//end pickColour