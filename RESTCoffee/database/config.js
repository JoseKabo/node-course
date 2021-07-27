const mongoose = require('mongoose');


const dbCnn = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Success connected');
    } catch (error) {
        console.log(error);
        throw new Error('Error db connection');
    }
}

module.exports = {
    dbCnn
}