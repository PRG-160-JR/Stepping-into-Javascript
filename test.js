  function determinePrime (a){
    for(var i = 2; i < a; i++)
    if(a % i === 0) return false;
  return a !== 1;
  }

  var myResult = determinePrime(4);
  console.log("it is " + myResult + " that this is a prime number");
