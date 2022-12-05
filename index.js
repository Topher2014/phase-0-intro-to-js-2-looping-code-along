// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];
const event = 'surprise';

writeCards(array);
countDown(number);

function writeCards(names, event){
    const array = [];
    for (let i = 0; i < names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

function countDown(number){
    while (number >= 0){
        console.log(number);
        number-= 1;
    }
}