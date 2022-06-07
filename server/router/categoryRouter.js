const BL =require('../BL/blCategory')

module.exports=function productsRouter(app){
   

    app.get('/categories',async(req,res)=>{
        try {
            const c = await BL.read()
            res.send(c)
        } catch (error) {
            res.send( error)
        }
    })

    app.post('/categories',async(req,res)=>{
        try {
            const newCategory = req.body
            const c =await BL.create(newCategory)
            res.send(c)
        } catch (error) {
            res.send( error)
        }
    })
    app.put('/categories',async(req,res)=>{
        try {
            const updateCategory = req.body
            const {id} = req.query
            const c =await BL.update(id,updateCategory)
            console.log(c);
            res.send(c)
        } catch (error) {
            res.send( error)
        }
    })

    app.delete('/categories',async(req,res)=>{
        try {
            const {id} = req.query
            const c =await BL.del(id)
            // console.log(c);
            res.send(c)
        } catch (error) {
            res.send( error)
        }
    })

}