(function(){
    "use strict";

    var i;
    var names;

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    names = ["Mia" , "Aaron" , "Joshua" , "Kyle"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log (names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    for (i = 0; i < names.length; i++) {
    	console.log (names[i]);
    }
})();