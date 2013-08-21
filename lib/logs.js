program = require('commander');
module.exports = function(args) {
  program
    .parse(args);

  var db = require('dirty')('.dorolog');
  db.on('load', function() {
    db.forEach(function(key, val) {
      console.log(val.date + '\t- ' + val.duration + '\t- ' + val.message);
    });
  });


};
  
