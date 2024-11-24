// code for customizing the div
let box = document.querySelector(".box");
let bgColor = document.querySelector(".bgcolor");
box.style.transition = "1s all";
bgColor.addEventListener("input", () => {
  let bgColor_info = document.querySelector(".bginfoheading");
  bgColor_info.innerHTML = bgColor.value;
  box.style.backgroundColor = bgColor.value;
  console.log(` Background color is ${bgColor.value}`);
});
let border = document.querySelector(".border");
border.addEventListener("input", () => {
  let borderinfo = document.querySelector(".borderwidthinfoheading");
  borderinfo.innerHTML = border.value;
  let px = "px";
  box.style.borderWidth = `${border.value}px`;
  console.log(`Border width is ${border.value}px`);
});
let borderColor = document.querySelector(".bordercolor");
borderColor.addEventListener("input", () => {
  let borderColor_info = document.querySelector(".bordercolorinfoheading");
  borderColor_info.innerHTML = borderColor.value;
  box.style.borderColor = borderColor.value;
  console.log(` Border color is ${borderColor.value}`);
});
let borderRadius = document.querySelector(".borderradius");
borderRadius.addEventListener("input", () => {
  let borderRadius_info = document.querySelector(".borderradiusinfoheading");
  borderRadius_info.innerHTML = borderRadius.value;
  box.style.borderRadius = `${borderRadius.value}px`;
});

let width = document.querySelector(".width");
width.addEventListener("input", () => {
  let width_info = document.querySelector(".widthinfoheading");
  width_info.innerHTML = width.value;
  box.style.width = `${width.value}px`;
});
let height = document.querySelector(".height");
height.addEventListener("input", () => {
  let height_info = document.querySelector(".heightinfoheading");
  box.style.height = `${height.value}px`;
  height_info.innerHTML = height.value;
});

// code for displaying css proprties
