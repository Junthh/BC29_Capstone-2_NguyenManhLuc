function Product(_id, _tenSP, _gia, _hinhAnh,  _manHinh, _cameraSau, _cameraTruoc, _moTa, _Loai){
    this.id = _id;
    this.name = _tenSP;
    this.price = _gia;
    this.img = _hinhAnh;
    this.screen = _manHinh
    this.backCamera = _cameraSau;
    this.frontCamera = _cameraTruoc;
    this.desc = _moTa;
    this.type = _Loai;
}