const router = require('express').Router();

router.get('/catalog', () => {
        res.send('Catalog Page');
});

const data = {
    name: 'Peter',
    age: 23
}

router.post('/catalog', () => {
        res.json(data);
});

module.exports = router;