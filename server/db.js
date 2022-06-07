require('dotenv').config()
const monggose =require('mongoose')
async function connectDB(){
    try {
        await monggose.connect(process.env.CONNECTION_STRING)
        console.log(`db is connected! status:${monggose.connection.readyState}`);
    } catch (error) {
        
    }
}
connectDB()