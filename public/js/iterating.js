(function(){
    "use strict";

    var names;
    var reverseNames;

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    names = ["Mia" , "Aaron" , "Joshua" , "Kyle"];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log (names.length);

    // TODO: Create log statements that will print each of the names array elements individually.

    for (var i = 0; i < names.length; i++) {
    	console.log (names[i]);
    }

    // TODO: Below the for loop, use a forEach loop to print the names again.

    names.forEach(function(elements, index, array){
    	console.log (elements);
    })

    reverseNames = names.reverse();

    console.log (reverseNames);


})();