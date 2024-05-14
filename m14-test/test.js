const numbers = [1,2,3,4,5];
const res = numbers.map(number => number+5);
console.log(res);



const string = ["planes", "trains", "automobiles"];
const slicedstring = string.map(mode => mode.slice(0,-1));
console.log(slicedstring);



const slicedstring2 = string.map(mode => mode.slice(0,1));
console.log(slicedstring2);



const slicedstring3 = string.map(mode => {
    return mode.charAt(0).toUpperCase() + mode.slice(1);
});
console.log(slicedstring3);



const string2 = ["goldfish", "dog", "turtle", "tiger"];
const s4 = string2.filter(mode => mode.length <= 5);
console.log(s4);



const s5 = string2.filter(mode => mode.startsWith('t'));
console.log(s5);



const s6 = numbers.filter(mode => mode % 2 == 0);
console.log(s6);
