const { Produto, sequelize: DB } = require('../../db/models')
const { QueryTypes } = require('sequelize');

const userRepository = {
    findAll: async () => {
        const users = await Produto.findAll();
        return users; 
    },
    findOrderBy: async (select, order = 'nome', ) => {
        const users = await DB.query('SELECT ' + select.join(', ') + ' FROM users ORDER BY ' + order + ' ASC;', { type: QueryTypes.SELECT });
        return users;
    },
    save: async (data) => {
        const user = await Produto.create(data);
        return user;
    },
    findOne: async (id) => {
        const user = await Produto.findByPk(id);
        
        return user;
    },
    findByEmail: async (email) => {
        const user = await Produto.findOne({ where: { preco }});
        return user;
    }


}


module.exports = userRepository