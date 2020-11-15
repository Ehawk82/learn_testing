let myArray = [];
function seq(requested_length) { 
  for (var i = 0; i < requested_length; i++) {
    myArray.push(i);
    if (i === requested_length - 1) { // spit out the final array only once at completion
    	console.log(myArray);
    }
  }
}

seq(7);
