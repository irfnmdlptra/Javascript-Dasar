// global scope / window scope   


// // 
// var a = 1;

// var v = 5556;

// var b = 44;

// function tes() {
//     var b = 2;
//     console.log(window.b);
// }

// tes()
// console.log(b)

// function tes(){
//     a = 3;
//     b = 6;
// }

// tes()
// console.log(a)

// console.log(b)


// function tambah(a,b,c){
//     return a + b - c
// }

// var hasil = tambah(2,3,6)
// console.log(hasil)


// function kali(a,b){
//     return a * b
// }

// var hasil = kali(9,9)
// console.log(hasil)

// function tambah(a,b,c) {
//    return a + b - c;
// }


// var hasil = tambah(2,3,6)
// console.log(hasil)

// function kali(a,b){
//    return  a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));


// var a = parseInt(prompt('Masukkan nilai 1 :'));
// var b = parseInt(prompt('Masukkan nilai 2 :'));
// var hasil = tambah(a*2,b*2);
// console.log(hasil);


// function kali(a,b){
//    return a * b;
// }

// var hasil = kali(2,5);
// console.log(hasil)

// "use strict"
// var a = 1;

// diluar function di sebut dengan var global
// sedangkan yang di dlam function di sebut var lokal
// function tes(a) {
//    console.log(a)
// }
// tes(2);

var a = 2;

function tes() {
   var a = 3;
   console.log(a)
}

tes()
console.log(a)
   

