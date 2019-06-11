/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */

let doubleArray = function(arr) {
  let double = [];
  for(let i = 0; i < arr.length; i++) {
    double.push(arr[i] * 2);
  }
  return double;
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */

let sumArrays = function(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */

let stringCount = function(str) {
  let length = str.length;
  return length;
};


/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */

let arrayLength = function(arr) {
  let length = arr.length;
  return length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */

let countAll = function(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */

let countStrings = function(arr) {
  let length  = [];
  for(let i = 0; i < arr.length; i++) {
    length.push(arr[i].length);
  }
  return length;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */

let countAllStrings = function(arr) {
  let sum  = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i].length;
  }
  return sum;
};

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */

let convertToArray = function(obj) {
  let arr = [];
  for(let key in obj) {
    arr.push(obj[key])
  }
  return arr
};

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */

let objectSize = function(obj) {
  let length = Object.keys(obj).length;
  return length;
};

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */

let createZeroFilledArray = function(num) {
  let arr = [];
  for(let i = 0; i < num; i++) {
    arr.push(0);
  }
  return arr;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */

let poppedArray= function(arr) {
  arr.pop();
  return arr;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */

let splitString = function(str) {
  return str.split('');
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
let lengthOfLast = function(arr) {
  let str = arr.pop().length;
  return str;

};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */

let sumBelowTen = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < 10) {
      sum += arr[i];
    }
  }
  return sum;
};

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */

let moreThanTenLetters = function(arr) {
  let ele = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].length > 10) {
      ele += 1;
    }
  }
  return ele;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */

let multiplyAll = function(arr) {
  let result = 1;
  for(let i = 0; i <arr.length; i++) {
    result *= arr[i];
  }
  return result;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */

let sumAllPositive = function(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */

let stringCountBelowThree = function(arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length < 4) {
      result += 1;
    }
  }
  return result;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
let countObjects = function(arr) {
  return arr.length;

};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

let getObjectKeys = function(obj) {
  let result = [];
  for(let key in obj) {
    result.push(key)
  }
  return result;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */

let getObjectValues = function(obj) {
  let result = [];
  for(let key in obj) {
    result.push(obj[key])
  }
  return result;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */

let makeObject = function(key, val) {
  let obj = {};
  obj[key] = val;
  return obj;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */

let makeObjectReverse = function(key, val) {
  let obj = {};
  obj[val] = key;
  return obj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */

let tupleToObject = function(arr) {
  let obj = {};
  obj[arr[0]] = arr[1];
  return obj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */

let tupleToObjectReverse = function(arr) {
  let obj = {};
  obj[arr[1]] = arr[0];
  return obj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */

let strToKeys = function(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  return obj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */

let getValues = function(obj) {
  let arr = [];
  for(let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */

let getKeys = function(obj) {
  let arr = [];
  for(let key in obj) {
    arr.push(key)
  }
  return arr;
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */

 let objectToArray = function(obj) {
   let arr = [];
   for(let key in obj) {
    let tuple = [];
    tuple[0] = key;
    tuple[1] = obj[key];
    arr.push(tuple);  
  }
  return arr;
 };

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */

let arrayToObject = function(arr) {
  let obj = {};
  for(let i = 0; i <arr.length; i++) {
    obj[arr[i]] = false;
  }
  return obj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

let arraysToObject = function(arr1, arr2) {
  let obj = {};
  for(let i = 0; i <arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */

let objectsToTuples = function(obj1, obj2) {
  let arr = [];
  for(key in obj1) {
    let tuple = [key, obj1[key]];
    arr.push(tuple);
  }
  for(key in obj2) {
    let tuple = [key, obj2[key]];
    arr.push(tuple);
  }
  return arr;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */

let mapArrayValues = function(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  return obj;
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */

let mapStringCounts = function(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 5) {
      obj[arr[i]] = true;
    } else {
      obj[arr[i]] = false;
    }
  }
  return obj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */

let arrayToObjectNums = function(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i ++) {
    obj[arr[i]] = true;
  }
  return obj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */

let stringToKeys = function(str) {
  let obj = {};
  for(let i = 0; i <str.length; i++) {
    obj[str[i]] = true;
  }
  return obj;
};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */

let charCountMap = function(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++) {
    obj[str[i]] = str[i].length;
  }
  return obj;
};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {Array}
 * @return {Object}
 */
let frequencyMap = function(str) {
  let obj = {};

};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {Array}
 * @return {Object}
 */
let tupleConvertToObject = function(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i++) {
    obj[arr[i][0] = arr[i][1]];
  }
  return obj;
};



module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: null,
  tupleConvertToObject: tupleConvertToObject
}
