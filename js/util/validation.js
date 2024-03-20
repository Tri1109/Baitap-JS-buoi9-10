function kiemTraRong(value, idErr, message) {
    if (value.trim() === "") {
      getEle(idErr).innerHTML = message;
      return false;
    } else {
      getEle(idErr).innerHTML = "";
      return true;
    }
  }

  function kiemTraSo(value, idErr, message) {
    const re = /^[0-9]+$/;
  
    var isNumber = re.test(value);
  
    if (isNumber) {
      getEle(idErr).innerHTML = "";
      return true;
    } else {
      getEle(idErr).innerHTML = message;
      return false;
    }
  }


function kiemTraTrung(id, array, idErr, message) {
    var viTri = array.findIndex(function (nv) {
      return nv.taiKhoan === id;
    });
  
    if (viTri != -1) {
      getEle(idErr).innerHTML = message;
      return false;
    } else {
      getEle(idErr).innerHTML = "";
      return true;
    }
  }

  function kiemTraChuoi(value, idErr, message) {
    const re =
      /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêếìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\ ]+$/;
    var isString = re.test(value);
  
    if (isString) {
      getEle(idErr).innerHTML = "";
      return true;
    } else {
      getEle(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraEmail(value, idErr, message) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isEmail = re.test(value);
  
    if (isEmail) {
      getEle(idErr).innerHTML = "";
      return true;
    } else {
      getEle(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraTaiKhoan(value, idErr, message) {
    const re =
      /^\d{4,6}$/;
    var isNumber = re.test(value);
  
    if (isNumber) {
      getEle(idErr).innerHTML = "";
      return true;
    } else {
      getEle(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraMatKhau(value, idErr, message) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    var isPassWord = re.test(value);
  
    if (isPassWord) {
      getEle(idErr).innerHTML = "";
      return true;
    } else {
      getEle(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraLuong(value, idErr, message) {
    var min = 1000000;
    var max = 20000000;
  
    if (value >= min && value <= max) {
      getEle(idErr).innerHTML = "";
      return true;
    } else {
      getEle(idErr).innerHTML = message;
      return false;
    }
  }

  function kiemTraGioLam(value, idErr, message) {
    var min = 80;
    var max = 200;
  
    if (value >= min && value <= max) {
      getEle(idErr).innerHTML = "";
      return true;
    } else {
      getEle(idErr).innerHTML = message;
      return false;
    }
  } 

  function kiemTraChucVu(value, idErr, message) {
    if (value === "Chọn chức vụ") {
      getEle(idErr).innerHTML = message;
      return false;
    } else {
      getEle(idErr).innerHTML = "";
      return true;
    }
  }