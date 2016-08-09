var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err)
  }

  // In case you're curious
  // console.log(JSON.parse(data.body).name) // FYI: data.body is a string
  var data = JSON.parse(data.body)
  var stationName = data.name.toUpperCase()
  var latitude = data.latitude
  var longitude = data.longitude
  var altitude = data.altitude

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: 'Space', stationName: stationName, latitude: latitude, longitude: longitude, altitude: altitude})
})
