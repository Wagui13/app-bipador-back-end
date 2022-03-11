const { User, sequelize: DB } = require('../../db/models')
const { QueryTypes } = require('sequelize');

const userRepository = {
    findAll: async () => {
        const users = await User.findAll();
        return users; 
    },
    findOrderBy: async (select, order = 'name', ) => {
        const users = await DB.query('SELECT ' + select.join(', ') + ' FROM users ORDER BY ' + order + ' ASC;', { type: QueryTypes.SELECT });
        return users;
    },
    save: async (data) => {
        const user = await User.create(data);
        return user;
    },
    findOne: async (id) => {
        const user = await User.findByPk(id);
        return user;
    },
    findByEmail: async (email) => {
        const user = await User.findOne({ where: { email }});
        return user;
    }


}


module.exports = userRepository