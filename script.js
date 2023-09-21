// 11.Write a function generateSeries that takes a number n as input and returns an array of numbers from 1 to n.

console.log(`Problem No. : 11`);
function generateSeries(n) {
    const series = [];
    for(let i=1;i<=n;i++)
    {
        series.push(i);
    }
    return series;
}
console.log(generateSeries(5));
console.log(generateSeries(0));
console.log(generateSeries(10));
console.log(`<----------------------------------->`);

// 12.Write a function calculateArea that calculates the area of a rectangle given its width and height as arguments.
function calculateArea(width, height) {
    if(width >= 0 && height >= 0)
    {
        return width*height;
    }else {
        return 0;
    }
}
// Test Cases
console.log(`Problem No. : 12`);
console.log(calculateArea(5, 3)); 
console.log(calculateArea(10, 8)); 
console.log(calculateArea(4, 0));
console.log(`<----------------------------------->`); 


// 13.Write a function filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.


function filterEvenNumbers(numbers) {
    return numbers.filter(function(number)
    {
        return number % 2 === 0;
    });
}

// Test Cases
console.log(`Problem No. : 13`);
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([11, 13, 17, 20]));
console.log(filterEvenNumbers([]));
console.log(`<----------------------------------->`);


// 14.Write a function capitalizeWords that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizeWords = words.map(function(word)
    {
        if(word.length > 0) 
        {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word;
        }
    });
    return capitalizeWords.join(' ');
}


// Test Cases
console.log(`Problem No. : 14`);
console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("JavaScript is fun"));
console.log(capitalizeWords(""));
console.log(`<----------------------------------->`);

// 15.Create an object called calculator with methods add, subtract, multiply, and divide that perform the respective operations on two numbers.

const calculator = {
    add:function(a,b)
    {
        return a+b;
    },
    subtract:function(a,b)
    {
        return a-b;
    },
    multiply:function(a,b)
    {
        return a*b;
    },
    divide:function(a,b)
    {
        if(b===0)
        {
            return "Cannot divide by 0";
        }else {
            return a/b;
        }
    }
};

// Test Cases
console.log(`Problem No. : 15`);
console.log(calculator.add(5, 3));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(3, 7));
console.log(calculator.divide(15, 3));
console.log(`<----------------------------------->`);

// 16.Write a function delayedGreeting that takes a name as input and logs a greeting message with that name after a delay of 2 seconds.

function delayedGreeting(name) {
    setTimeout(function()
    {
        console.log(`Hello, ${name}!`);
    }, 2000);
}
// Test Case
console.log(`Problem No. : 16`);
console.log(`Display's after 2 sec atlast.`)
delayedGreeting("Alice");
console.log(`<----------------------------------->`);

// 17.Write a function divideSafely that takes two numbers as input and returns their division. Handle the case where the denominator is 0 by throwing an error.

function divideSafely(numerator, denominator) {
    if(denominator === 0)
    {
        throw new Error("Division by 0 is not allowed.");
    }else 
    {
        return numerator/denominator;
    }
}

// Test Cases
console.log(`Problem No. : 17`);
console.log(divideSafely(10, 2));
try {
    console.log(divideSafely(8, 0));
} catch(error) {
    console.error(error.message);
}
console.log(`<----------------------------------->`);

// 18.Write a function forEach that takes an array and a callback function as arguments and calls the callback function for each element in the array.

function forEach(arr, callback) {
    for(let i=0;i<arr.length;i++)
    {
        callback(arr[i]);
    }
}

// Test Case
console.log(`Problem No. : 18`);
const numbers = [1, 2, 3, 4, 5];
forEach(numbers, (num) => {
console.log(num * 2);
});
console.log(`<----------------------------------->`);


// 19.Write an async function fetchData that fetches data from a remote API using fetch. Handle both success and error scenarios using promises.

console.log(`Problem No. : 19`);console.log(`<----------------------------------->`);


// 20.Write a function calculateAverage that calculates the average of an array of numbers using the reduce function.

function calculateAverage(numbers) {
    if(numbers.length === 0) 
    {
        return NaN;
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum/numbers.length;
}

// Test Cases
console.log(`Problem No. : 20`);
console.log(calculateAverage([1, 2, 3, 4, 5]));
console.log(calculateAverage([10, 20, 30]));
console.log(calculateAverage([]));
console.log(`<----------------------------------->`);