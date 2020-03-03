const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    arrSorted = [];
    arr.forEach(item => arrSorted.push(item));
    arrSorted.sort();
    return arrSorted;
}

const even = function(arr) {
    let arrEven = arr.filter(item => item % 2 == 0);
    return arrEven;
}

numbers = [8,3,2,1,5,4,6];
console.log("Original array: " + numbers);
console.log("Reversed array: " + reverse(numbers));
console.log("Only even numbers from array: " + even(numbers));
console.log("Reversed array with even numbers only: " + reverse(even(numbers)));
console.log("Sorted array with only even numbers: " + even(sort(numbers)));

