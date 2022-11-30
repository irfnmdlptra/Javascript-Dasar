var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// while( noAngkot <= angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');

// noAngkot++
// }

// for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
// }


for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if( noAngkot <= 6 && noAngkot != 5) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    }else if( noAngkot ===5 || noAngkot === 8 || noAngkot ===10) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur')
    }  else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi')
    }
}


// var motorYangBersih = 20;
// var jmlMotor =25 ;
// var noMotor =1 ;

// for( var noMotor = 1; noMotor <= jmlMotor; noMotor++) {
//     if(noMotor <= motorYangBersih){
//         console.log ('Motor No. ' + noMotor + 'sudah di bersih')
//     } else if ( noMotor == 23){
//         console.log('Motor No. ' + noMotor + ' sementara di cuci')
//     } else {
//         console.log('Motor No. ' + noMotor + ' masi kotor')
//     }
    
        
// }

