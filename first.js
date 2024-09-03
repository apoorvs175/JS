
let numbers = [5, 3, 8, 1, 2];

// Function to add a number
function addNumber(array, number) {
    array.push(number);
}

// Function to remove a number
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

// Function to sort the numbers
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum
function calculateSum(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

// Function to calculate the average
function calculateAverage(array) {
    const sum = calculateSum(array);
    return sum / array.length;
}

console.log("Original array:", numbers);

addNumber(numbers, 7);
console.log("After adding 7:", numbers);

removeNumber(numbers, 3);
console.log("After removing 3:", numbers);

const sortedNumbers = sortNumbers(numbers);
console.log("Sorted array:", sortedNumbers);

const sum = calculateSum(numbers);
console.log("Sum of numbers:", sum);

const average = calculateAverage(numbers);
console.log("Average of numbers:", average);
```
