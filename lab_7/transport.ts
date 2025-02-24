// Декоратор класса
function freezeClass(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

// Декоратор метода
function uppercase(
  target: any,
  propertyKey: string,
  descriptor?: PropertyDescriptor
): any {
  if (!descriptor) {
    const desc = Object.getOwnPropertyDescriptor(target, propertyKey);
    if (desc) return uppercase(target, propertyKey, desc);
    return;
  }

  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);
    return typeof result === 'string' ? result.toUpperCase() : result;
  };

  return descriptor;
}

export namespace Transport {
  export enum DocumentType {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    Other = "Другой документ"
  }

  export enum BodyType {
    Sedan = "Седан",
    SUV = "Внедорожник",
    Hatchback = "Хэтчбек",
    Coupe = "Купе"
  }

  export enum CarClass {
    Economy = "Эконом",
    Luxury = "Люкс",
    Sports = "Спортивный"
  }
  export interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    documentType: DocumentType;
    documentSeries: string;
    documentNumber: string;
    printInfo(): void;
  }

  export class OwnerImpl implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _documentType: DocumentType;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(
      lastName: string,
      firstName: string,
      middleName: string,
      birthDate: Date,
      documentType: DocumentType,
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
    get lastName(): string { return this._lastName; }
    set lastName(value: string) { this._lastName = value; }

    get firstName(): string { return this._firstName; }
    set firstName(value: string) { this._firstName = value; }

    get middleName(): string { return this._middleName; }
    set middleName(value: string) { this._middleName = value; }

    get birthDate(): Date { return this._birthDate; }
    set birthDate(value: Date) { this._birthDate = value; }

    get documentType(): DocumentType { return this._documentType; }
    set documentType(value: DocumentType) { this._documentType = value; }

    get documentSeries(): string { return this._documentSeries; }
    set documentSeries(value: string) { this._documentSeries = value; }

    get documentNumber(): string { return this._documentNumber; }
    set documentNumber(value: string) { this._documentNumber = value; }

    printInfo(): void {
      console.log('=== Информация о владельце ===');
      console.log(`ФИО: ${this.lastName} ${this.firstName} ${this.middleName}`);
      console.log(`Дата рождения: ${this.birthDate.toLocaleDateString()}`);
      console.log(`Документ: ${this.documentType}`);
      console.log(`Серия/Номер: ${this.documentSeries} ${this.documentNumber}`);
    }
  }

  export interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    printVehicleInfo(): void;
    getDetails(): { vin: string; ownerFullName: string; regNumber: string };
  }

  export class VehicleImpl implements Vehicle {
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

    get brand(): string { return this._brand; }
    set brand(value: string) { this._brand = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get year(): number { return this._year; }
    set year(value: number) { this._year = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): Owner { return this._owner; }
    set owner(value: Owner) { this._owner = value; }

    printVehicleInfo(): void {
      console.log('=== Информация о транспортном средстве ===');
      console.log(`Марка: ${this.brand}`);
      console.log(`Модель: ${this.model}`);
      console.log(`Год выпуска: ${this.year}`);
      console.log(`VIN: ${this.vin}`);
      console.log(`Рег. номер: ${this.registrationNumber}`);
    }

    getDetails() {
      return {
        vin: this.vin,
        ownerFullName: `${this.owner.lastName} ${this.owner.firstName} ${this.owner.middleName}`,
        regNumber: this.registrationNumber
      };
    }
  }

  @freezeClass
  export class CarImpl extends VehicleImpl implements Car {
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

    get bodyType(): BodyType { return this._bodyType; }
    set bodyType(value: BodyType) { this._bodyType = value; }
    get carClass(): CarClass { return this._carClass; }
    set carClass(value: CarClass) { this._carClass = value; }

    @uppercase
    public getFullInfo(): string {
      return `${this.brand} ${this.model}, ${this.year}, ${this.vin}`;
    }

    printVehicleInfo(): void {
      super.printVehicleInfo();
      console.log(`Тип кузова: ${this.bodyType}`);
      console.log(`Класс автомобиля: ${this.carClass}`);
    }
  }

  export interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
  }

  export interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
  }

  export class MotorbikeImpl extends VehicleImpl implements Motorbike {
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

    get frameType(): string { return this._frameType; }
    set frameType(value: string) { this._frameType = value; }

    get isForSport(): boolean { return this._isForSport; }
    set isForSport(value: boolean) { this._isForSport = value; }

    printVehicleInfo(): void {
      super.printVehicleInfo();
      console.log(`Тип рамы: ${this.frameType}`);
      console.log(`Спортивный: ${this.isForSport ? 'Да' : 'Нет'}`);
    }
  }

  export interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAll(): T[];
    sortByBrand(): T[];
    filterByOwnerLastName(lastName: string): T[];
  }

  export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private _creationDate: Date;
    private _vehicles: T[];

    constructor(creationDate: Date, vehicles: T[]) {
      this._creationDate = creationDate;
      this._vehicles = vehicles;
    }

    get creationDate(): Date { return this._creationDate; }
    set creationDate(value: Date) { this._creationDate = value; }

    get vehicles(): T[] { return this._vehicles; }
    set vehicles(value: T[]) { this._vehicles = value; }

    getAll(): T[] {
      return this._vehicles;
    }

    sortByBrand(): T[] {
      return [...this.vehicles].sort((a, b) => 
        a.brand.localeCompare(b.brand, 'ru', { sensitivity: 'base' })
      );
    }

    filterByOwnerLastName(lastName: string): T[] {
      const searchName = lastName.toLowerCase().trim();
      return this.vehicles.filter(vehicle => 
        vehicle.owner.lastName.toLowerCase() === searchName
      );
    }
  }
}