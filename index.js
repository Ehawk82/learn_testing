let myArray = [];

function seq(nombre) { for (var i = 0; i < nombre; i++) {
	myArray.push(i);
	if(myArray.length === i){
		console.log(myArray);
	}
}};

seq(7);