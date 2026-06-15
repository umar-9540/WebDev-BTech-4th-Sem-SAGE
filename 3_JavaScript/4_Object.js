let user = {
  name: "Alice",
  age: 25,
  isStudent: true,
  "": "Empty string",
  " ": "Space key",
  "last name": "max",
};

console.log(user);
console.log(user.name);
console.log(user.age);
// console.log(user.'');  // error

console.log(user["name"]);
console.log(user["age"]);
// empty string key and space key not accessed by .
console.log(user[""]);
console.log(user[" "]);
console.log(user["last name"]);
//key containing spaces not accessed by . operator
