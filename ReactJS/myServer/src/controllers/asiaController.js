const express = require('express');
const router = express.Router();

const placeService = require('../services/placeService');
// First place container
router.get('/', async (req, res) => {

   let places = await placeService.getAllPlaces();
   res.json(places);
 
});

router.get('/:id', async (req, res) => {

  let result = await placeService.getOnePlace(req.params.id);

  res.json(result);
});

router.post('/', async (req, res) => {

  await placeService.createPlace({...req.body});
  res.json({ok: true});

});

router.put('/place1a/:id', async (req, res) => {
  
   await placeService.updatePlace(req.params.id, req.body);

   res.json({ok: true});
});

router.delete('/place1a/:id', async (req, res) => {
 
  await placeService.deletePlace(req.params.id);

  res.json({ok: true});
});

module.exports = router;