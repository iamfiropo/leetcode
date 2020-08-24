var reverse = function (x) {
  const limit = Math.pow(2, 31);
  const reversed = x.toString().split("").reverse().join("");
  return parseInt(reversed) > limit ? 0 : parseInt(reversed) * Math.sign(x);
};

var reverse = function (x) {
  const limit = Math.pow(2, 31);
  let reversed = x.toString().split("");
  let result = "";

  for (let i = reversed.length - 1; i >= 0; i--) {
    result += reversed[i];
  }

  return parseInt(result) > limit ? 0 : parseInt(result) * Math.sign(x);
};
