const BL =require('../BL/blProducts')

module.exports=function productsRouter(app){
    app.get('/products',async(req,res)=>{
        try {
            const filter = req.query
            const p =await BL.read(filter)
            res.send(p)
        } catch (error) {
            res.send( error)
        }
    })

    app.post('/products',async(req,res)=>{
        try {
            const newProduct = req.body
            const p =await BL.create(newProduct)
            res.send(p)
        } catch (error) {
            res.send( error)
        }
    })
    app.put('/products',async(req,res)=>{
        try {
            const updateProduct = req.body
            const {id} = req.query
            const p =await BL.update(id,updateProduct)
            // console.log(p);
            res.send(p)
        } catch (error) {
            res.send( error)
        }
    })

    app.delete('/products',async(req,res)=>{
        try {
            const {id} = req.query
            const p =await BL.del(id)
            // console.log(p);
            res.send(p)
        } catch (error) {
            res.send( error)
        }
    })


}