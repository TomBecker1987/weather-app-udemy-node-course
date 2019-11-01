const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZmlnbGVnZ2VkdG9tIiwiYSI6ImNrMmNmdmFhMzMzZGozbG16dDI5ZHg3NXUifQ.16-rV00BxuPkYzXuTleQ_A&limit=1`
    
    request({ url, json: true}, (err, { body }) => {
        if (err) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location!', undefined)
        } else {
            const [longitude, latitude] = body.features[0].center
            callback(undefined, {
                latitude,
                longitude,
                location: body.features[0].place_name
            })
        }
    })
}

export default geocode