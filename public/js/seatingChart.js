'use strict';

console.log("Test");

// returns a range (inclusive) as an array
// > (1).to(5)
// => [ 1, 2, 3, 4, 5 ]
Number.prototype.to = function(n, step){
    var array = [];
    step = (typeof step != 'undefined') ? step : 1;
    if (n > this){
        for (var i = 0; i <= n - this; i += step) {
            array.push(this + i);
        }
    } else if (n < this) {
        for(var i = 0; i <= this - n; i += step){
            array.push(this - i);
        }
    } else {
        return [n];
    }
    return array;
}

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

/**
 *
 * Desk Layout
 *
 *                  Front
 *
 *            |  0 |  1 |  2 | - |  3 |  4 |  5 |  6 |  7 |
 *  |  8 |  9 | 10 | 11 | 12 | - | 13 | 14 | 15 | 16 | 17 |
 *  | 18 | 19 | 20 | 21 | 22 | - | 23 | 24 | 25 | 26 | 27 |
 *                   Back
 *
 **/

// for placing students
const frontSeatsLeft = (0).to(2);
const frontSeatsRight = (3).to(7);

const secondRowLeft = (8).to(12);
const secondRowRight = (13).to(17);

const backSeatsLeft  = (18).to(22);
const backSeatsRight = (23).to(27);

const $seatingChart = $('#seating-chart');

const students = [
    'Amberlee',
    'Bich',
    'Cara',
    'Carlos',
    'Daniel',
    'Del',
    'Derek',
    'Dusty',
    'Emilio',
    'Everardo',
    'Ian',
    'James M',
    'James C',
    'Jason',
    'Joshua',
    'Larry',
    'Marcus',
    'Melody',
    'Micah',
    'Mike',
    'Moses',
    'Rene',
    'Roxana',
    'Sarah',
    'Tuesday',
    'Violet',
    'William'
];

console.log('shuffling...');
shuffle(students);

// add a desk for each student
students.forEach(function (student) {
    let $desk = $('<div>').addClass('desk').text(student);
    $seatingChart.append($desk);
});
