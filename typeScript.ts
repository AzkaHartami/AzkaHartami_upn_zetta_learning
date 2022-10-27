function argumentsDay1(a: string, b: number, c: number):string
{
    return a.slice(b, c);
}

const a = "Learning Typescript is different than Javascript";
const b = 9;
const c = 19;

console.log(argumentsDay1(a, b, c));