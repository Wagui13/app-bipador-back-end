const { v4: uuid} = require('uuid')
const bcrypt = require('bcrypt');
const produtoRepository = require('../repositories/produtoRepository');

const userService = {
    save: async (data) => {
        // const id = uuid();

        // const password = bcrypt.hashSync(data.password, 10);
        
        // const userExist = await produtoRepository.findByEmail(data.email);

        // if (userExist != null) {
        //     console.log('Email já existe')
        //     throw {error: { message: 'Email já existe'}}
        // }

        // let newUser = {
        //     id,
        //     name: data.name,
        //     email: data.email,
        //     password
        // }

        // const user = await produtoRepository.save(newUser)
        // const user = await produtoRepository.save(newUser)

        // return user
    },
    getOne: async (id) => {
        if (!id) {
            throw {error: { message: 'ID inválido'}};
        }

        const user = await produtoRepository.findOne(id);

        // console.log("service: " + user);
        // if (user == null) {
        //     throw {error: { message: 'User não encontrao'}}
            
        // }
        // console.log("service: " + user);
        return user
    }

}

module.exports = userService;