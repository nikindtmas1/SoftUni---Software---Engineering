
module.exports = {
    development: {
        PORT: 5000,
        dbUrl: 'mongodb://localhost:27017/booking-uni',
        secret: 'mnogoqkaparola'
    },
    production: {
        PORT: 80
    }
}