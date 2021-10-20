
module.exports = {
    development: {
        PORT: 5000,
        dbUrl: 'mongodb://localhost:27017/video-tutorial',
        secret: 'mnogoqkaparola'
    },
    production: {
        PORT: 80
    }
}