const tocelcius = document.getElementById("tocelcius")
const tofahrenheit = document.getElementById("tofahrenheit")
const input = document.getElementById("input")
const hasil = document.getElementById("hasil")
const hasil2 = document.getElementById("hasil2")


function toggle(){

    if(tocelcius.checked){
        temp = Number(input.value);
        temp = (temp - 32) * (5/9)
        hasil.textContent = temp.toFixed(1) + "C";
        hasil2.textContent = "Tuh hasil nya";
    }else if(tofahrenheit.checked){
        temp = Number(input.value);
        temp = temp * 9 / 5 + 32;
        hasil.textContent = temp.toFixed(1) + "F";
        hasil2.textContent = "Tuh hasil nya";
    }else{
        hasil.textContent ="Mohon Masukan Data Nya"
    }
}