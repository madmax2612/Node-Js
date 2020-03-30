const Student =require('../Models/Student');

exports.create_Student=(req,res)=>{
let student=new Student(
    {
        name:req.body.name,
        lastname:req.body.name,
        courseEnrolled:req.body.courseEnrolled
    }
)

student.save((err)=>{
if(err){
return next(err)
}
else
return res.send("Student created successfully!!")

})
}
exports.View_Student=(req,res)=>{
    Student.find()
    .then((student)=>{
        console.log(student)
        
        res.send(student)
       
    }).catch((err)=>{
        res.status(404).send({
            message:err.message||"Some Error Just Occured"
        })
        
    })    
    }

    exports.ViewStudentById=(req,res)=>{
        Student.findById(req.params.id)
        .then((student)=>{
            console.log(student)
            res.send(student)
           
        }).catch((err)=>{
            res.status(500).send({
                message:err.message||"Some Error Just Occured"
            })
            
        })    
        }


        exports.student_Update=(req,res)=>{
            Student.findByIdAndUpdate(req.params.id,{$set:req.body}).then((err,student)=>{
                
                res.send("Student Data Updated")
            }).catch((err)=> {
                if(err)
               return next(err)
            })
        }
        