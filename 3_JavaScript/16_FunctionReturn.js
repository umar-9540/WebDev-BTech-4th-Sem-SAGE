function greet() {
  console.log("Hello");

  return function () {
    console.log("World");
  };
}

// let w = greet();
// w();

greet()();
