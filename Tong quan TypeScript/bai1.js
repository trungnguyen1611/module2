var a = 0;
var b = 1;
var sum = 1;
var arr = [0, 1];
var i = 0;
while (i < 10) {
    var c = a + b;
    sum += c;
    a = b;
    b = c;
    arr.push(c);
    i++;
}
console.log(sum);
console.log(arr);
