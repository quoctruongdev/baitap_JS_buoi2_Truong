const LUONG_CO_BAN = 100000;

function tinhLuong(){
    var soNgaylam = document.getElementById("soNgayLam").value;

    var soLuong = LUONG_CO_BAN * +soNgaylam;

    var spanEl = document.createElement("span");

    spanEl.innerHTML = "số tiền lương: " +soLuong;

    var soLuongEl = document.getElementById("soLuong");
    soLuongEl.innerHTML="";
    soLuongEl.appendChild(spanEl);

}