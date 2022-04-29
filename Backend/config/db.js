const mongoose = require('mongoose');
const MONGO_URI= "mongodb+srv://user123:user123@clusconst MONGO_URIter0.yjpzt.mongodb.net/loginform";
try {
    const conn = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,  //[mongodb ko lagta hai predefind hai]
        useUnifiedTopology: true
    });
    console.log(`Mongo DB is connected!!! ${conn.connection.host} `);

} catch(error) {
    console.error('Mongo DB connection Failed', error);
    process.exit(1);
}

module.exports = mongoose;