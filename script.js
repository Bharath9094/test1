function updateClock() {
  const now = new Date();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr  = now.getHours();

  document.querySelector('.second').style.transform =
    `rotate(${sec * 6}deg)`;

  document.querySelector('.minute').style.transform =
    `rotate(${min * 6}deg)`;

  document.querySelector('.hour').style.transform =
    `rotate(${hr * 30 + min / 2}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
