const userRepository = require("../repositories/userRepository");
const userService = require("../services/userService");

const userController = {
    index: async (req, res) => {
        const users = await userRepository.findAll();
        return res.json(users);
    },

    store: async (req, res) => {
        const data = req.body

        // const user = await userService.save(data);
        console.log(data);

        return res.status(201).json(user)  
    },
    show: async (req, res) => {
        const {id} = req.params

        const user = await userService.getOne(id);

        return res.status(200).json(user)  
    }

}

module.exports = userController