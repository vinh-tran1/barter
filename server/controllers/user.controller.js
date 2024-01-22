import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
}

export const getUserById = async (req, res) => {

    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        res.status(200).send(user);

    } catch (err) {
        res.status(404).send(`cannot find user ${userId}`);
    }
    
};

export const createUser = async (req, res) => {
    const { userName, email, password, bio } = req.body;
    
    const newUser = await User.create({
       userName: userName,
       email: email,
       password: password,
       bio: bio
    });

    res.status(200).send(newUser);
};

export const updateUser = async (req, res) => {

    const userId = req.params.id;

    try {
        // need to add checks on if the fields are valid

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send(`user not found ${userId}`);
        }

        const updatedUser = await User.findByIdAndUpdate(userId, req.body);

        if (!updatedUser) {
            return res.status(404).send(`error updating user ${userId}`);
        }

        res.status(200).send(updatedUser);

    } catch (err) {
        res.status(404).send(`failed updating user ${userId}`);
    }
};

export const deleteUser = async (req, res) => {

    const userId = req.params.id;

    try {
        // need to add checks on if the fields are valid
        
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send(`user not found ${userId}`);
        }

        await User.findByIdAndDelete(userId);

        res.status(200).send(userId);

    } catch (err) {
        res.status(404).send(`failed deleting user ${userId}`);
    } 
};
