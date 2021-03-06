import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.ob8ee.mongodb.net:27017,cluster0-shard-00-01.ob8ee.mongodb.net:27017,cluster0-shard-00-02.ob8ee.mongodb.net:27017/DEVAPP?ssl=true&replicaSet=atlas-giwlj8-shard-0&authSource=admin&retryWrites=true&w=majority`;
   try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
    console.log('Database connected')
   } catch(error) {
       console.log('Error connecting to mongodb', error);
   }
    


}

export default Connection;