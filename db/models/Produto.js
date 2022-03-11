module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define('Produto',{
        id_produto:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome: DataType.STRING,
        preco: DataType.INTEGER,
        quantidade: DataType.INTEGER
              
    }, {
        tableName: 'produto',
        timestamps: false
    })
    return Produto
}