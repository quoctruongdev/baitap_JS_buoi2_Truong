function tinhToan(){
    var numBer = document.getElementById("numBer").value;
    var hangChuc = Math.floor(numBer/10);
    var hangDV = numBer%10;
    var tinhTong = hangChuc + hangDV;
    var tinhTongEl = document.createElement("span");
    tinhTongEl.innerHTML = "Tổng 2 ký số: " + tinhTong;
    var ketQuaEl = document.getElementById("ketQua");
    ketQuaEl.innerHTML=""
    ketQuaEl.appendChild(tinhTongEl)
}
