const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('catalog');
});

module.exports = router;