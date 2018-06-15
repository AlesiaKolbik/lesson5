"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    let colors = [ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    let printedColors = {};

    console.log( 'цветов: ' + colorsCount );
    function isColorRepeat(string) {
        return string in printedColors ;
    }
    for ( let i=1; i<=colorsCount; i++ ) {
        let n = randomDiap(1,7);
        let colorName = colors[n];
        if(!isColorRepeat(colors[n])){
            console.log( colorName );
            printedColors[colors[n]] = n;
        }
    }
}

mood(3);
