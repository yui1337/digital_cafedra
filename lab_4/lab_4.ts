import { Transport } from './transport';

// Создание владельца
const owner = new Transport.OwnerImpl(
  "Иванов",
  "Петр",
  "Сергеевич",
  new Date(1990, 5, 15),
  Transport.OwnerDocumentType.Passport,
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

// Создание мотоцикла
const motorbike = new Transport.MotorbikeImpl(
  "Harley-Davidson",
  "Street 750",
  2023,
  "1HD1KBM15DB123456",
  "М777ММ77",
  owner,
  "Стальная дуплексная",
  false
);

// Создание хранилища
const storage = new Transport.VehicleStorageImpl<Transport.Vehicle>(
  new Date(),
  [car, motorbike]
);

// Вывод информации
console.log('\n=== Все транспортные средства ===');
storage.vehicles.forEach(vehicle => {
  vehicle.printVehicleInfo();
  console.log('----------------------');
});

console.log('\n=== Информация о владельце ===');
owner.printInfo();