// for( var i = 10; i >= 1 ; i-- ){
//     console.log(i)
// }

// function tampilAngka(n) {
//     if ( n === 0) {
//         return;
//     }
//     console.log(n);
//     return tampilAngka(n-1)
// }

// tampilAngka(10);


// function faktorial(n) {
//     if (n=== 0) return 1;
//     return n * faktorial(n-1)
// }

// function cetakAngka(n) {
//     if (n === 0 ){
//     return;
// }

// console.log(n);
// cetakAngka(n-1);

// }

// cetakAngka(19);


function faktorial(n) {
    if(n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));