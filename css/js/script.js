// bagian fungsi hitung

function hitung(){
    // deklarasi variabel
let angka1 = parseFloat(document.getElementById("angka1").value);
let angka2 = parseFloat(document.getElementById("angka2").value);
let operator = document.getElementById("operator").value;
let hasil;

// cek kesalahan
if(isNaN(angka1) || isNaN(angka2)){
    hasil = "Harap Masukkan angka yang benar (valid)";
}else{
if (operator === "+"){
hasil = angka1 + angka2;
}else if(operator === "-"){
    hasil = angka1 - angka2;
}else if(operator === "*"){
    hasil = angka1 * angka2;
}else if(operator === "/"){
    if(angka2 === 0 ){
        hasil = "kesalahan! Tidak bisa dibagi Dengan Nol";
    }else{
        hasil = angka1 / angka2;
    }

}else {
    hasil = "Operator Tidak Valid";

}
document.getElementById("hasil").textContent = hasil;
}
}

// bagian fungsi tombol bersih

function Bersih(){
document.getElementById("fkalkulator").reset();
}