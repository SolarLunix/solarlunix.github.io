
//------- Listeners -------
//Check off li's
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	$(this).children(".check").fadeToggle(250);
});//end Chekc off li's

//Delete ToDos
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(function(){
		$(this).delete;
	});
	event.stopPropagation();
});//end Delete ToDos

//Adding a list item to the ul#list 
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("#list").append("\n<li><span class=\"delete\">X</span><span class=\"check\">Done</span> " + text + "</li>");
	}
});//end Adding a list item
