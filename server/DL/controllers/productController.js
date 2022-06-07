const productModel = require('../models/productModel')

async function read(filter={}){
    const prod = await productModel.find({...filter,isActive:true}).populate({path:"category",select:["name"]})
    // console.log(filter);
    return prod
}

async function readAll(filter={}){
    const prod = await productModel.find(filter)
    console.log(prod);
    return prod
}
// readAll({_id: "629896ccf8818f14c69a0c7e"})

async function create(prod){
    const a = await productModel.create(prod)
    // console.log(a);
    return a
}

async function update(id,prod){
    const a = await productModel.findByIdAndUpdate(id,prod)
    // console.log(prod);
    return prod
}

async function del(id){
    const a = await productModel.findByIdAndUpdate(id,{isActive:false})
    // console.log(prod);
    return a
}


module.exports={read,create,update,del,readAll}
// let items = readAll()

// const arr =[
//     {
//       _id: "62987f43054b0d0fc80615fa",
//       name: "men's clothing",
//       __v: 0
//     },
//     {
//       _id: "62987f43054b0d0fc80615fb",
//       name: 'jewelery',
//       __v: 0
//     },
//     {
//       _id: "62987f43054b0d0fc80615fc",
//       name: 'electronics',
//       __v: 0
//     },
//     {
//       _id: "62987f43054b0d0fc80615fd",
//       name: "women's clothing",
//       __v: 0
//     }
//   ]
// //   console.log(arr[1]._id);
//   items = items.map(p=>{
//       return{
//           id:p.id,
//           title:p.title,
//           price:p.price,
//           description:p.description,
//           category:arr.find(c=>c.name==p.category)._id,
//           image:p.image,
//           unitInStock:p.rating.count
//         }
//     })
//     // console.log(items);

//     async function insertMeny (){
//     await productModel.insertMany(items)
// }

// insertMeny()