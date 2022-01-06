

module.exports = (sequelize, DataTypes) => {

    const user = sequelize.define("crudtable", {
        name: {
            type: DataTypes.STRING,
            notNull: true,
            required: true
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            unique: true,
            notNull: true,
        },
        product:{
            type: DataTypes.STRING,
            notNull: true,
            required: true
        },
        product_qty:{
            type: DataTypes.INTEGER,
            defaultValue:0,
            notNull: true,
            required: true 
        }
    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })

    return user;

}