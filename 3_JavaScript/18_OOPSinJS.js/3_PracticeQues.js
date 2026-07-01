// Model 1: Employee and Developer (Inheritance)
// Task: Create a base class named Employee with a constructor that initializes name and salary. Include a method named work() that logs "[name] is working." to the console.
// Create a subclass named Developer that extends Employee. The subclass should have a constructor that accepts name, salary, and an additional property programmingLanguage.
// Add a method named writeCode() inside the Developer class that logs "[name] is coding in [programmingLanguage]." to the console.
// Instantiate the Developer class with the name, salary, and language. Finally, invoke both the work() and writeCode() methods on this instance.

// CODE:
// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   work() {
//     console.log(`${this.name} is working.`);
//   }
// }

// class Developer extends Employee {
//   constructor(name, salary, programmingLanguage) {
//     super(name, salary);
//     this.programmingLanguage = programmingLanguage;
//   }
//   writeCode() {
//     console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
//   }
// }

// const dev = new Developer("Umar", 5000, "JavaScript");
// dev.work();
// dev.writeCode();

// Model 2: LibraryBook
// Task: Create a class named LibraryBook with a constructor that initializes title and author. It should also automatically set a property named isAvailable to true.
// Add a method named borrowBook(). If the book is available, set isAvailable to false and log You borrowed "[title]".. If it is already checked out, log Sorry, "[title]" is currently checked out.
// Add a method named returnBook() that sets isAvailable to true and logs You returned "[title]". Create an instance of the class for the book.
// Test your system by sequentially calling the functions on your instance to simulate borrowing the book twice and then returning it.

// Code:
// class LibraryBook {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     this.isAvailable = true;
//   }
//   borrowBook() {
//     if (this.isAvailable) {
//       this.isAvailable = false;
//       console.log(`You borrowed "${this.title}".`);
//     } else {
//       console.log(`Sorry, "${this.title}" is currently checked out.`);
//     }
//   }
//   returnBook() {
//     this.isAvailable = true;
//     console.log(`You returned "${this.title}".`);
//   }
// }

// const book1 = new LibraryBook("Harry Potter", "Umar");
// book1.borrowBook();
// book1.borrowBook();
// book1.returnBook();
// book1.borrowBook();

// Model 3: ShoppingCart
// Task: Create a class named ShoppingCart with a constructor that initializes an empty array called items.
// Add a method named addItem(itemName, price) that pushes an object containing the name and price into the items array. It should log "Added [itemName] to cart." to the console.
// Add a method named calculateTotal() to sum up the prices of all items in the cart. It should log "Total Price: $[total]" and return the total value.
// Create an instance of the ShoppingCart class. Add three items to your cart: a "Laptop" for $1200, a "Mouse" for $25, and "Headphones" for $80.

// Code:
// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }
//   addItem(itemName, price) {
//     this.items.push({ itemName, price });
//     console.log(`Added ${itemName} to cart.`);
//   }
//   calculateTotal() {
//     let total = this.items.reduce((sum, item) => sum + item.price, 0);
//     console.log(`Total Price: $${total}`);
//     return total;
//   }
// }

// const cart1 = new ShoppingCart();
// cart1.addItem("Laptop", 20000);
// cart1.addItem("Mouse", 5000);
// cart1.addItem("Keyboard", 8000);
// cart1.calculateTotal();
