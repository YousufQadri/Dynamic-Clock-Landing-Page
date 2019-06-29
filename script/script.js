// DOM Elements
let time = document.querySelector("#time"),
  greetings = document.querySelector("#greetings"),
  name = document.querySelector("#name"),
  focus = document.querySelector("#focus");

// Display Time
const displayTime = () => {
  let today = new Date(),
    hours = today.getHours(),
    mins = today.getMinutes(),
    secs = today.getSeconds();

  //Check AM or PM
  const amPm = hours >= 12 ? "PM" : "AM";

  // 12 HR format
  hours = hours % 12 || 12;

  time.innerHTML = `${addZero(hours)}<span>:</span>${addZero(
    mins
  )}<span>:</span>${addZero(secs)} ${amPm}`;

  setTimeout(displayTime, 1000);
};

// Add zero to single digit
const addZero = num => {
  return (parseInt(num, 10) < 10 ? "0" : "") + num;
};

//  Change Background image
const changeBackgroundImg = () => {
  let time = new Date(),
    hour = time.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greetings.textContent = "Good Morning";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    greetings.textContent = "Good Afternoon";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.color = "white";
  } else {
    // Night
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greetings.textContent = "Good Night";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "100% 100%";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.color = "white";
  }
};

// Fetching name from local storage
const getName = () => {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};

// Fetching focus/motivation from local storage
const getFocus = () => {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
};

// Setting name to DOM from local storage
const setName = e => {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
};

// Setting focus/motivation to DOM from local storage
const setFocus = e => {
  if (e.type === "keypress") {
    if (e.which === 13 || e.keyCode === 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
};

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
displayTime();

// Change background image according to time
changeBackgroundImg();

// Get name
getName();

// Get focus
getFocus();
