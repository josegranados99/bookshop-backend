const getUser = (req, res) => {
    res.json({
        message: "Get User"
    });
};

const createUser = (req, res) => {
    res.json({
        message: "Create User"
    });
};

const updateUser = (req, res) => {
    res.json({
        message: "Update User"
    });
};

const deleteUser = (req, res) => {
    res.json({
        message: "Delete User"
    });
};

export default {
    getUser,
    createUser,
    updateUser,
    deleteUser
};