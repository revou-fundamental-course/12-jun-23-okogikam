// menyiapkan variabel 
const suhu1 = document.querySelector(".suhu_1");
const suhu2 = document.querySelector(".suhu_2");
const btns = document.querySelectorAll(".btn");
const selected = document.querySelectorAll("select");
const nilai_awal = document.querySelector("#suhu_1_nilai");
const cara = document.querySelector(".cara");
const penjelasan = document.querySelector(".penjelasan");
const error = document.querySelector(".error");
let suhu_hasil = "";

// menambah fungsi tombol 
btns.forEach(btn => {
    btn.addEventListener("click",()=>{
        hapus();
        switch(btn.dataset.fungsi){
            case "konversi":
                konversi()                
            break
            case "reset":
                reset();
            break
            case "reverse":
                reverse();
            break
        }
    })
});

// kosongkan hasil 
function hapus(){
    suhu2.innerHTML = "";
    error.innerHTML = "";
    cara.innerHTML = "";
    penjelasan.innerHTML = "";
}

// konversi suhu 
function konversi(){ 
    if(isNaN(Number(nilai_awal.value)) || nilai_awal.value == ""){
        pesan_error();
        console.log("error")
        return;
    }   
    console.log(Number(nilai_awal.value))
    let i = `${selected[0].value}_${selected[1].value}`;
    let satuan = selected[0].value[0];
    switch(i){
        case "Celsius_Fahrenheit":
            Celsius_Fahrenheit();
            break;
        case "Fahrenheit_Celsius":
            Fahrenheit_Celsius();
            break;
        default:
            let p = document.createElement("p");
            let span = document.createElement("span");
            suhu_hasil = nilai_awal.value;
            span.innerHTML = `${Number(nilai_awal.value)} &deg;${satuan}`;
            p.innerHTML = `Cara Kalkulasi:<br> ${Number(nilai_awal.value)}&deg;${satuan} = ${Number(nilai_awal.value)}&deg;${satuan}`;

            suhu2.append(span);
            cara.append(p);
            break
    }
    if(selected[0].value != selected[1].value){
        pesan_penjelasan();
    }

}
// reset nilai suhu 
function reset(){
    nilai_awal.value = "";
    hapus();
}
// balik rumus konversi 
function reverse(){
    let s = selected[0].value;
    selected[0].value = selected[1].value;
    selected[1].value = s;
    nilai_awal.value = suhu_hasil;
    nilai_awal.setAttribute("placeholder",selected[0].value)
    konversi();
}
// menampilkan pesan error 
function pesan_error(){
    let span = document.createElement("span");
        span.innerText = `*masukkan angka`;
        error.append(span);
}

// rumus celsius ke fahrenheit 
function Celsius_Fahrenheit(){
    let p = document.createElement("p");
    let span = document.createElement("span");
    suhu_hasil = (Number(nilai_awal.value) * 9/5 +32).toFixed(2);
    span.innerHTML = `${suhu_hasil} &deg;F`;
    p.innerHTML = `Cara Kalkulasi:<br> ${Number(nilai_awal.value)} &deg;C x 9/5 + 32 = ${suhu_hasil} &deg;F`;

    suhu2.append(span);
    cara.append(p);
}
// rumus Fahrenheit ke Celsius
function Fahrenheit_Celsius(){
    let p = document.createElement("p");
    let span = document.createElement("span");
    suhu_hasil = ((Number(nilai_awal.value) - 32) * 5/9).toFixed(2) ;
    span.innerHTML = `${suhu_hasil} &deg;C`;
    p.innerHTML = `Cara Kalkulasi:<br> (${Number(nilai_awal.value)} &deg;F - 32) x 5/9 = ${suhu_hasil} &deg;C`;

    suhu2.append(span);
    cara.append(p);
}
// menampilkan penjelasan
function pesan_penjelasan(){
    let div = document.createElement("div");
    div.innerHTML = `<h3>Cara Konversi Dari ${selected[0].value} (&deg;${selected[0].value[0]} ) ke ${selected[1].value}  (&deg;${selected[0].value[0]} )</h3>
    <hr>
    <p>${daftar_rumus[selected[1].value][0]}</p>
    <p>${daftar_rumus[selected[1].value][1]}</p>
    <p>atau</p>
    <p>${daftar_rumus[selected[1].value][2]}</p>`;
    penjelasan.append(div);
    console.log(div)
}
// mengubah fungsi tombol enter 
window.addEventListener("keydown",(key)=>{
    if(key.code == "Enter"){
        hapus();
        key.preventDefault()
        konversi()
    }if(key.code == "sent!"){
        hapus();
        key.preventDefault()
        konversi()
    }if(key.which == 13){
        hapus();
        key.preventDefault()
        konversi()
    }
})
nilai_awal.addEventListener("keydown",(key)=>{
    if(key.code == "Enter"){
        hapus();
        key.preventDefault()
        konversi()
    }if(key.code == "sent!"){
        hapus();
        key.preventDefault()
        konversi()
    }if(key.which == 13){
        hapus();
        key.preventDefault()
        konversi()
    }
})
// variabel daftar rumus 
const daftar_rumus= {
    "Fahrenheit": [
        "Suhu S dalam derajat Fahrenheit (&deg;F) sama dengan suhu S dalam derajat Celsius (&deg;C) kali 9/5 tambah 32",
        "S<sub>(&deg;F )</sub> = (S<sub>(&deg;C)</sub> x 9/5) + 32",
        "S<sub>(&deg;F )</sub> = (S<sub>(&deg;C)</sub> x 1.8) + 32"
    ],
    "Celsius":[
        "Suhu S dalam derajat Celsius (&deg;C) sama dengan suhu S dalam derajat Fahrenheit (&deg;F) dikurang 32 kali 5/9",
        "S<sub>(&deg;C )</sub> = (S<sub>(&deg;F)</sub> - 32) x 5/9",
        "S<sub>(&deg;C )</sub> = (S<sub>(&deg;F)</sub> - 32) / 1.8"
    ]
}