// Перечисления
enum OwnerDocumentType {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    Other = "Другой документ"
  }
  
  enum BodyType {
    Sedan = "Седан",
    SUV = "Внедорожник",
    Hatchback = "Хэтчбек",
    Coupe = "Купе"
  }
  
  enum CarClass {
    Economy = "Эконом",
    Luxury = "Люкс",
    Sports = "Спортивный"
  }
  
  // Интерфейс Владелец (Owner)
  interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    documentType: OwnerDocumentType;
    documentSeries: string;
    documentNumber: string;
    printInfo(): void;
  }
  
  // Класс OwnerImpl
  class OwnerImpl implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _documentType: OwnerDocumentType;
    private _documentSeries: string;
    private _documentNumber: string;
  
    constructor(
      lastName: string,
      firstName: string,
      middleName: string,
      birthDate: Date,
      documentType: OwnerDocumentType,
      documentSeries: string,
      documentNumber: string
    ) {
      this._lastName = lastName;
      this._firstName = firstName;
      this._middleName = middleName;
      this._birthDate = birthDate;
      this._documentType = documentType;
      this._documentSeries = documentSeries;
      this._documentNumber = documentNumber;
    }
  
    get lastName(): string {
      return this._lastName;
    }
  
    set lastName(value: string) {
      this._lastName = value;
    }
  
    get firstName(): string {
      return this._firstName;
    }
  
    set firstName(value: string) {
      this._firstName = value;
    }
  
    get middleName(): string {
      return this._middleName;
    }
  
    set middleName(value: string) {
      this._middleName = value;
    }
  
    get birthDate(): Date {
      return this._birthDate;
    }
  
    set birthDate(value: Date) {
      this._birthDate = value;
    }
  
    get documentType(): OwnerDocumentType {
      return this._documentType;
    }
  
    set documentType(value: OwnerDocumentType) {
      this._documentType = value;
    }
  
    get documentSeries(): string {
      return this._documentSeries;
    }
  
    set documentSeries(value: string) {
      this._documentSeries = value;
    }
  
    get documentNumber(): string {
      return this._documentNumber;
    }
  
    set documentNumber(value: string) {
      this._documentNumber = value;
    }
  
    printInfo(): void {
      console.log(`Фамилия: ${this.lastName}`);
      console.log(`Имя: ${this.firstName}`);
      console.log(`Отчество: ${this.middleName}`);
      console.log(`Дата рождения: ${this.birthDate.toLocaleDateString()}`);
      console.log(`Тип документа: ${this.documentType}`);
      console.log(`Серия документа: ${this.documentSeries}`);
      console.log(`Номер документа: ${this.documentNumber}`);
    }
  }
  
  // Интерфейс Транспортное средство (Vehicle)
  interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleInfo(): void;
  }
  
  // Класс VehicleImpl
  class VehicleImpl implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
  
    constructor(
      brand: string,
      model: string,
      year: number,
      vin: string,
      registrationNumber: string,
      owner: Owner
    ) {
      this._brand = brand;
      this._model = model;
      this._year = year;
      this._vin = vin;
      this._registrationNumber = registrationNumber;
      this._owner = owner;
    }
  
    get brand(): string {
      return this._brand;
    }
  
    set brand(value: string) {
      this._brand = value;
    }
  
    get model(): string {
      return this._model;
    }
  
    set model(value: string) {
      this._model = value;
    }
  
    get year(): number {
      return this._year;
    }
  
    set year(value: number) {
      this._year = value;
    }
  
    get vin(): string {
      return this._vin;
    }
  
    set vin(value: string) {
      this._vin = value;
    }
  
    get registrationNumber(): string {
      return this._registrationNumber;
    }
  
    set registrationNumber(value: string) {
      this._registrationNumber = value;
    }
  
    get owner(): Owner {
      return this._owner;
    }
  
    set owner(value: Owner) {
      this._owner = value;
    }
  
    printVehicleInfo(): void {
      console.log(`Марка: ${this.brand}`);
      console.log(`Модель: ${this.model}`);
      console.log(`Год выпуска: ${this.year}`);
      console.log(`VIN-номер: ${this.vin}`);
      console.log(`Регистрационный номер: ${this.registrationNumber}`);
    }
  }
  
  // Интерфейс Автомобиль (Car)
  interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
  }
  
  // Класс CarImpl
  class CarImpl extends VehicleImpl implements Car {
    private _bodyType: BodyType;
    private _carClass: CarClass;
  
    constructor(
      brand: string,
      model: string,
      year: number,
      vin: string,
      registrationNumber: string,
      owner: Owner,
      bodyType: BodyType,
      carClass: CarClass
    ) {
      super(brand, model, year, vin, registrationNumber, owner);
      this._bodyType = bodyType;
      this._carClass = carClass;
    }
  
    get bodyType(): BodyType {
      return this._bodyType;
    }
  
    set bodyType(value: BodyType) {
      this._bodyType = value;
    }
  
    get carClass(): CarClass {
      return this._carClass;
    }
  
    set carClass(value: CarClass) {
      this._carClass = value;
    }
  
    printVehicleInfo(): void {
      super.printVehicleInfo();
      console.log(`Тип кузова: ${this.bodyType}`);
      console.log(`Класс автомобиля: ${this.carClass}`);
    }
  }
  
  // Интерфейс Мотоцикл (Motorbike)
  interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
  }
  
  // Класс MotorbikeImpl
  class MotorbikeImpl extends VehicleImpl implements Motorbike {
    private _frameType: string;
    private _isForSport: boolean;
  
    constructor(
      brand: string,
      model: string,
      year: number,
      vin: string,
      registrationNumber: string,
      owner: Owner,
      frameType: string,
      isForSport: boolean
    ) {
      super(brand, model, year, vin, registrationNumber, owner);
      this._frameType = frameType;
      this._isForSport = isForSport;
    }
  
    get frameType(): string {
      return this._frameType;
    }
  
    set frameType(value: string) {
      this._frameType = value;
    }
  
    get isForSport(): boolean {
      return this._isForSport;
    }
  
    set isForSport(value: boolean) {
      this._isForSport = value;
    }
  
    printVehicleInfo(): void {
      super.printVehicleInfo();
      console.log(`Тип рамы: ${this.frameType}`);
      console.log(`Для спорта: ${this.isForSport ? "Да" : "Нет"}`);
    }
  }
  
  // Интерфейс Хранилище (VehicleStorage)
  interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAll(): T[];
  }
  
  // Класс VehicleStorageImpl
  class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private _creationDate: Date;
    private _vehicles: T[];
  
    constructor(creationDate: Date, vehicles: T[]) {
      this._creationDate = creationDate;
      this._vehicles = vehicles;
    }
  
    get creationDate(): Date {
      return this._creationDate;
    }
  
    set creationDate(value: Date) {
      this._creationDate = value;
    }
  
    get vehicles(): T[] {
      return this._vehicles;
    }
  
    set vehicles(value: T[]) {
      this._vehicles = value;
    }
  
    getAll(): T[] {
      return this._vehicles;
    }
  }
  
  // Пример использования
  const owner = new OwnerImpl(
    "Иванов",
    "Петр",
    "Сергеевич",
    new Date(1985, 5, 15),
    OwnerDocumentType.Passport,
    "4507",
    "123456"
  );
  
  const car = new CarImpl(
    "Toyota",
    "Camry",
    2020,
    "1HGCM82633A123456",
    "А123БВ77",
    owner,
    BodyType.Sedan,
    CarClass.Luxury
  );
  
  const motorbike = new MotorbikeImpl(
    "Harley-Davidson",
    "Street 750",
    2019,
    "1HD1KBM15DB123456",
    "М654ОК77",
    owner,
    "Стальная рама",
    false
  );
  
  const storage = new VehicleStorageImpl<Vehicle>(new Date(), [car, motorbike]);
  
  console.log("Все транспортные средства в хранилище:");
  storage.getAll().forEach(vehicle => {
    vehicle.printVehicleInfo();
    console.log("-------------------------");
  });
  
  owner.printInfo();