const showOutput = () => {
  const inputBox = document.querySelector(".search-input");
  const inputData = inputBox.value;
  const output = document.querySelector(".output p");
  output.innerHTML = inputData;
  if (inputData.length > 0) {
    const xIcon = document.querySelector(".search-box .x-icon");
    xIcon.style.visibility = "visible";
  }
};

const clear = () => {
  const inputField = document.querySelector(".search-input");
  inputField.value = "";
  const xIcon = document.querySelector(".search-box .x-icon");
  xIcon.style.visibility = "hidden";

  const output = document.querySelector(".output p");
  output.innerHTML = "";
};

document.querySelector(".search-input").addEventListener("input", showOutput);

document.querySelector(".x-icon").addEventListener("click", clear);
