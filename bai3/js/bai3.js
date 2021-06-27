const tygia = 23000;
function tinhTien() {
    var soDola = document.getElementById("soUSD").value;
    var tongSoTien = tygia * +soDola;
    var spanEl = document.createElement("span");
    spanEl.innerHTML = "Số tiền sau khi quy đổi: " + tongSoTien + " VND";
    var pEl = document.createElement("p");
    pEl.innerHTML = "Tỷ giá giá USD hiện tại: " + tygia +" VND"
    var tongTienEL = document.getElementById("soTien");
    tongTienEL.innerHTML=""
    tongTienEL.appendChild(pEl);
    tongTienEL.appendChild(spanEl);
}