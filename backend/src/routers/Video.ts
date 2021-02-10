import {Schema, model} from 'mongoose';

 
const VideoSchema = new Schema({

    title: {
        type: String,
        required: true, 
        trim: true
    }, 
    url: {
        type: String,
        trim: true,
        required: true,
        unique: true 
    },
    description: {
        type: String,
        
    }
},  {
        versionKey: false,
        timestamps: true
    });

export default model( 'Video', VideoSchema );