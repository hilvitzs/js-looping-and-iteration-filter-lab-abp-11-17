// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

// const fuzzyMatch = (drivers, string) => {
//   return drivers.filter(driver => {
//     let splitDriver = driver.split('');
//
//     let splitString = string.split('');
//
//     return splitDriver[0] === splitString[0];
//   })
// }

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
      console.log(driverName.slice(0, lengthOfName));
  });
}

function matchName(drivers, string) {
  return drivers.filter(function(driver) {
    return driver.name === string
  })
}
