// console.log("Perkenalkan Nama saya irfan syahputra \n alamat: Bulukumba \n umur: 17 tahun")


var s = '';
for( var i = 0; i < 15; i++ ) {
    // console.log('*');
    for( var j = 0; j < i; j++) {
       s += '*'; 
    }
    s += '\n';
}
console.log(s);