var colors = require('colors'),
  baudio = require('baudio');
program = require('commander');
program
  .parse(process.argv);

var startTime;
function start() {
  startTime = new Date().getTime();
  process.stdout.write('pomodoro'.red);
}
start();

function check() {
  var dur = new Date().getTime() - startTime ;
  return (dur > 1000 * 6 * 1);
}

var interval;
interval = setInterval(function() {
  if(check()) {
    clearInterval(interval);
    ding();
    process.stdout.write(' complete'.green);
  }
}, 1000);


function ding() {
  var dur = 3;
  var b = baudio({
    rate: 11250
  }, function(t) {
    return Math.sin(t * 1500) * Math.max(3 - t, 0) / 3;
  });
  b.addChannel(function(t) {
    return Math.sin(t * 1900) * Math.max(3 - t, 0) / 3;
  });
  b.play();
  setTimeout(function() {
    process.exit();
  }, 2500);
}


