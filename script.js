function clock() {
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);

  document.getElementById('clock').innerHTML = h + ':' + m;
}
setInterval('clock()', 1000);

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

// Weather API
