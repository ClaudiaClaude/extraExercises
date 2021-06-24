
//  function greeting() {
//     console.log("Hi there, today is a good day to learn JS");
// }
// greeting(); //thats how the function is invoked


// function returnParam(param1, param2) {
//     let result = `This is parameter1: ${param1} and this is parameter2: ${param2}`;;
//     console.log(result);
//  }
//  returnParam("Tesla", "Volvo");
// // This is parameter1: Tesla and this is parameter2: Volvo



// function footToMeter(foot) {
//     var result = foot / 3.281;
//     console.log(result);
//     return result;
// }
// var foot = footToMeter(5);
// console.log(foot + " meters");
// //1.5239256324291375 meters


function calcAge(currentYear, yearOfBirth) {
    return currentYear - yearOfBirth;
    }
     var myAge = calcAge(2021, 1985);
  
  // function CalcAge is called
     console.log(myAge);
  
  // returned value will be stored in var myAge
  // output: 36