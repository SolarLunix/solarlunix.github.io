$("#submit").click(function(){
	$(this).toggleClass("awesome");
	console.log("submit click");
});

$("button").click(function(){
	$(this).toggleClass("clicked");
	console.log("button click");
});

$(".special").click(function(){
	$("body").css("backgroundColor", createColour());
	$(this).css("color", createColour());
	$("div").css("color", createColour());
});

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