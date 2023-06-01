import connectDb from "../../utils/conn"
import Contact from "@/models/contact";

export default async function handler(req, res) {

    if(req.method === "POST"){

        const { name, email, phone, more } = req.body;
        try {
            await connectDb();
            const contact = await Contact.create({name, email, phone, more });
            
            res.status(200).json({success:true,msg:"Message send successfully"});
        } catch (err) {
            res.status(400).json({success:false,msg:"Something went's wrong"});
        }
        
    }else{
        res.json({msg:"The method must be post"});
    }
    
}