import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    more:{
        type:String
    },
})

const Contact = mongoose.models.Contact || mongoose.model("Contact",contactSchema);

export default Contact;