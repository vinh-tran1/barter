export const getUsers = async (req, res) => {
    res.status(200).json({ message: "get all users"});
}

export const getUserById = async (req, res) => {
    res.status(200).json({ message: `get user ${req.params.id}`});
};

export const createUser = async (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: `create user`});
};

export const udpateUser = async (req, res) => {
    res.status(200).json({ message: `update user ${req.params.id}`});
};

export const deleteUser = async (req, res) => {
    res.status(200).json({ message: `delete user ${req.params.id}`});
};
