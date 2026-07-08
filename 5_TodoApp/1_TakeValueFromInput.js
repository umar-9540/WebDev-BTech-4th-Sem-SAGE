const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let inpValue = inp.value.trim();
  console.log(inpValue);

  inp.value = "";
});
