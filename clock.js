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

// function timeToTime() {
// if (hours >= 8 && hours < 12) {
//   lunchtext1.innerText = "LET'S WAKE UP!!";
//   wish.innerText = "GOOD MORNING!!";
//   pic.style.backgroundImage = " url('3.png')";
// }
//  else if (hours >= 12 && hours < 16) {
//     lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
//     wish.innerText = "GOOD AFTERNOON!!";

//     pic.style.backgroundImage = " url('./images/home.png')";
//   }
//   else if (hours >= 20 && hours < 24) {
 
    // lunchtext1.innerText = "TAKE A NAP  !!!";
    // wish.innerText = "GOOD NIGHT!!";
    // pic.style.backgroundImage = " url('./images/2.png')";
//   }
//   else{
//     lunchtext1.innerText = "JUST CHILL  !!!";
//     wish.innerText = "HAVE A GOOD DAY!!";
//     pic.style.backgroundImage = " url('./images/home.png')";
//   }
// }
// timeToTime();

// switch (selecto) {
//   case selecto.value == "two" :
//  wish.innerText = "HAVE A GOOD DAY!!";
//     break;

// default:
//   wish.innerText = "HAVE ";
//   break;
// }

function defaultt() {
  pic.style.backgroundImage = " url('default.svg')";
  // lunchtext1.innerText = " just chill !!!";
  lunchtext1.innerText = " JUST CHILL !!!";

}
let selecto = document.getElementById("timing1");
let selectt = document.getElementById("timing2");
let selecth = document.getElementById("timing3");
// selecto.classList.add("newclass");
selecto.addEventListener("change", function () {
  if (selecto.value == "ONE" && hours >= 0 && hours < 1) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "TWO" && hours >= 1 && hours < 2) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "THREE" && hours >= 2 && hours < 3) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "FOUR" && hours >= 3 && hours < 4) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "FIVE" && hours >= 4 && hours < 5) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "SIX" && hours >= 5 && hours < 6) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "SEVEN" && hours >= 6 && hours < 7) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "EIGHT" && hours >= 7 && hours < 8) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "NINE" && hours >= 8 && hours < 9) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "TEN" && hours >= 9 && hours < 10) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "ELEVEN" && hours >= 10 && hours < 11) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "TWELL" && hours >= 11 && hours < 12) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "ONEP" && hours >= 12 && hours < 13) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "TWOP" && hours >= 13 && hours < 14) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "THREEP" && hours >= 14 && hours < 15) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "FOURP" && hours >= 15 && hours < 16) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "FIVEP" && hours >= 16 && hours < 17) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "SIXP" && hours >= 17 && hours < 18) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "SEVENP" && hours >= 18 && hours < 19) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "EIGHTP" && hours >= 19 && hours < 20) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "NINEP" && hours >= 20 && hours < 21) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "TENP" && hours >= 21 && hours < 22) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "ELEVENP" && hours >= 22 && hours < 23) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else if (selecto.value == "TWELLP" && hours >= 19 && hours < 20) {
    wish.classList.add("wish");
    lunchtext1.innerText = "LET'S WAKE UP!!";
    wish.classList.remove("newclass");
    wish.innerText = "HAVE A GOOD DAY!!";
    pic.style.backgroundImage = " url('3.png')";
  } else {
    wish.classList.add("newclass");
    wish.classList.remove("wish");
    lunchtext1.innerText = " JUST CHILL !!!";
    pic.style.backgroundImage = " url('default.svg')";
  }
});
selectt.addEventListener("change", function () {
  if ( selectt.value == "ONE" && hours >= 0 && hours < 1) { 
     lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
  wish.innerText = "GOOD AFTERNOON!!";
wish.classList.add("wish");
wish.classList.remove("newclass");
    pic.style.backgroundImage = " url('3.png')";
  } else if (selectt.value == "TWO" && hours >= 1 && hours < 2) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "THREE" && hours >= 2 && hours < 3) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "FOUR" && hours >= 3 && hours < 4) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "FIVE" && hours >= 4 && hours < 5) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "SIX" && hours >= 5 && hours < 6) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "SEVEN" && hours >= 6 && hours < 7) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "EIGHT" && hours >= 7 && hours < 8) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "NINE" && hours >= 8 && hours < 9) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "TEN" && hours >= 9 && hours < 10) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "ELEVEN" && hours >= 10 && hours < 11) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "TWELL" && hours >= 11 && hours < 12) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "ONEP" && hours >= 12 && hours < 13) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "TWOP" && hours >= 13 && hours < 14) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "THREEP" && hours >= 14 && hours < 15) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "FOURP" && hours >= 15 && hours < 16) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "FIVEP" && hours >= 16 && hours < 17) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "SIXP" && hours >= 17 && hours < 18) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "SEVENP" && hours >= 18 && hours < 19) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "EIGHTP" && hours >= 19 && hours < 20) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "NINEP" && hours >= 20 && hours < 21) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "TENP" && hours >= 21 && hours < 22) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else if (selectt.value == "ELEVENP" && hours >= 22 && hours < 23) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";

  } else if (selectt.value == "TWELLP" && hours >= 23 && hours < 0) {
    lunchtext1.innerText = "LET'S HAVE SOME LUNCH !!!";
    wish.innerText = "GOOD AFTERNOON!!";
  wish.classList.add("wish");
  wish.classList.remove("newclass");
 pic.style.backgroundImage = " url('./images/home.png')";
  } else {
    wish.classList.add("newclass");
    wish.classList.remove("wish");
    lunchtext1.innerText = " JUST CHILL !!!";
    pic.style.backgroundImage = " url('default.svg')";}
