const express=require('express');
const morgan=require('morgan');
// const product =require('./routes/posts')
const student=require('./routes/student')
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();
const app =express();


mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Database Connected!")
}).catch((err)=>{
console.log(err);
})

app.use(morgan('dev'))
// app.use(myOwnMiddleware)
// app.use('/',postRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
// app.use('/product',product)
app.use('/student',student)

const port =process.env.PORT || 8001;
app.listen(port,()=>{
console.log(`the application is running at: ${port}`);
});