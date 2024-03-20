function getEle(selector) {
    return document.querySelector(selector);
  }


  function saveLocalStorage(dsnv) {
    var dataJson = JSON.stringify(dsnv);
    localStorage.setItem("DSNV_LOCAL", dataJson);
  }