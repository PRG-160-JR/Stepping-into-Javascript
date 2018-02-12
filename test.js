  function valueChecker(a){
    var value = a;
    if(value = true){
      return true;
    }else {
      return false;
    }
  }
  var myResult = valueChecker("is this value true?");
  document.log("this value is " + myResult);
