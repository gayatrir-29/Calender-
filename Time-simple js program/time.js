setInterval(() => {
  day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let a = new Date();
  let d = a.toLocaleDateString();
  let x =
    a.getHours() +
    ":" +
    a.getMinutes() +
    ":" +
    a.getSeconds() +
    ":" +
    a.getUTCMilliseconds() +
    " ";

  document.querySelector(".time").innerHTML =
    d + " " + x + " " + day[a.getDay()];
}, 1000);
