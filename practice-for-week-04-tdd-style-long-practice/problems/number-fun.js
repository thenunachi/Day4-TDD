function returnsThree(num) {
  if(num === 3)return num;
}

function reciprocal(n) {
if(n<1 || n> 1,000,000 )throw new TypeError("n must be greater than 1");
return 1/n
}

module.exports = {
  returnsThree,
  reciprocal
};