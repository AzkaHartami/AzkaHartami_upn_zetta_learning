var case1 = [1, 'data', '3', 'result'];
var case2 = ['Bejo', 'has', '4', 'sport', 'car'];
function combinator(array) {
    var result = "";
    array.map(function (array) {
        result = result + " " + array;
    });
    return result;
}
console.log(combinator(case1));
console.log(combinator(case2));
