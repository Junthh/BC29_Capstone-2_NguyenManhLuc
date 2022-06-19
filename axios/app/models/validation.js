function Validation() {
    this.kiemTraSP = function (value, mess1, mess2, list) {
        if (value.length >= 1) {
            getEle('tbTenSP').innerHTML = "";
            return true;
        } else {
            getEle('tbTenSP').innerHTML = mess1;
            getEle('tbTenSP').style.display = "block";
            return false;
        }
    }

    this.kiemTraGia = function (value, mess1, mess2) {
        var letter = /^[0-9]+$/;
        if (value.match(letter)) {
            getEle('tbGiaSP').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbGiaSP').innerHTML = mess1;
            getEle('tbGiaSP').style.display = "block";
            return false;
        } else {
            getEle('tbGiaSP').innerHTML = mess2;
            getEle('tbGiaSP').style.display = "block";
            return false;
        }
    }

    this.kiemTraHinhAnh = function (value, mess1) {
        if (value === "") {
            getEle('tbHinhAnh').innerHTML = mess1;
            getEle('tbHinhAnh').style.display = "block";
            return false;
        } else {
            getEle('tbHinhAnh').innerHTML = "";
            return true;
        }
    }

    this.kiemTraMoTa = function (value, mess1, mess2) {
        if (value.length >= 1 && value.length <= 60) {
            getEle('tbMoTa').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbMoTa').innerHTML = mess1;
            getEle('tbMoTa').style.display = "block";
            return false;
        } else {
            getEle('tbMoTa').innerHTML = mess2;
            getEle('tbMoTa').style.display = "block";
            return false;
        }
    }

    this.kiemTraLoaiSP = function (value, mess) {
        if (value.length >= 1) {
            getEle('tbLoaiSP').innerHTML = "";
            return true;
        }
        getEle('tbLoaiSP').innerHTML = mess;
        getEle('tbLoaiSP').style.display = "block";
        return false;
    }

    this.kiemTraRong = function (input, value,mess){
        if (value.length >= 1) {
            getEle(input).innerHTML = "";
            return true;
        }
        getEle(input).innerHTML = mess;
        getEle(input).style.display = "block";
        return false;
    }
}