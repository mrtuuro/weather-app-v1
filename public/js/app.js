console.log('Client side JS is loaded.')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
var forecastMessage = document.getElementById('forecast')
var geocodeMessage = document.getElementById('geocode')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                forecastMessage.innerHTML = data.error
                geocodeMessage.innerHTML = ''
            } else {
                forecastMessage.innerHTML = data.forecast
                geocodeMessage.innerHTML = data.location
            }
        })
    })
})