// Array of numbers
let numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];

console.log("Original array:", numbers);

// Sorts the numbers from smallest to largest.
numbers.sort(function(a, b) {
  return a - b;
});

console.log("Sorted array:", numbers);

// Numbers to insert into the array.
let numbersToInsert = [19, 23, 30];

// Adds new numbers to the array.
numbersToInsert.forEach(function(number) {
  numbers.push(number);
});

// Sorts the array again after inserting.
numbers.sort(function(a, b) {
  return a - b;
});

console.log("After inserting 19, 23, 30:", numbers);

// Numbers to remove from the array.
let numbersToRemove = [8, 31];

// Removes selected numbers from the array.
numbers = numbers.filter(function(number) {
  return !numbersToRemove.includes(number);
});

console.log("After removing 8 and 31:", numbers);

// Searches an array one item at a time.
function sequentialSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

// Searches a sorted array by checking the middle value.
function binarySearch(array, value) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    if (array[middle] === value) {
      return middle;
    } else if (array[middle] < value) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  return -1;
}

console.log("Sequential search found 25 at index:", sequentialSearch(numbers, 25));
console.log("Sequential search not found 100:", sequentialSearch(numbers, 100));

console.log("Binary search found 25 at index:", binarySearch(numbers, 25));
console.log("Binary search not found 100:", binarySearch(numbers, 100));