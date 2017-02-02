var count = 0;

var img = document.getElementsByTagName("img")[0];

setInterval(function(){
	if(count === 0){
		img.setAttribute("src", "https://solarlunix.github.io/Images/RyanMelissa1.jpg");
	}else if(count === 1){
		img.setAttribute("src", "https://solarlunix.github.io/Images/RockoMelissa1.jpg");
		count = -1;
	}

	count++;
}, 2500);