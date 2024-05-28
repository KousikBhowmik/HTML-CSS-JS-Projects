const button = document.querySelector(".btn");
const removing = document.querySelector(".delete .logo");
const canel = document.querySelector(".delete .cancel");
const returnOne = document.querySelector(".opttion .more i");

const opttionVis = document.querySelector(" body .opttion");
const logoVis = document.querySelector(".delete .logo");
const yesNOVis = document.querySelector(".delete .yes-no");
const yesDel = document.querySelector(".delete .yes")

button.addEventListener("click", (e) => {
  button.style.visibility = "hidden";
  setTimeout(() => {
    opttionVis.style.visibility = "visible";
    logoVis.style.visibility = "visible";
    yesNOVis.style.visibility = "hidden";
    e.stopPropagation();
  }, 400);
});

removing.addEventListener("click", (e) => {
  logoVis.style.visibility = "hidden";
  yesNOVis.style.visibility = "visible";
});

canel.addEventListener("click", (e) => {
  logoVis.style.visibility = "visible";
  yesNOVis.style.visibility = "hidden";
});

returnOne.addEventListener("click", () => {
  button.style.visibility = "visible";
  opttionVis.style.visibility = "hidden";
  logoVis.style.visibility = "hidden";
  yesNOVis.style.visibility = "hidden";
  e.stopPropagation();
});

yesDel.addEventListener('click', () => {
  button.style.visibility = "visible";
  opttionVis.style.visibility = "hidden";
  logoVis.style.visibility = "hidden";
  yesNOVis.style.visibility = "hidden";
})
