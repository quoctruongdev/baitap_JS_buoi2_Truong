function tinhTB(){
    var num1 = document.getElementById("so1").value;
    var num2 = document.getElementById("so2").value;
    var num3 = document.getElementById("so3").value;
    var num4 = document.getElementById("so4").value;
    var num5 = document.getElementById("so5").value;
    var giatriTB = (+num1 + +num2 + +num3 + +num4 + +num5)/5;
    console.log(giatriTB);
    var spanN= document.createElement("span")
    spanN.innerHTML = "Giá trị trung bình của 5 số trên: " + giatriTB.toFixed(1);
    var soTB = document.getElementById("giatriTB");
    soTB.innerHTML = "";
    soTB.appendChild(spanN);
}