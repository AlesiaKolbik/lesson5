"use strict";

const readline = require('readline');

let userString;

function end() {
    console.log(findMatchLetters(userString));
    console.log(findMatchesLet(userString));
}

function askUserString() {
    const rl = prompt();
    rl.question("Введите строку...", (answer)=>{
        rl.close();
        if(!answer){
            console.log("Нужно ввести хотя бы одну букву");
            askUserString();
        }
        else {
            userString = answer.trim().toLowerCase().split("");
            end();
        }
    })
}

function prompt() {
    return readline.createInterface({input: process.stdin, output: process.stdout})
}

function findMatchLetters(arrOfString) {
    let counter = 0;

    arrOfString.forEach(function (element) {
        if ("уеыаоэяию".indexOf(element) !== -1) counter++;
    });
    return counter;
}

function findMatchesLet(arrOfString){
    const result = arrOfString.filter(el=> "уеыаоэяию".indexOf(el) !== -1);
    return result.length;

}


askUserString();

