const settingMneu = document.querySelector(".settings-menu");
const darkBtn = document.getElementById("dark-btn");

const settingsMenuToggle = () => {
  settingMneu.classList.toggle("settings-menu-height");
};

darkBtn.onclick = () => {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-them");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme")== "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-them");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-them");
} else {
  localStorage.setItem("theme", "light");
}
