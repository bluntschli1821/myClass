

// The funtion used to sort
function sortSquares(arr) {
    let num = arr.length;

    for (i = 0; i < num; i++)
        arr[i] = arr[i] ** 2;


    /* The function statement in the round braces is used as a comparator function, 
    this used the negative, zero, and positive comparation this calculates the difference
     in the return statement and out puts the array. If the difference is negative, the array
     is sorted descendingly (in a descending manner), and if the difference is positive the array
     is sorted ascendingly (in an ascending manner) */

    arr.sort(function (a, b) { return a - b });

    /*the ".sort(function(a,b){return a-b})" is used to sort an array Numerically,
     while the ".sort()" is used to sort an array Alphabetically. */
}

var arr = [-5, -1, 0, 3, 6, 10]
let num = arr.length;
// Printing the normal array
for (var i = 0; i < num; i++);
console.log("Before sorting");
console.log(arr);


// Printing the sorted squared array
sortSquares(arr);
for (var i = 0; i < num; i++);
console.log(' After sorting');
console.log(arr);

console.log(typeof arr);


//Doing it with strings

var val = ["Animal", "NIcaragua", "Mozambique", "Chad", "Belgium"]
let lav = val.length;

// Before Sorting val
for (i = 0; i < lav; i++)
    console.log('Before sorting val')
console.log(val)

// After sorting val
for (i = 0; i < lav; i++);
console.log('After sorting val');
const sorted = val.toSorted()
console.log(sorted);