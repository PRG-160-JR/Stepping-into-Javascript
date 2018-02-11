  function getDifference (a,b){

    if (a > b){

      var difference = (a - b);

    } else{

      var difference = (b - a);

    }

    console.log(difference);
    return difference;
  }

  var myResult = getDifference (10,1);
  console.log("the difference between the two numbers is " + myResult);
