const express = require('express');
const router = express.Router();

const gameService = require('../services/gameServices');

router.get('/jsonstore/destinations', async (req, res) => {

    let games = await gameService.getAll();
    res.json(games);
  
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

   await gameService.createGame({...req.body});
   res.json({ok: true})

});

module.exports = router;