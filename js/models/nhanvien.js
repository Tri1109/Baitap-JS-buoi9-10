function NhanVien(
    _taiKhoan,
    _ten,
    _email,
    _matKhau,
    _ngayLam,
    _luongCB,
    _chucVu,
    _gioLam
  ) {
    this.taiKhoan = _taiKhoan;
    this.ten = _ten;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
  
    this.tinhTongLuong = function () {
        let tongLuong = 0;
        if (this.chucVu === "Sếp") {
            tongLuong = this.luongCB * 3;
        } else if (this.chucVu === "Trưởng phòng") {
            tongLuong = this.luongCB * 2;
        } else {
            tongLuong = this.luongCB;
        }
        return tongLuong;
    }

    this.xepLoaiNhanVien = function () {
        if (this.gioLam >= 192) {
            return "Xuất sắc";
        } else if (this.gioLam >= 176) {
            return "Giỏi";
        } else if (this.gioLam >= 160) {
            return "Khá";
        } else {
            return "Trung bình";
        }
    }
    
  }
  