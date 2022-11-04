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