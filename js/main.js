// Mảng chứa danh sách nhân viên
var DSNV = [];

var jsonData = localStorage.getItem("DSNV_LOCAL");
if (jsonData !== null) {
  jsonData = JSON.parse(jsonData);

  DSNV = jsonData.map(function (item) {
    return new NhanVien(
      item.taiKhoan,
      item.ten,
      item.email,
      item.matKhau,
      item.ngayLam,
      item.luongCB,
      item.chucVu,
      item.gioLam
    );
  });

  renderDSNV(DSNV);
}

//Xóa thông báo thẻ span
getEle("#btnThem").onclick = function() {
  var xoaThongBao = document.querySelectorAll(".sp-thongbao");
    for (var i = 0; i < xoaThongBao.length; i++) {
      xoaThongBao[i].textContent = "";
    }
}

// Thêm nhân viên
getEle("#btnThemNV").onclick = function() {
    var nv = layThongTinTuForm();

    // Kiểm tra tài khoản
    var isValid = kiemTraRong(nv.taiKhoan, "#tbTKNV", "Tài khoản nhân viên không được để trống và chỉ được nhập số.") && kiemTraSo(nv.taiKhoan, "#tbTKNV", "Tài khoản nhân viên chỉ được nhập số.") && kiemTraTrung(nv.taiKhoan, DSNV, "#tbTKNV", "Tài khoản nhân viên đã tồn tại.") && kiemTraTaiKhoan(nv.taiKhoan, "#tbTKNV", "Tài khoản phải có từ 4-6 ký số.");

    // Kiểm tra tên nhân viên
    isValid &= kiemTraRong(nv.ten, "#tbTen", "Tên nhân viên không được để trống.") && kiemTraChuoi(nv.ten, "#tbTen", "Tên nhân viên không được nhập số.");

    // Kiểm tra email
    isValid &= kiemTraRong(nv.email, "#tbEmail", "Email không được để trống.") && kiemTraEmail (nv.email, "#tbEmail", "Email không đúng định dạng.");

    // Kiểm tra mật khẩu
    isValid &= kiemTraRong(nv.matKhau, "#tbMatKhau", "Mật khẩu không được để trống.") && kiemTraMatKhau(nv.matKhau, "#tbMatKhau", "Mật khẩu phải có 6-10 ký tự. Trong đó phải có ít nhất 1 số, 1 ký tự in hoa, 1 ký tự đặc biệt.");

    // Kiểm tra ngày làm
    isValid &= kiemTraRong(nv.ngayLam, "#tbNgay", "Ngày làm không được để trống.");

    // Kiểm tra lương CB
    isValid &= kiemTraLuong(nv.luongCB, "#tbLuongCB", "Lương phải từ 1.000.000 đến 20.000.000");

    // Kiểm tra chức vụ 
    isValid &= kiemTraChucVu(nv.chucVu, "#tbChucVu", "Vui lòng chọn chức vụ hợp lệ.");

    // Kiểm tra số giờ làm 
    isValid &= kiemTraGioLam(nv.gioLam, "#tbGiolam", "Vui lòng nhập số giờ làm từ 80 đến 200 giờ.");

    if (isValid) {
      DSNV.push(nv);
      saveLocalStorage(DSNV);
      renderDSNV(DSNV);
      resetForm();
    }
    
}


// Xóa nhân viên
function xoaNV(taiKhoan) {
    var viTri = -1;
    for (var i = 0; i < DSNV.length; i++) {
      if (DSNV[i].taiKhoan === taiKhoan) {
        viTri = i;
      }
    }
  
    if (viTri !== -1) {
      DSNV.splice(viTri, 1);
      saveLocalStorage(DSNV);
      renderDSNV(DSNV);
    }
  }
  

  // Chỉnh sửa thông tin nhân viên
  function suaNV(taiKhoan) {
    var xoaThongBao = document.querySelectorAll(".sp-thongbao");
    for (var i = 0; i < xoaThongBao.length; i++) {
      xoaThongBao[i].textContent = "";
    }
    var viTri = DSNV.findIndex(function (item) {
      return item.taiKhoan === taiKhoan;
    });

    var nv = DSNV[viTri];
    getEle("#tknv").value = nv.taiKhoan;
    getEle("#tknv").readOnly = true;
    getEle("#name").value = nv.ten;
    getEle("#email").value = nv.email;
    getEle("#password").value = nv.matKhau;
    getEle("#datepicker").value = nv.ngayLam;
    getEle("#luongCB").value = nv.luongCB;
    getEle("#chucvu").value = nv.chucVu;
    getEle("#gioLam").value = nv.gioLam;
  }


  // Cập nhật nhân viên
  getEle("#btnCapNhat").onclick = function() {
    var nv = layThongTinTuForm();
    var viTri = DSNV.findIndex(function (item) {
      return item.taiKhoan === nv.taiKhoan;
    });
  
    DSNV[viTri] = nv;
    // Kiểm tra tài khoản
    var isValid = kiemTraRong(nv.taiKhoan, "#tbTKNV", "Tài khoản nhân viên không được để trống và chỉ được nhập số.") && kiemTraSo(nv.taiKhoan, "#tbTKNV", "Tài khoản nhân viên chỉ được nhập số.") && kiemTraTaiKhoan(nv.taiKhoan, "#tbTKNV", "Tài khoản phải có từ 4-6 ký số.");

    // Kiểm tra tên nhân viên
    isValid &= kiemTraRong(nv.ten, "#tbTen", "Tên nhân viên không được để trống.") && kiemTraChuoi(nv.ten, "#tbTen", "Tên nhân viên không được nhập số.");

    // Kiểm tra email
    isValid &= kiemTraRong(nv.email, "#tbEmail", "Email không được để trống.") && kiemTraEmail (nv.email, "#tbEmail", "Email không đúng định dạng.");

    // Kiểm tra mật khẩu
    isValid &= kiemTraRong(nv.matKhau, "#tbMatKhau", "Mật khẩu không được để trống.") && kiemTraMatKhau(nv.matKhau, "#tbMatKhau", "Mật khẩu phải có 6-10 ký tự. Trong đó phải có ít nhất 1 số, 1 ký tự in hoa, 1 ký tự đặc biệt.");

    // Kiểm tra ngày làm
    isValid &= kiemTraRong(nv.ngayLam, "#tbNgay", "Ngày làm không được để trống.");

    // Kiểm tra lương CB
    isValid &= kiemTraLuong(nv.luongCB, "#tbLuongCB", "Lương phải từ 1.000.000 đến 20.000.000");

    // Kiểm tra chức vụ 
    isValid &= kiemTraChucVu(nv.chucVu, "#tbChucVu", "Vui lòng chọn chức vụ hợp lệ.");

    // Kiểm tra số giờ làm 
    isValid &= kiemTraGioLam(nv.gioLam, "#tbGiolam", "Vui lòng nhập số giờ làm từ 80 đến 200 giờ.");
  
    if (isValid) {
    saveLocalStorage(DSNV);
    renderDSNV(DSNV);
    getEle("#tknv").readOnly = false;
    resetForm();
    }
  }

  // Xóa form
  function resetForm() {
    getEle("#formEdit").reset();
  }

  
  // Tìm nhân viên
getEle("#btnTimNV").onclick = function () {
  var textSearch = getEle("#searchName").value.trim()?.toLowerCase();
  var resultSearch = [];

  if (textSearch.length > 0) {
    resultSearch = DSNV.filter(function (nv) {
      return nv.xepLoaiNhanVien().toLowerCase().includes(textSearch);
    });

    renderDSNV(resultSearch);
  } else {
    renderDSNV(DSNV);
  }
};