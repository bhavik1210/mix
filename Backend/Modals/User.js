const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    phonenumber:{
        type:Number,
        required:true
    },
    Followers:{
        type:Array,
    }
    ,
    Following:{
        type:Array,
    }
    ,
    profile:{
        type:String,
    },
    verified:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports=mongoose.model("User", UserSchema);