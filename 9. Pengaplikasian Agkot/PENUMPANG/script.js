var penumpang = ['Yusuf', undefined, 'Nofal'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if( penumpang.length == 0 ) {
        // tambah penumpang di awal array 
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function 
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++ ) {
            // jika ada kursi kosong
            if( penumpang[i] == undefined ) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama 
            else if( penumpang[i] == namaPenumpang ) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot')
            }
        }
    }
}






















































// var hapusPenumpang = function(namaPenumpang, penumpang); {
// jika angkot kosong
    // tampilkan pesan bahwa angkot kosong, dan 
    // tidak mungkin ada penumpang turun 
    // kembalikan isi array & keluar dari function 
// else 
    // telusuri seluruh kursi dari awal
        // jika nama penumpang sesuai 
            // hapus penumpang dengan mengubah namanya,
            // menjadi undefined 
            // kembalikan isi array & keluar dari function 
        // jika tidak ada nama yang sesuai 
            // tampilkan pesan kesalahannya
            // kembalikan isi Array  & keluar dari function
// }