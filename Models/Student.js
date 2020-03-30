const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let SchoolManagement=new Schema({
    sequence:{type:Number,default:0},
    name: {type: String, required: true, max: 100},
    lastname: {type: String, required: true,max:100},
    courseEnrolled:{type:String,required: true,max:100}
})

module.exports=mongoose.model("Student",SchoolManagement)