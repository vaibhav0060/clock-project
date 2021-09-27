let hr = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

let clock = setInterval(function timeUpdate() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  seconds = date.getSeconds();
  let am_pm = document.getElementById("am_pm");
  if (hours >= 12) {
    am_pm.innerHTML = "PM";
  } else {
    am_pm.innerHTML = "AM";
  }

  // 12 hr fomat

  if (hours > 12) {
    hours = hours - 12;
  }

  hr.textContent = hours;
  min.textContent = minutes;
  sec.textContent = seconds;
}, 1000);

// pic change
let date = new Date();
let hours = date.getHours();
let lunchtext1 = document.getElementById("lunchtext");
let wish = document.getElementById("wish");
let pic = document.getElementById("pic");


function timeToTime() {
if (hours >= 8 && hours < 12) {
  lunchtext1.innerText = "LET'S WAKE UP!!";
  wish.innerText = "GOOD MORNING!!";
  pic.style.backgroundImage = " url('3.png')";
}
 else if (hours >= 12 && hours < 16) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
    pic.style.backgroundImage = " url('./images/home.png')";
  }
  else if (hours >= 20 && hours < 24) {
    lunchtext1.innerText = "TAKE A NAP  !!!";
    wish.innerText = "GOOD NIGHT!!";
    pic.style.backgroundImage = " url('./images/2.png')";
  }
  else{
    lunchtext1.innerText = "JUST CHILL  !!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('./images/home.png')";
  }
}
timeToTime();



let isparty = false;
let party = document.querySelector("#btn");
party.addEventListener("click", () => {
if (isparty) {
                party.innerHTML = " Party time! ";
                timeToTime();
} else {
                party.innerHTML = "End Party ! "
    lunchtext1.innerText = "LET'S PARTY !!!";
    pic.style.backgroundImage = " url('./images/party2.svg')";
}
isparty =! isparty ;
});