//  selecto.addEventListener("change", function () {
//       if (selecto.value == "ONE" && hours >= 8 && hours < 1) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "TWO" && hours >= 1 && hours < 2) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "THREE" && hours >= 2 && hours < 3) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "FOUR" && hours >= 3 && hours < 4) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "FIVE" && hours >= 4 && hours < 5) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "SIX" && hours >= 5 && hours < 6) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "SEVEN" && hours >= 6 && hours < 7) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "EIGHT" && hours >= 7 && hours < 8) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "NINE" && hours >= 8 && hours < 9) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "TEN" && hours >= 9 && hours < 10) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "ELEVEN" && hours >= 10 && hours < 11) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "TWELL" && hours >= 11 && hours < 12) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "ONEP" && hours >= 12 && hours < 13) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "TWOP" && hours >= 13 && hours < 14) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "THREEP" && hours >= 14 && hours < 15) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "FOURP" && hours >= 15 && hours < 16) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "FIVEP" && hours >= 16 && hours < 17) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "SIXP" && hours >= 17 && hours < 18) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "SEVENP" && hours >= 18 && hours < 19) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "EIGHTP" && hours >= 19 && hours < 20) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "NINEP" && hours >= 20 && hours < 21) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "TENP" && hours >= 21 && hours < 22) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "ELEVENP" && hours >= 22 && hours < 23) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else if (selecto.value == "TWELLP" && hours >= 19 && hours < 20) {
//         wish.innerText = "HAVE A GOOD DAY!!";
//         pic.style.backgroundImage = " url('3.png')";
//       } else {
//         wish.innerText = "HAVE ";

//         pic.style.backgroundImage = " url('default.svg')";
//       }
//     });
//   }
});

selecth.addEventListener("change", function () {
  if (selecth.value == "ONE" && hours >= 8 && hours < 1) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "TWO" && hours >= 1 && hours < 2) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "THREE" && hours >= 2 && hours < 3) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "FOUR" && hours >= 3 && hours < 4) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "FIVE" && hours >= 4 && hours < 5) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "SIX" && hours >= 5 && hours < 6) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "SEVEN" && hours >= 6 && hours < 7) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "EIGHT" && hours >= 7 && hours < 8) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "NINE" && hours >= 8 && hours < 9) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "TEN" && hours >= 9 && hours < 10) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "ELEVEN" && hours >= 10 && hours < 11) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "TWELL" && hours >= 11 && hours < 12) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "ONEP" && hours >= 12 && hours < 13) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "TWOP" && hours >= 13 && hours < 14) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "THREEP" && hours >= 14 && hours < 15) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "FOURP" && hours >= 15 && hours < 16) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "FIVEP" && hours >= 16 && hours < 17) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "SIXP" && hours >= 17 && hours < 18) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "SEVENP" && hours >= 18 && hours < 19) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "EIGHTP" && hours >= 19 && hours < 20) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "NINEP" && hours >= 20 && hours < 21) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "TENP" && hours >= 21 && hours < 22) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "ELEVENP" && hours >= 22 && hours < 23) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else if (selecth.value == "TWELLP" && hours >= 19 && hours < 20) {
    wish.classList.add("wish");
    wish.classList.remove("newclass");
      lunchtext1.innerText = "TAKE A NAP  !!!";
      wish.innerText = "GOOD NIGHT!!";
      pic.style.backgroundImage = " url('./images/2.png')";
  } else {
    wish.classList.add("newclass");
    wish.classList.remove("wish");
    lunchtext1.innerText = " JUST CHILL !!!";
    pic.style.backgroundImage = " url('default.svg')";
  }
});

let isparty = false;
let party = document.querySelector("#btn");
party.addEventListener("click", () => {
  if (isparty) {
    party.innerHTML = " Party time! ";
    
    defaultt();
  } else {
    party.innerHTML = "End Party ! ";
    lunchtext1.innerText = "LET'S PARTY !!!";
    pic.style.backgroundImage = " url('./images/party2.svg')";
  }
  isparty = !isparty;
});
