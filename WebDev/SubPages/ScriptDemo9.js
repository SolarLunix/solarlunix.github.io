var movies = [{
	name: "Matrix",
	seen: true,
	rating: 3
}, {
	name: "Die Hard",
	seen: true,
	rating: 4.5
}, {
	name: "Now You See Me",
	seen: true,
	rating: 5
}, {
	name: "James Bond",
	seen: false,
	rating: 4.8
}];

movies.forEach(function(movie){
	var aString = "You have ";
	
	if(movie.seen === true){
		aString += "watched \"";
	}else{
		aString += "have not seen \"";
	}

	aString += movie.name + "\" - " + movie.rating + " stars";

	console.log(aString);
});