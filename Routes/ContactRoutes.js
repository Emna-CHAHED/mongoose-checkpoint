const express = require('express');
const {addNewcontact, getAllContacts, getContactById, updateContact}=require('../Controllers/contactcontrollers');

const ContactRoute = express.Router();

ContactRoute.use(express.json());


////http://localhost:5003/contact/getContactById/:id
ContactRoute.get('/contact/getContactById/:id',getContactById);

//route update contact

//http://localhost:5003/contact/updateContact/:id
ContactRoute.put('/contact/updateContact/:id',updateContact);


//route get all contact
//http://localhost:5003/contact/getAll
ContactRoute.get('/contact/getAll',getAllContacts);

//route post contact

//http://localhost:5003/contact/addContact

ContactRoute.post('/contact/addContact',addNewcontact,updateContact);

module.exports = ContactRoute;