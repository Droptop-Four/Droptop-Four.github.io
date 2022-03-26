Date.shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function short_Days(dt) {return Date.shortDays[dt.getDay()];}
// a function to format a date with short days

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();    
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours %= 12;
  hours = hours || 12;    
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  const strTime = `${hours}:${minutes} ${ampm}`;

  return strTime;
};



function getDate() {
  // get the current date
  var dt = new Date();

  // get the day of the week
  var day = short_Days(dt);

  // get am/pm
  var ampm = formatAMPM(dt);


  // return the formatted date
  return day + ' ' + ampm;
}

function setTime() {
  // get the date
  var dt = getDate();

  // get the element of the id: droptop-time
  var el = document.getElementById('droptop-time');
  // set the text of the element to the date
  el.innerHTML = dt;
}


// set the time every second
setInterval(setTime, 1000);