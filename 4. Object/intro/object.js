// membuat object 
var mhs = {
    nama : "irfnmdlptra",
    umur : 20,
    ips : [3.00, 2.50, 3.20],
    alamat : {
        Jalan : "Jl. Ak.Mappanganro",
        Dusun : "Allu",
        Desa :"Tammatto",
        Kecematan : "Ujungloe",
        Kabupaten : "Bulukumba",
        Provinsi : "Sulawesi Selatan"
    }
};


// Membuat Object
// Object Literal
var mhs1 = {
    nama : "Irfan Syahputa",
    nrp : "043040023",
    email : "bangasrat@gmail.com",
    jurusan : "Teknik Informatika"
}
var mhs2 = {
    nama : "Daeng Kulle",
    nrp : "043277376",
    email : "jjshait@gmail.com",
    jurusan : "Teknik Industri"
}


// Function Declaration
// Declaration 
function  buatObjectMahasiswa( nama, nrp, email, jurusan){
    var mhs =  {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

// Object4
var mhs3 = buatObjectMahasiswa('Novariza','9636382688','novariza@gmail.com','Teknik Listrik');
var mhs4 = buatObjectMahasiswa('Nanda','8736272638','nandajr78@gmail.com','Teknik Perkawinan');


// Constructor [ Function Yang Khusus Membuat Objek]
// menggunakan kata this 
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

// untuk memanggil gunakan kata new 
var mhs5 = new Mahasiswa('Olleng','8736276725','doll@gmail.com','Teknik Pertanian');

