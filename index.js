function setHand() {
  const date = new Date();
  const hourHand = document.querySelector(".hour");
  const secondHand = document.querySelector(".second");
  const minuteHand = document.querySelector(".minute");

  const second = date.getSeconds();
  const secondDegree = (second / 60) * 360 + 180;

  const minute = date.getMinutes();
  const minuteDegree = (minute / 60) * 360 + 180;

  const hour = date.getHours();
  const hourDegree = (hour / 12) * 360 + (minute / 60) * 30 + 180;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setHand();
setInterval(setHand, 1000);
