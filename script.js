//Q1.
"use strict"

function idChecker(){
    let bool = false;
    let id = prompt("Please enter your id:");
    let digitsOnly = !isNaN(id);
    if (id.length == 9){
        if (digitsOnly == true){
            bool = true;
        }
    }
    return bool;
}

//Q2.
function isPrime(num){
    let prime = true;
    for (let index = 2; index <= Math.sqrt(num); index++){
        if (num % index == 0){
            prime = false;
            break;
        }
    }
    console.log(prime);
}

//Q3.
function findCapital(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += " " + str[i];
        } else {
            result += str[i];
        }
    }
    return result.trim(); // Remove leading space if any
}

// Q4.
function littleAndBig(str1, str2){
    let little = "";
    let big = "";
    let sub = "";
    let counter = 0;
    if (str1.length < str2.length){
     little = str1;
     big = str2;   
    }
    else{
        little = str2;
        big = str2;   
    }
    for (let i=0; i < big.length; i++){
        sub = big[i]+big[i+1];
        if (sub === little){
            counter++;
        }
    }
    return counter;
}

//Q5.
function bubbleSortString(str) {
    let arr = str.split(''); // Convert the string to an array of characters
    let n = arr.length;

    // Bubble sort algorithm
    for (let i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (let j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr.join(''); // Convert the sorted array back to a string
}


// main
// console.log(idChecker());
isPrime(7);
console.log(findCapital("abCdEf"));
console.log(littleAndBig("hi","hihihi"));
console.log(bubbleSortString("fcab"));
