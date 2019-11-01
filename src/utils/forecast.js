const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/2477ee5d296cb0751af5bec4dd65af4a/${latitude},${longitude}?units=si`

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect!', undefined)
        } else if (body.error) {
            callback('Search is incorrect!', undefined)
        } else {
            const {temperature, precipProbability} = body.currently
            callback(undefined, `${body.daily.data[0].summary} It is currently ${temperature} degrees out. These is a ${precipProbability}% chance of rain.`)
        }
    })
}

export default forecast