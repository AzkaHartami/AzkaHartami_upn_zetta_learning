let case1 = [1, 'data', '3', 'result']
let case2 = ['Bejo', 'has', '4', 'sport', 'car']

function combinator(array: (string | number)[]): string {
    let result: string = "";
    array.map((array) => {
      result = result + " " + array;
    });
    return result;
  }


console.log(combinator(case1));
console.log(combinator(case2));