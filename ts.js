var case1 = [1, 'data', '3', 'result'];
var case2 = ['Bejo', 'has', '4', 'sport', 'car'];
function argumentDay2(array) {
    var result = "";
    array.map(function (array) {
        result = result + " " + array;
    });
    return result;
}
console.log(argumentDay2(case1));
console.log(argumentDay2(case2));
