"use strict";


let userString = null;
const readline = require('readline');
askString();

function askString() {
    const rl = prompt();
    rl.question("Введите строку...", (answer) =>{
        rl.close();
        if(!answer){
            console.log("Введите хотя бы одну букву...");
            askString()
        }
        else{
            userString = answer;
            end();
        }
    })
}

function prompt() {
    return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

function isVowel(string) {
    let vowel ="ауоыиэяюёе";
    return vowel.includes(string);
}

function findQuantityVowel(string) {
    let counter = 0;
    for(let i=0;i<string.length;i++){
        if(isVowel(string.charAt(i))){
            counter++;
        }
    }
    return counter;
}
function end() {
    console.log(findQuantityVowel(userString));
}

