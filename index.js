let myArray = [];
function seq(requested_length) { 
	for (var i = 0; i < requested_length; i++) {
		myArray.push(i);
		if (i === requested_length - 1) {
			console.log(myArray);
		}
	}
}

seq(7);
