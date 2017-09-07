  /* 
   * 属性名驼峰互转
   */
  function lineAndHumpTransfer(str) {
    if (!str) {
      return false;
    }
    var strArr = str.split('');
    var hasLine = str.indexOf('-') > -1;
    // console.log(hasLine);
    for (var index = 0; index < strArr.length; index++) {
      var element = strArr[index];
      if (element === '-') {
        // console.log(element);
        strArr[index + 1] = strArr[index + 1].toUpperCase();
      } else if (/^[A-Z]/.test(element) && !hasLine) {
        strArr[index] = '-' + element.toLowerCase();
      }
    }
    if (hasLine) {
      return strArr.join('').replace(/-/g, '');
    }
    return strArr.join('');
  }