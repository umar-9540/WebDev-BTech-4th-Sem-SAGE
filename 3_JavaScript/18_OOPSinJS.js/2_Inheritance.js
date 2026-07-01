class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is Eating`);
  }
  sleep() {
    console.log(`${this.name} is Sleeping`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  eat() {
    // Method Overriding
    console.log(`${this.name} is Drinking`);
  }

  speak() {
    console.log(`${this.name} Bark Bark ${this.breed}`);
  }
}

const dog1 = new Dog("Tommy", "German Shepherd");
dog1.speak();
dog1.eat();
