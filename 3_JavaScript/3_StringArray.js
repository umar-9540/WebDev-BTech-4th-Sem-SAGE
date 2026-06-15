// let s = "jello";
// // s = "h";
// let str2 = s.toUpperCase();

// let str3 = s.slice(0, 3);

// console.log(s); // jello
// console.log(str2); // JELLO
// console.log(str3); // jel

let arr = [1, 2, 3, true, "Apple"];
console.log(arr);

arr.push("Mango"); // Push/Add element at end
console.log(arr);
arr.pop(); // Pop/Remove element from end
console.log(arr);

arr.unshift("Orange"); // Add element at start
console.log(arr);
let x = arr.shift(); // Remove element from start
console.log(arr);

console.log(x);

for (let a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}

for (let a of arr) {
  // for .. of loop
  console.log(a);
}
