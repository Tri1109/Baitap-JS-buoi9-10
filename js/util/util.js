function getEle(selector) {
    return document.querySelector(selector);
  }


  function saveLocalStorage(dsnv) {
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV_LOCAL", dataJson);
  }

  // Thay đổi thuộc tính các nút button
  function handleBtn(id, status) {
    document.querySelector(id).style.display = status;
  }

  // Xóa thông báo validation
  function xoaThongBao(id) {
    var xoaThongBao = document.querySelectorAll(id);
    for (var i = 0; i < xoaThongBao.length; i++) {
      xoaThongBao[i].textContent = "";
    }
  }