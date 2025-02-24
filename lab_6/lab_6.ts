import { Transport } from './transport';

// Создание владельца
const owner = new Transport.OwnerImpl(
  "Иванов",
  "Петр",
  "Сергеевич",
  new Date(1990, 5, 15),
  Transport.DocumentType.Passport,
  "4507",
  "123456"
);

// Создание автомобиля
const car = new Transport.CarImpl(
  "Toyota",
  "Camry",
  2022,
  "1HGBH41JXMN109186",
  "А001АА77",
  owner,
  Transport.BodyType.Sedan,
  Transport.CarClass.Luxury
);

// Проверка декораторов
console.log('1. Проверка декоратора метода:');
console.log(car.getFullInfo()); // TOYOTA CAMRY, 2022, 1HGBH41JXMN109186

console.log('\n2. Проверка декоратора класса:');
try {
  (Transport.CarImpl.prototype as any).hack = 'HACK ATTEMPT';
  console.log('Изменения прототипа прошли успешно!');
} catch (e) {
  console.log('Ошибка при изменении прототипа:', (e as Error).message);
}

console.log('\n3. Общая информация:');
car.printVehicleInfo();
owner.printInfo();