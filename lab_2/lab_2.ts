//1) Вариант No1. Реализовать метод, возвращающий максимальное
//число из массива вещественных чисел
function findMaxNumber(array: number[]): number {
    if (array.length === 0) {
        throw new Error("Array is empty");
    }

    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}


// 2) Вариант No1. Реализовать метод, возвращающий флаг наличия хотя
// бы одного отрицательного числа в матрице целых чисел

function hasNegativeNumber(matrix: number[][]): boolean {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < 0) {
                return true;
            }
        }
    }
    return false;
}


// 3) Вариант No 1Создайте кортеж, который может содержать только 3
// числовых значения.
// Реализуйте метод, возвращающий сумму этих числовых значений.

const concatenate = (tup: [number, number, number] ) => {
    return tup[0] +  tup[1]  + tup[2];
}


// 3)Вариант No1. Создайте тип перечисление для типов мячей для
// различных видов спортивных игр. Выведите какой-либо тип мяча в
// консоль.

enum BallType {
    Football = "Football",
    Basketball = "Basketball",
    Tennis = "Tennis",
}


//4) Реализуйте метод, который будет выводить информацию в
// консоль о создаваемом объекте типа Cat или Dog, применяя
// Обобщенный тип, ограниченный типом Pet.

class Pet {
    name: string = 'Some pet';
    age: number = -1;

    speak(): string {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;

    speak(): string {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak(): string {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log('')
    console.log('Name: ', pet.name);
    console.log('Age :',  pet.age);
    console.log('Speak: ', pet.speak());
    if (pet instanceof Dog) {
        console.log("Label:", pet.label);
    }
}

const Dog_1 = new Dog();
const Cat_1 = new Cat();

printPetInfo(Dog_1);
printPetInfo(Cat_1);


// Создайте тип с применением перечисления из 3го задания (для
// использования его в качестве типа поля, для некоторых случаев
// возможно его использование при реализации массива). Добавьте
// собственные поля стандартных типов, корректно характеризующие ту
// или иную предметную область, совпадающую с вашим типом
// перечисления. Создайте объект на основе вашего типа и выведите его в
// консоль в формате JSON.

type Ball = {
    type: BallType; 
    firm: string;
    dateOfManifacture: number;
    description: string;
  };

  const Jabulani: Ball  = {
    type: BallType.Football,
    firm: "Adidas",
    dateOfManifacture: 2010,
    description: "Official ball of the 2010 World Cup in South Africa."
  };

  const FrenchOpen: Ball  = {
    type: BallType.Tennis,
    firm: "Babolat",
    dateOfManifacture: 2011,
    description: "Used for the Roland Garros tournament. Designed specifically for clay courts. Painted in a characteristic yellow color"
  };

const JabulaniJSON = JSON.stringify(Jabulani);
console.log(JabulaniJSON);

const FrenchOpenJSON = JSON.stringify(FrenchOpen);
console.log(FrenchOpenJSON);