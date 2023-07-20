import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const URL=process.env.MONGODB_URI



const dbConnect=async()=>{

    try{
        await mongoose.connect(URL,
            { useUnifiedTopology: true, useNewUrlParser: true, },

            console.log("Database Connected Successfully")
            
        )

    }
    catch(error){

        console.log("Error", error.message)

    }

}

export default dbConnect;