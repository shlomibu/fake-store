const mongoose= require('mongoose'),
productSchema = new mongoose.Schema(
    {
        id:{
            required:true,
            type:Number,
            unique:true
        },
        title:{
            required:true,
            type:String 
        },
        price:{
            required:true,
            type:Number
        },
        description:{
            required:true,
            type:String
        },
        category:{
            type: mongoose.Types.ObjectId,
            ref:"categories",
            required:true
        },
        image:{
            required:true,
            type:String
        },
        unitInStock:{
            required:true,
            type:String
        },
        isActive:{
            type:Boolean,
            default:true
        }
    }
)

module.exports = mongoose.model("products",productSchema)