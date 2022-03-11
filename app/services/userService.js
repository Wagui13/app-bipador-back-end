const { v4: uuid} = require('uuid')
const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');

const userService = {
    save: async (data) => {
        const id = uuid();

        const password = bcrypt.hashSync(data.password, 10);
        
        const userExist = await userRepository.findByEmail(data.email);

        if (userExist != null) {
            console.log('Email já existe')
            throw {error: { message: 'Email já existe'}}
        }

        let newUser = {
            id,
            name: data.name,
            email: data.email,
            password
        }

        const user = await userRepository.save(newUser)

        return user
    },
    getOne: async (id) => {
        if (!id) {
            throw {error: { message: 'ID inválido'}};
        }

        const user = await userRepository.findOne(id);

        if (user == null) {
            throw {error: { message: 'User não encontrao'}}
        }

        return user
    }

}

module.exports = userService;