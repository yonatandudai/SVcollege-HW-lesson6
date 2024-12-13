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


// main
// console.log(idChecker());
// isPrime(7);
// console.log(findCapital("abCdEf"));
//console.log(littleAndBig("hi","hihihi"));


