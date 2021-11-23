const express = require('express');
const router = express.Router();

const gameService = require('../services/gameServices');

router.get('/jsonstore/destinations', async (req, res) => {

    try {
        let results = await gameService.getAll();

        res.json(results);//

    } catch (error) {
        console.log(error);
      
    }
  
});

router.get('/details/:id', async (req, res) => {

   
    try {
        let result = await gameService.getOne(req.params.id);
        
        res.json(result);

    } catch (error) {
        console.log(error);
    }
});

router.post('/jsonstore/destinations', async (req, res) => {

    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    try {
        let data = req.body;
        await gameService.createGame(data)

        res.end();

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;