module.exports = function reverse (n) {
    if (n < 0) {
        n = -n;
    } 
    let num =  n.toString().split('').reverse().join('');
    return Number(num);
}
