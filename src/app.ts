/*
* File: app.ts
* Author: Sangare F. Felisha
* Copyright: 2022, Sangare F. Felisha
* Group: SZOFT II N
* Date: 2022-10-29
* Github: https://github.com/fe-ktch/Ts-Cylinder
* Licenc: GNU GPL
*/

const calcButton = document.querySelector('#calcButton');
const result = document.querySelector('#output');

calcButton?.addEventListener('click', () => {
    const sugar = document.querySelector('#sugar') as HTMLInputElement;
    const length = document.querySelector('#length') as HTMLInputElement;

    let numSugar: number = Number(sugar.value);
    let numLength: number = Number(length.value);

    let surface = calcSurface(numSugar, numLength);
    result.textContent = String(surface);
    sugar.value = "";
    length.value = "";
});


function calcSurface(sugar: number, length: number):number {
    return 2 * Math.PI * sugar * (sugar + length)
    /*2 * Math.PI * Math.pow(sugar, 2) + 2 * Math.PI * sugar * length*/ 
}