import User from "../Model/userModel.js";


export const addUser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub });

        if(exist) {
            response.status(200).json('user already exists');
            return;
        }

        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getUser = async (request, response) => {

    console.log(request.body)
    try {
        const user = await User.find({});
        console.log("login suceess", user)

        
        response.status(200).json(user);
    } catch (error) {
        response.status(500).json(error);
    }
}