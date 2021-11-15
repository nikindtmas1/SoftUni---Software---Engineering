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

module.exports = router;