
function speedCalculator(speed) {
const speedLimit= 70;
const kmPer=5;

  if (speed<=speedLimit) {
    console.log("ok");
  }
  else if (speed< 75) {
    console.log("Warning");
  }
else {
  const points=Math.floor((speed-speedLimit)/kmPer);
  //console.log(points);
  if (points>= 12) {
    console.log("license suspend");
  }
  else {
    console.log("Points " + points);
  }
}
}

speedCalculator(180);
