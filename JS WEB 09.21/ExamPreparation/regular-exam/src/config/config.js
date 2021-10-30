
module.exports = {
    development: {
        PORT: 3000,
        dbUrl: 'mongodb://localhost:27017/regular-exam',
        secret: 'mnogoqkaparola'
    },
    production: {
        PORT: 80
    }
}