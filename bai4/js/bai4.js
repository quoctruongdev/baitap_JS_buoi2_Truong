function chuVi (){
    var cRong = document.getElementById("chieuRong").value;
    var cDai = document.getElementById("chieuDai").value;
    var cVi = (+cRong + +cDai )*2;
    var reSult = document.getElementById("ketQua");
    reSult.innerHTML = ""
    var pChuvi = document.createElement("p");
    pChuvi.innerHTML = "Chu vi hình chữ nhật: " + cVi +" cm"
    var reSult = document.getElementById("ketQua");
    reSult.appendChild(pChuvi);
}
function dienTich (){
    var cRong = document.getElementById("chieuRong").value;
    var cDai = document.getElementById("chieuDai").value;
    var dTich = +cRong * +cDai;
    var reSult = document.getElementById("ketQua");
    reSult.innerHTML = ""
    var pDientich = document.createElement("p");
    pDientich.innerHTML = "Diện tích hình chữ nhật: " + dTich +" cm2"
    var reSult = document.getElementById("ketQua");
    reSult.appendChild(pDientich);
    
}