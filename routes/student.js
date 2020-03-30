const express=require('express');
const router=express.Router()

const Student=require('../controllers/student')


router.post('/create',Student.create_Student);
router.get('/getAllData',Student.View_Student);
router.get('/getStudentById/:id',Student.ViewStudentById);
router.post('/update/:id',Student.student_Update);

module.exports=router;