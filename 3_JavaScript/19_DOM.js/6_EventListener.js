const btn = document.querySelector("#btn");

// btn.onclick = () => {
//   console.log("First Event");
// };
// onclick overrides the event
// btn.onclick = () => {
//   console.log("Second Event");
// };

// btn.addEventListener("click", () => {
//   console.log("First Event");
// });

// btn.addEventListener("click", () => {
//   console.log("Second Event");
// });

const inp = document.querySelector("#inp");

inp.addEventListener("keypress", (ev) => {
  console.log(ev.key);
  //   console.log("Key Pressed");
});
