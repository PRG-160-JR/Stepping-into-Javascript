  function consoleNumber(a){
    var number = a;
    for(var i = 1; i < number; i++){
      if(i !== number){
        console.log(i);
        continue;
      }
      if(i === number){
        break;
      }
    }
    console.log(number);
    return number;
  }
  var myResult = consoleNumber(13);
  console.log("this function has counted to " + myResult);
