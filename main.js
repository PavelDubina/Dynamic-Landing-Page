const time = document.getElementById("time"),
  greeteng = document.getElementById("greeteng"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

//Add zeros

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//Set Background
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //Morning
    document.body.style.backgroundImage = "url('./img/Morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage = "url('./img/evening.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
}

//Set name

function setName(e) {
    if (e.type === 'keypress') {
                
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}
//Get name
function getName () {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Get focus
function getFocus () {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blure', setName);

//Run
showTime();
setBgGreet();
getName();
getFocus();
