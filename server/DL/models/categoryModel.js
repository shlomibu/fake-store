const mongoose =require('mongoose'),
categorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    isActiv:{
        type:Boolean,
        default:true
    }
}
)

const catModel=mongoose.model("categories",categorySchema)
module.exports= catModel


