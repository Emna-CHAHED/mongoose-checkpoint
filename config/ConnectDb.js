const mongoose = require('mongoose');

const ConnectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:5kPt6i5Ly1ehZWAj@cluster0.12wnw.mongodb.net/contactDatabase?retryWrites=true&w=majority&appName=Cluster0'); 
           console.log('You are connected successfully to the database');
            } catch (error){ 
            console.log(error);
        }
    }
module.exports = ConnectDb;

//5kPt6i5Ly1ehZWAj

// module.exports = ConnectDb;
