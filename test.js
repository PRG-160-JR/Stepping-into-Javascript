  function determinePrime (a){
    for(var i = 2; i < a; i++)
    if(a % i === 0) return false;
  return a !== 1;
  }

  var myResult = determinePrime(3);
  if (myResult === false){
    document.write("this is not a prime number");
  } else if (myResult === true){
    document.write("this is a prime number");
  } else{
    document.write("this is not a valid number");
  }
