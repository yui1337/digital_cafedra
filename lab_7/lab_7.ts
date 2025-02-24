import { Transport } from './transport';

// Создание владельцев
const owner1 = new Transport.OwnerImpl(
  "Иванов",
  "Иван",
  "Иванович",
  new Date(1990, 4, 15), // 15 мая 1990
  Transport.DocumentType.Passport,
  "4507",
  "123456"
);

const owner2 = new Transport.OwnerImpl(
  "Петров",
  "Петр",
  "Петрович",
  new Date(1985, 8, 22), // 22 сентября 1985
  Transport.DocumentType.DriverLicense,
  "7512",
  "654321"
);

// Создание автомобилей
const car1 = new Transport.CarImpl(
  "Volvo",
  "XC90",
  2020,
  "YV1CM145XCV411111",
  "А111АА77",
  owner1,
  Transport.BodyType.SUV,
  Transport.CarClass.Luxury
);

const car2 = new Transport.CarImpl(
  "Audi",
  "A6",
  2021,
  "WAUZZZ4GXDN111111",
  "В222ВВ77",
  owner2,
  Transport.BodyType.Sedan,
  Transport.CarClass.Sports
);

// Создание мотоцикла
const motorbike = new Transport.MotorbikeImpl(
  "Harley-Davidson",
  "Street 750",
  2019,
  "1HD1KBM15DB123456",
  "М777ММ77",
  owner1,
  "Стальная дуплексная",
  false
);


const storage = new Transport.VehicleStorageImpl<Transport.Vehicle>(
  new Date(),
  [car1, car2, motorbike]
);

console.log("1. Проверка декоратора метода:");
console.log(car1.getFullInfo()); // VOLVO XC90, 2020, YV1CM145XCV411111


console.log("\n2. Проверка декоратора класса:");
try {
  (Transport.CarImpl.prototype as any).hack = "Взлом!";
  console.log("Изменение прототипа прошло успешно!");
} catch (e) {
  console.log(`Ошибка блокировки прототипа: ${(e as Error).message}`);
}

console.log("\n3. Сортировка по марке (А-Я):");
const sortedVehicles = storage.sortByBrand();
sortedVehicles.forEach(v => console.log(`- ${v.brand} ${v.model}`));

console.log("\n4. Фильтрация по фамилии 'ИВАНОВ':");
const filteredVehicles = storage.filterByOwnerLastName('ИВАНОВ');
filteredVehicles.forEach(v => {
  console.log(`- ${v.brand} ${v.model}`);
  console.log(`  Владелец: ${v.owner.lastName} ${v.owner.firstName}`);
});

console.log("\n5. Детали транспортных средств:");
storage.getAll().forEach(v => {
  const details = v.getDetails();
  console.log(
    `VIN: ${details.vin}\n` +
    `Владелец: ${details.ownerFullName}\n` +
    `Рег. номер: ${details.regNumber}\n` +
    `-------------------------`
  );
});

console.log("\n6. Полная информация о первом автомобиле:");
car1.printVehicleInfo();
owner1.printInfo();