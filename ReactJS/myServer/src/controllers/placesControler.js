const express = require('express');
const router = express.Router();

const placeService = require('../services/placeService');

// router.get('/', (req, res) => {
//     res.json({text: 'It is working!'})
// });

router.get('/place3a', async (req, res) => {

    let places = await placeService.getAllPlaces();
    res.json(places);
  
});

// router.get('/details/:id', async (req, res) => {

   
//     try {
//         let result = await placeService.getOne(req.params.id);
        
//         res.json(result);

//     } catch (error) {
//         console.log(error);
//     }
// });

router.get('/place3a/:id', async (req, res) => {

   let result = await placeService.getOnePlace(req.params.id);

   res.json(result);
});

router.post('/place3a', async (req, res) => {

   await placeService.createPlace({...req.body});
   res.json({ok: true});

});

router.put('/place3a/:id', async (req, res) => {
   
    await placeService.updatePlace(req.params.id, req.body);

    res.json({ok: true});
});


router.delete('/place3a/:id', async (req, res) => {
  
   await placeService.deletePlace(req.params.id);

   res.json({ok: true});
});

module.exports = router;