const express = require('express');
const router = express.Router();

const gameService = require('../services/gameServices');

router.get('/games', async (req, res) => {

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
})

module.exports = router;