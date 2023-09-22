const palindromes = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return s==s.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
