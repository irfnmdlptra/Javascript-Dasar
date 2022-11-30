// var angka = prompt('masukkan angka:');

// if( angka == 1) {
//     alert('anda memasukkan angka 1');
// } else if ( angka == 2) {
//     alert('anda masukkan angka 2');
// } else if ( angka == 3) {
//     alert('anda masukkan angka 2');
// } else{
//     alert('angka yang anda masukkan salah');
// }

// switch( angka ) {
//     case '1' : 
//         alert('anda memasukkan angka 1');
//         break;
//     case '2' :
//         alert('anda memasukkan angka 2');
//         break;
//     case '3' : 
//         alert('anda memasukkan angka 3');
//         break;
//     case '4' :
//         alert('anda memasukkan angka 4');
//         break;
//     default :
//     alert('angka yang anda masukkan salah');
//     break;
// }

var item = prompt('masukkan nama makanan / minuman : (cth: nasi, daging, susu, hamburger, softdrink)');

switch( item) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default :
        alert('anda memasukkan nama makanan / minuman yang salah!');
        break;
}