let box = document.querySelector(".box");
let bgColor = document.querySelector(".bgcolor");
box.style.transition = "1s all";
bgColor.addEventListener("input", () => {
  box.style.backgroundColor = bgColor.value;
  console.log(` Background color is ${bgColor.value}`);
});
let border = document.querySelector(".border");
border.addEventListener("input", () => {
  let px = "px";
  box.style.borderWidth = `${border.value}px`;
  console.log(`Border width is ${border.value}px`);
});
let borderColor = document.querySelector(".bordercolor");
borderColor.addEventListener("input", () => {
  box.style.borderColor = borderColor.value;
  console.log(` Border color is ${borderColor.value}`);
});
let borderRadius = document.querySelector(".borderradius");
borderRadius.addEventListener("input", () => {
  box.style.borderRadius = `${borderRadius.value}px`;
});
