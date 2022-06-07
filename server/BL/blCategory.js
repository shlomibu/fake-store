const controllers =require('../DL/controllers/caegoryController')

function readAll(filter){
    return controllers.readAll(filter)
}
async function checkId (id){
    // console.log(id);
    const category = await readAll({_id:id})
    // console.log(id);
    // const cat= category.find(c=>c._id==id)
    if(!category.length) throw 'id not exist'
}
function read(){
    return controllers.read()
}
function create(category){
    return controllers.create(category)
}
function update(id,category){
    checkId(id)
    return controllers.update(id,category)
}
async function del(id){
    await checkId(id)
    return controllers.del(id)
}
module.exports={read,create,update,del}