module.exports = (Sequelize, DataTypes) => {

    const User = Sequelize.define('User', {
            id: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, 
        {
            timestamps: false,
            tableName: 'users'
        }
    )

    return User
}