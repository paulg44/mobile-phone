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

function date() {
  const todaysDate = new Date()

  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  let day = weekday[todaysDate.getDay()]
  let monthName = todaysDate.toLocaleDateString('default', {month: 'short'})
  let date = todaysDate.getDate()
  

  document.getElementById('date').innerHTML = `${day}, ${monthName} ${date}`
}

date()
