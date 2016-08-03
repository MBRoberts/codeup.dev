(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;
    var planetsBreak;
    var planetsUl;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful? To print each planet on a new line when you send it back to html

    planetsBreak = planetsArray.join("<br>");
    console.log(planetsBreak);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    



    planetsUl = planetsArray.join("</li>,<li>");
    planetsArray = planetsUl.split(",");
    planetsArray.unshift('<ul><li>');
    planetsArray.push('</li></ul>');
    planetsUl = planetsArray.join("");

    console.log (planetsUl);
})();