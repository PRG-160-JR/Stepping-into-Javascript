  function birthYear(a){
    var age = 2018 - a;
    if(age >= 21){
      return true;
    } else{
      return false;
    }
  }

  var myResult = birthYear(1998);
  if (myResult === false){
    console.log("You are not old enough to drink in PA");
    document.write("You are not old enough to drink in PA");
  } else if (myResult === true){
    console.log("You are old enough to drink in PA");
    document.write("You are old enough to drink in PA");
  } else{
    console.log("this is not a valid age");
    document.write("this is not a valid age");
  }
