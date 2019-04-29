'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate(todo,options) {
        todo.user_id = options.id   
      },
    }
  });
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User, {foreignKey: 'user_id'})
  };
  return Todo;
};