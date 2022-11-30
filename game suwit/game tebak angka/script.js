const kirim = document.querySelector('.container .kirim');
const input = document.querySelector('container .input-user');
const komp = document.querySelector('.container .komputer');
const result = document.querySelector('container .result');

var counter = 2;
var konvirmasi;
var comp = Math.round(Math.random() * 10 + 1);

function hasil(player, komputer) {
    // kalau menang
    if(player == komputer) {
        result.style.color = 'green';
        result.innerHTML = "SELAMAT ANDA MENANG !!!"
        komp.innerHTML = komputer;
        input.setAttribute('disabled',true);
        return;
    }

    // kalau kalah
    else{
        // kalau masih ada kesempatan
        if(counter > 0){
            counter--;
            kirim.innerHTML = 'submit (' + (counter+1) + ')';

            if(komputer > player){
                result.style.color = 'yelllow';
                result.innerHTML = "Nilai Anda Terlalu Kecil";
                return;
            }
            else{
                result.style.color = 'yellow';
                result.innerHTML = "Nilai Anda Terlalu Besar";
                return;
            }
        }
        // kalau gak ada kesempatan
        else{
            kirim.innerHTML = 'submoit';
            result.style.color = 'red';
            result.innerHTML = "MAAF ANDA KALAH :(";
            komp.innerHTML = komputer;
            input.setAttribute('disabled',true);
            return;
        }
     }
    
}


// stiap button di klick

kirim.addEventListener('click',function(){
    hasil(input.value, comp);
});