const mongoose= require('mongoose')



const link="mongodb+srv://admin:task35@task35.i69g3.mongodb.net/"
const mongoConnect=()=>{
    try{
        mongoose.connect(link)
        console.log("db is connected")
    }
    catch(err){
        console.log("this is error", err)
    }
}


module.exports = mongoConnect