
console.time('label');
console.log('Zdravo');

console.error('Greshka!');

let obj = {ime: 'Pero', prezime: 'Perovski'};
console.dir(obj);

let tbl = [
    { ime: 'Pero', prezime: 'Perovski' },
    { ime: 'Pero', prezime: 'Perovski' },
    { ime: 'Pero', prezime: 'Perovski' },
    { ime: 'Pero', prezime: 'Perovski' },
    { ime: 'Pero', prezime: 'Perovski' },
];

console.table(tbl);
console.timeEnd('label');

console.log("Zdravo \nzdravo");
console.log('Zdravo \nzdravo');
console.log(`Zdravo \nzdravo`);

var1 = 'VAR 1';
var var2 = 'VAR 2';
let var3 = 'VAR 3';

const var4 = 'VAR 4';


const var5 = {ime: 'Pero'};
console.log(var5);
var5.ime = 'Janko';
console.log(var5);


let ime = 'Stefan'; // prost tip - pass by value
let godini = 26; // prost tip - pass by value
let programer = true; // prost tip - pass by value

let lokacija = {grad: 'Skopje', drzava: 'Makedonija'}; // slozen tip - pass by reference

function change(ime, godini, programer, lokacija) {
    ime = 'Vancho';
    godini = 40;
    programer = false;
    lokacija.grad = 'Bitola';
}

change(ime, godini, programer, lokacija);

console.log(ime);
console.log(godini);
console.log(programer);
console.log(lokacija);

function sampleFN(param1) {
    console.log('Funkcija 1');
}

const sampleFN2 = function() {
    console.log('Funkcija 2');
};

const sampleFatFn = () => {
    console.log('Funkcija 3!!');
};

// what is the fifference between arrow and clasic JS functions