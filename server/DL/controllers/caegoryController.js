const categoryModel = require ('../models/categoryModel')

async function read(){
    const c =await categoryModel.find({isActiv:true})
    // console.log(c);
    return c
}

async function readAll(filter={}){
    // console.log('1');
    const c =await categoryModel.find(filter)
    console.log(c);
    return c
}
// readAll({_id:"62987f43054b0d0fc80615fd"})

async function create(category){
    const a = await categoryModel.create(category)
    // console.log(a);
    return a
}

async function update(id,category){
    const a = await categoryModel.findByIdAndUpdate(id,category)
    return a
}

async function del(id){
    const a = await categoryModel.findByIdAndUpdate(id,{isActiv:false})
    // console.log(category);
    return a
}


module.exports={read,create,update,del,readAll}














// const cat = require('../models/cat.json')

// const m =cat.map(c=>{
//     return{name:c}})


// async function insertMeny (){
//     await categoryModel.insertMany(m)
// }

// insertMeny()