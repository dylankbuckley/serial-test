const express = require('express')
const app = express()
//const Avrgirl = require('avrgirl-arduino');
const serialport = require("serialport")

app.get('/', function(req, res){

  // var avrgirl = new Avrgirl({
  //   board: 'uno'
  // });
  //
  //
  //
  // avrgirl.flash('Blink.cpp.hex', function (error) {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.info('done.');
  //   }
  // });


  serialport.list(function (err, ports) {
  ports.forEach(function(port) {
    console.log(port);
    if (port.manufacturer == 'Arduino Srl            ') {
      console.log("Debut 3D Connected");
    }
  });
});

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
