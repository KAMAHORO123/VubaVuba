
const { error } = require('console');
const mongoose= require('mongoose');

const dbConnection= mongoose.connect('mongodb://localhost:27017/VubaVuba')
.then(()=>{
    console.log('the connection to database is set')
})
.catch((error)=>{
    console.log('connection to mongo failed')
})

module.exports= dbConnection;



// const { MongoClient } = require('mongodb');

// module.exports = {
//     connectToDb: (cb) => {
//         MongoClient.connect('mongodb://localhost:27017/VubaVuba')
//             .then((client) => {
//                 dbConnection = client.db();
//                 return cb();
//             })
//             .catch((err) => {
//                 console.log(err);
//                 return cb(err);
//             });
//     },
//     getDb: () => dbConnection
// };