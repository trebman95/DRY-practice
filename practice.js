// function multiplyBiggerNumByTwo(num1, num2) {
//   let bigNum;
//   if (num1 > num2) {
//     bigNum = num1;
//     return bigNum * 2;
//   } else {
//     bigNum = num2;
//     return bigNum * 2;
//   }
// }

// function divideBiggerNumByThree(num1, num2) {
//   let bigNum;
//   if (num1 > num2) {
//     bigNum = num1;
//     return bigNum / 3;
//   } else {
//     bigNum = num2;
//     return bigNum / 3;
//   }
// }

// function eatMostTacos(sum1, sum2) {
//   let bigNum;
//   if (sum1 > sum2) {
//     bigNum = sum1;
//     return `I ate ${bigNum} tacos.`;
//   } else {
//     bigNum = sum2;
//     return `I ate ${bigNum} tacos.`;
//   }
// }

// function adoptSmallerDog(weight1, weight2) {
//   let smallDog;
//   if (weight1 < weight2) {
//     smallDog = weight1;
//     return `I adopted a dog that weighs ${smallDog} pounds.`;
//   } else {
//     smallDog = weight2;
//     return `I adopted a dog that weighs ${smallDog} pounds.`;
//   }
// }
// *************************************************************************************************************************//
function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
    // return bigNum * 2;
    //return num1 * 2 // Option 2
  } else {
    bigNum = num2;
    // return bigNum * 2;
    //return num2 * 2 // Option 2
  }
  return bigNum * 2 // Option 1
  // return num1 > num2 ? num1 * 2 : num2 * 2 //Option4
}

function divideBiggerNumByThree(num1, num2) {
  // let bigNum;
  // if (num1 > num2) {
  //   bigNum = num1;
  //   return bigNum / 3;
  // } else {
  //   bigNum = num2;
  //   return bigNum / 3;
  // }
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
  } else {
    bigNum = num2;
  }

  return bigNum / 3

  // return num1 > num2 ? num1 * 2 : num2 / 3 //Option2
}

const findBiggerEl = (x, y) => { //newly added
  return x > y
}

function eatMostTacos(sum1, sum2) {

  // let bigNum;
  // if (sum1 > sum2) {
  //   bigNum = sum1;
  //   return `I ate ${bigNum} tacos.`;
  // } else {
  //   bigNum = sum2;
  //   return `I ate ${bigNum} tacos.`;
  // }



  //return findBiggerEl(sum1, sum2) ? `I ate ${bigNum} tacos.` : `I ate ${bigNum} tacos.` //Option 2
}

const createAdoptionMessage = (weight) => {
  return `I adopted a dog that weighs ${smallDog} pounds.`
}

function adoptSmallerDog(weight1, weight2) {
  let smalldog = weight1 < weight2 ? weight1 : weight2;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog;
  if (weight1 < weight2) {
    smallDog = weight1;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  } else {
    smallDog = weight2;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
