// DOM Elements
let time = document.querySelector("#time"),
  greetings = document.querySelector("#greetings"),
  name = document.querySelector("#name"),
  focuss = document.querySelector("#focus");

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
    //Morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greetings.textContent = "Good Morning";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
    document.body.style.backgroundSize = "cover";
    greetings.textContent = "Good Afternoon";
  } else {
    //Night
    document.body.style.backgroundImage = "url('../img/night.jpg')";
    greetings.textContent = "Good Night";
  }
};

//Run
displayTime();

changeBackgroundImg();
