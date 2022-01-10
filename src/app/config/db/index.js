import mongoose from "mongoose";
async function connect(){
    try{
        await mongoose.connect('mongodb+srv://admin:7321nho132@cluster0.keglm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect successfully!!');
    } catch ( error ) {
        console.log('Connect failure!!');
    }
}
export default { connect }