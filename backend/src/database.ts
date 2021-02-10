
import mongoose , {ConnectOptions} from 'mongoose';
import config from './config'


(async () => {

    try {
        const mongooseConnection: ConnectOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
       const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseConnection );
        console.log('database is on: ', db.connection.name );
    } catch (error) {
        console.log(error);
    }
})()