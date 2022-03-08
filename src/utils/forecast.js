const request = require("request");


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4fda95c4fccb94836b1e5fd01fae72b9&query='+longitude+','+latitude+'&units=m'

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather services!!!', undefined)
        }
        else if(body.error) {
            callback('Unable to find the location. try another search.', undefined)
        }
        else {
            const degree = body.current.temperature
            const feelsLike = body.current.feelslike
            const humidity = body.current.humidity
            callback(undefined, body.current.weather_descriptions[0]
                + '. It is currently ' + degree + ' degrees out. It feels like '
                + feelsLike + ' degrees out. Humidity is ' + humidity + '%.')
        }
    })
}

module.exports = forecast