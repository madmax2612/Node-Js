const express=require('express');
const router=express.Router()

const product_controller=require('../controllers/product')

router.get('/test',product_controller.test);
router.post('/create',product_controller.product_create);
router.post('/:id',product_controller.product_Details)
router.post('/:id/update',product_controller.product_Update)
router.post('/:id/delete',product_controller.product_Delete)


module.exports=router;
