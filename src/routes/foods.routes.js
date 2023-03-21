const { Router } = require('express');

const FoodsController = require('../controllers/FoodsController');
// const FoodImageController = require('../controllers/FoodImageController');
const ensureIsAdmin = require('../middlewares/ensureIsAdmin');

// const multer = require('multer');
// const uploadConfig = require('../configs/upload');

const foodsRoutes = Router();
const foodsController = new FoodsController();

// const foodImageController = new FoodImageController();
// const upload = multer(uploadConfig.MULTER);

foodsRoutes.get('/', foodsController.index);
foodsRoutes.get('/:id', foodsController.show);
foodsRoutes.post('/', ensureIsAdmin, foodsController.create);
foodsRoutes.put('/:id', ensureIsAdmin, foodsController.update);
foodsRoutes.delete('/:id', ensureIsAdmin, foodsController.delete);

// foodsRoutes.patch('/:id/image', ensureIsAdmin, upload.single('image'), foodImageController.update); 


// (request, response) => {
//   console.log(request.file.filename);
//   response.json();
// });

module.exports = foodsRoutes;