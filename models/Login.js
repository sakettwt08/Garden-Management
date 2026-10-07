const mong = require("mongoose")

const mySchema = new mong.createSchema({
    FirstName:{
        type:String,
        required:true,
    },
    SecondName:{
        type:String
    },
    Gender:{
        type:String,
        enum:["male","female","other"],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String
    }
}
)

const USER = new mongoose.model("UserData",mySchema)

module.exports={USER}