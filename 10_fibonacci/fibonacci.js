const fibonacci = function(n) {
    n = parseInt(n);
    if (n<=0) return 'OOPS';
    let fibo = [1,1];
    for (let i=2; i<=n; i++) fibo.push(fibo[i-1]+fibo[i-2]);
    // console.log(fibo);
    return fibo[n-1];
};

// Do not edit below this line
module.exports = fibonacci;