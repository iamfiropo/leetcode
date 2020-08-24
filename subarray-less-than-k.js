const subsets = function (array, k) {
  let ret = [],
    index = 0;
  if (array.indexOf(k) == -1) {
    return ret;
  } else {
    index = array.indexOf(k);
  }
  let newArray = array.slice(0, index);

  const permute = function (arr, index) {
    if (arr.length != 0) ret.push(arr);

    for (let i = index; i < newArray.length; ++i) {
      permute([...arr, array[i]], i + 1);
    }
  };

  permute([], 0);
  return ret;
};

var k = 10;
var arr = [
  1,
  10,
  1,
  0,
  12,
  1,
  1,
  0,
  12,
  1,
  0,
  1,
  11,
  1,
  0,
  12,
  0,
  0,
  1,
  0,
  12,
  1,
  0,
  1,
];
console.log(subsets(arr, k));

let results = [];
let currentSubArray = [];
let isReset = false;
for (let index = 0; index < arr.length; ++index) {
  if (arr[index] < k) {
    currentSubArray.push(arr[index]);
    if (index === arr.length - 1) {
      isReset = true;
    }
  } else if (currentSubArray.length) {
    isReset = true;
  }

  if (isReset) {
    results.push(currentSubArray);
    currentSubArray = [];
    isReset = false;
  }
}

let usedKeys = [];
var dedupedSet = results.reduce((acc, r) => {
  const elementKey = JSON.stringify(r);
  if (!usedKeys.includes(elementKey)) {
    usedKeys.push(elementKey);
    acc.push(r);
  }
  return acc;
}, []);

console.log(results);
console.log(dedupedSet);
