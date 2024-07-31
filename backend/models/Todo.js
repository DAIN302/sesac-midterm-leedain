const todoModel = (sequelize, DataTypes) => {
    const Todo = sequelize.define(
        "todo",
        {
            id : {
                type : DataTypes.INTEGER,
                primaryKey : true,
                allowNull : false,
                autoIncrement : true
            },
            title : {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            done : {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue : false
            }
        },
        {
            freezeTableName: true,
        }
    )
    return Todo;
}

module.exports = todoModel;