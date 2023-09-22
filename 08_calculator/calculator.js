const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(nums) {
	let res = 0;
  nums.forEach(s => res += s);
  return res;
};

const multiply = function(nums) {
 let res = 1;
  nums.forEach(m => res*=m);
  return res;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (n<=1) return 1;
  let res = 1;
  for (let i=2;i<=n;i++) res *= i;
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
