const str:string = "Я делаю первую лабку 18 февраля";
console.log(str, typeof str);

const num:number = 52;
console.log(num, typeof num);

const numbers:number[] = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers);

const user: {name: string; age: number} = { 
    name: "Егор", 
    age: 20 
};
console.log(user, typeof user);

let changeable: string | null = null;
changeable = "Новое значение";
console.log(changeable, typeof changeable)

let tuple: [string, number] = ["Google Pixel", 9];
console.log(tuple, typeof tuple);

let colors: string[] = ["red", "green"];
colors.push("blue");
console.log(colors, typeof colors)