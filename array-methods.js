var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
planets.forEach(function(cur){
	el.innerHTML += cur + " ";
});

// Use the map method to create a new array where the first letter of each planet is capitalized
el.innerHTML += "<br><br>" + planets.map(function(cur){
		return cur[0].toUpperCase() + cur.slice(1);
	});


// Use the filter method to create a new array that contains planets with the letter 'e'
el.innerHTML += "<br><br>" + planets.filter(function(cur){
		if(cur.indexOf("e") > 0){return cur;}
	});

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
el.innerHTML += "<br><br>" + words.reduce(function(pre, cur){
		return pre + " " + cur;
	});
