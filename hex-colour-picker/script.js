const getInput = document.querySelectorAll(".rgb-box input");
const temp = localStorage.getItem("bg_color");
document.querySelector("body").style.backgroundColor = temp;
document.querySelector(".r").value = localStorage.getItem("r");
document.querySelector(".g").value = localStorage.getItem("g");
document.querySelector(".b").value = localStorage.getItem("b");
document.querySelector(".o").value = localStorage.getItem("o");

document.querySelector(".show-code").innerHTML = temp;


getInput.forEach((item) => {
  item.addEventListener("input", () => {
    const rValue = String(getInput[0].value);
    const gValue = String(getInput[1].value);
    const bValue = String(getInput[2].value);
    const oValue = String(getInput[3].value);
    

    const hexCode = `rgba(${rValue},${gValue},${bValue},${oValue})`;
    document.querySelector("body").style.backgroundColor = hexCode;
    document.querySelector(".show-code").innerHTML = hexCode;
    localStorage.setItem("r", getInput[0].value);
    localStorage.setItem("g", getInput[1].value);
    localStorage.setItem("b", getInput[2].value);
    localStorage.setItem("o", getInput[3].value);
  });
});
