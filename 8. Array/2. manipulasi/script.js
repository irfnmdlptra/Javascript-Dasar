// manipulasi array 

// 1. Menambah isi array 
// var arr = [];
// arr[0] = "sandika";
// arr[1] = "galih";
// arr[3] = "nofa"


// console.log(arr);
// var arr = ["a", 1, true]; 
// console.log(arr[1]);
// var arr = []
// arr[0] =  "sandika";
// arr[1] = "baba";
// arr[2] = "dede";
// arr[4] = "pito";

// console.log(arr);


// // 2. menghapus isi array 

// var arr 
// var a = prompt("masukkan nama");
// var b = prompt("masukkan nama");
// var c = prompt("masukkan nama");
// var d = prompt("masukkan nama");
// var e = prompt("masukkan nama");

// var arr = [a,b,c,d,e];

// for( var i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);  
// }



// method pada Array
// join
// var arr = ['sandika','galih','nofa'];
// console.log(arr.join(' <> '))

// push & pop 
// arr.push('doddy', 'kkiki');
// console.log(arr.join(' - '))

// arr.pop('sandika')
// arr.pop('sandika')
// arr.pop('sandika')
// console.log(arr.join(' - '))


// unshitft & shit 
// arr.unshift('doddo');
// arr.shift();
// console.log(arr.join(' ^ '))

// var arr = ['sandika','galih','nofa'];
// 4 splice 
// // splice(indexAwal, mauDihapusBerapa, elenBaru, elemenBaru2, ...)
// arr.splice(0, 3, 'doddy', 'fiti', 'sdnsndsand', 'dsdsdsad', 'dsdsad')
// console.log(arr.join('-'))


// 5. slice
// slice(awal, akhir);
// var arr = ['sandika','galih','nofa', 'Nofal', 'doddy', 'fitri'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' + '));
// console.log(arr2.join(' + '));


// 6. foreach 
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['sandika', 'galih', 'nofa'];
// 
//for( var i = 0; i < angka.length; i++ ) {
//     console.log(angka[i]);
// // }
// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(function(e) {
//     console.log(e);
// }) 

// 7. map 
// var angka = [1,2,3,5,6,8,4];
// var angka2 =angka.map(function(e) {
//     return e * 2;

// }
// // 8. short 
// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '))   

// 9. filter & find
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 5;
})
var angka3 = angka.find(function(x) {
    return x < 5;
});
console.log(angka2);
console.log(angka3);