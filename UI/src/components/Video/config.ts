import dotenv from 'dotenv'
dotenv.config()

export default {
    API_ADDRESS: process.env.API_ADDRESS,
    PORT: process.env.PORT
}