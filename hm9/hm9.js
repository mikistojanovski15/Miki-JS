// 1.

// class Car {
//     constructor(make, model, year) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//       this.mileage = 0;
//     }

//     start() {
//       console.log("Engine started.");
//     }

//     drive(distance) {
//       this.mileage += distance;
//       console.log(`Driven ${distance} miles.`);
//     }

//     getMileage() {
//       console.log(`Current mileage: ${this.mileage} miles.`);
//     }
//   }

//   const myCar = new Car("Peugeot", "206cc", 2003);
//   myCar.start();
//   myCar.drive(80);
//   myCar.getMileage();

// 2.

// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     eat(food) {
//       console.log(`${this.name} is eating ${food}.`);
//     }

//     sleep() {
//       console.log(`${this.name} is sleeping.`);
//     }
//   }

//   class Dog extends Animal {
//     constructor(name, age, breed) {
//       super(name, age);
//       this.breed = breed;
//     }

//     bark() {
//       console.log(`${this.name} is barking.`);
//     }

//     play() {
//       console.log(`${this.name} is playing.`);
//     }
//   }

//   const genericAnimal = new Animal("Generic Animal", 5);
//   genericAnimal.eat("grass");
//   genericAnimal.sleep();

//   const myDog = new Dog("Buddy", 3, "Golden Retriever");
//   myDog.eat("dog food");
//   myDog.sleep();
//   myDog.bark();
//   myDog.play();

// 3.

// class Rectangle {
//   constructor(color, width, height) {
//     this.color = color;

//     let _width = width;
//     let _height = height;

//     this.getWidth = function () {
//       return _width;
//     };

//     this.setWidth = function (newWidth) {
//       if (newWidth > 0) {
//         _width = newWidth;
//       } else {
//         console.error("Width must be a positive number.");
//       }
//     };

//     this.getHeight = function () {
//       return _height;
//     };

//     this.setHeight = function (newHeight) {
//       if (newHeight > 0) {
//         _height = newHeight;
//       } else {
//         console.error("Height must be a positive number.");
//       }
//     };
//   }

//   static getShapeType() {
//     return "Rectangle";
//   }

//   getArea() {
//     return this.getWidth() * this.getHeight();
//   }

//   describe() {
//     console.log(
//       `Color: ${
//         this.color
//       }, Width: ${this.getWidth()}, Height: ${this.getHeight()}`
//     );
//   }
// }

// const rectangle1 = new Rectangle("Blue", 5, 10);
// console.log(Rectangle.getShapeType());

// rectangle1.describe();
// console.log("Area:", rectangle1.getArea());

// rectangle1.setWidth(8);
// rectangle1.setHeight(12);
// rectangle1.describe();
// console.log("Area:", rectangle1.getArea());

// 4.
class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.error("Deposit amount must be greater than 0.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
          console.error("Insufficient funds. Withdrawal amount exceeds the current balance.");
        }
      } else {
        console.error("Withdrawal amount must be greater than 0.");
      }
    }
  
    getBalance() {
      console.log(`Current balance: $${this.balance}`);
    }
  }
  
  
  const account1 = new BankAccount("123456789", "John Doe", 1000);
  const account2 = new BankAccount("987654321", "Jane Smith");
  
  account1.deposit(700);
  account1.withdraw(400);
  account1.getBalance();
  
  account2.deposit(3500);
  account2.withdraw(1000);
  account2.getBalance();
  