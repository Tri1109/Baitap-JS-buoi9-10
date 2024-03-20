function layThongTinTuForm() {
    var taiKhoan = getEle("#tknv").value;
    var ten = getEle("#name").value;
    var email = getEle("#email").value;
    var matKhau = getEle("#password").value;
    var ngayLam = getEle("#datepicker").value;
    var luongCB = +getEle("#luongCB").value;
    var chucVu = getEle("#chucvu").value;
    var gioLam = +getEle("#gioLam").value;
  
    return new NhanVien(
      taiKhoan,
      ten,
      email,
      matKhau,
      ngayLam,
      luongCB,
      chucVu,
      gioLam
    );
  }

  function renderDSNV(dsnv) {
    var contentHTML = "";
  
    for (var i = 0; i < dsnv.length; i++) {
      var nv = dsnv[i];
  
      var contentTr = `
          <tr>
              <td>${nv.taiKhoan}</td>
              <td>${nv.ten}</td>
              <td>${nv.email}</td>
              <td>${nv.ngayLam}</td>
              <td>${nv.chucVu}</td>
              <td>${nv.tinhTongLuong()}</td>
              <td>${nv.xepLoaiNhanVien()}</td>
              <td>
                  <button class="btn btn-warning" onclick="suaNV('${
                    nv.taiKhoan
                  }')">Edit</button>
                  <button class="btn btn-danger" onclick="xoaNV('${
                    nv.taiKhoan
                  }')">Del</button>
              </td>
          </tr>
      `;
  
      contentHTML += contentTr;
    }
  
    getEle("#tableDanhSach").innerHTML = contentHTML;
  }