const suhu1 = document.querySelector(".suhu_1");
const suhu2 = document.querySelector(".suhu_2");
const btns = document.querySelectorAll(".btn");
const selected = document.querySelectorAll("select");
const nilai_awal = document.querySelector("#suhu_1_nilai");
const hasil = document.querySelector(".hasil");
const error = document.querySelector(".error");

btns.forEach(btn => {
    btn.addEventListener("click",()=>{
        suhu2.innerHTML = "";
        error.innerHTML = "";
        hasil.innerHTML = "";
        if(Number(nilai_awal.value) > 0){
            let p = document.createElement("p");
            let span = document.createElement("span");
            span.innerHTML = `${Number(nilai_awal.value) * 9/5 +32} &deg;Fahrenhit`;
            p.innerHTML = `Cara Kalkulasi:<br> ${Number(nilai_awal.value)}&deg;C x 9/5 + 32 = ${Number(nilai_awal.value) * 9/5 +32}&deg;F`;

            suhu2.append(span);
            hasil.append(p);
        }else{
            let span = document.createElement("span");
            span.innerText = `*masukkan angka`;
            error.append(span);
        }
        // console.log(suhu2)
    })
});