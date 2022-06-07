const controllers = require('../DL/controllers/productController')
let id = 22

function readAll(){
    return controllers.readAll()
}
async function checkId(id){
    const item = await readAll(),
    it= item.find(i=>i._id==id)
    console.log(it);
    if(!it) throw 'id not exist'
}

function read(filter){
    return controllers.read(filter)
}

function create(prod){
    prod.id=id++
    return controllers.create(prod)
}
async function update(id,prod){
    await checkId(id)
    return controllers.update(id,prod)
}
async function del(id){
    await checkId(id)
    return controllers.del(id)
}



module.exports={read,create,update,del}