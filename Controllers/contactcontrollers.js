const ContactSchema = require ('../Model/Contact');

const getContactById = async(req, res)=>{
    try{
        const {id} = req.params;
        console.log("id", id);
        const contact = await ContactSchema.findById(id);
        res.status(200).json({msg:"contact", contact});
    } catch(error){
        console.log(error);
        res.send('You have a problem');
    }
};
const getAllContacts = async(req, res)=>{
    try{
        const contacts = await ContactSchema.find();
        res.status(200).json({msg:"all contacts :", contacts});
    }catch(error){
        console.log(error);
        res.send('You have a problem');
    }
}

const addNewcontact= async(req,res)=>{
    try {
        const newcontact = new ContactSchema(req.body);
        console.log("new contact",req.body);
        await newcontact.save();
        res.status(200).json({msg:'you added new contact',newcontact})
    } catch (error) {
        console.log(error);
        res.send('you have a problem');
    }
};

const updateContact = async(req,res)=>{
    try {
        const {id} = req.params;
        console.log("id", id);
        const updateContact = await ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}});
        console.log("update contact",updateContact);
    res.status(200).json({msg:'contact updated',updateContact});
} catch(error){
        console.log(error);
        res.send('you have a problem');
    }
};
module.exports={addNewcontact, getAllContacts,getContactById,updateContact};
