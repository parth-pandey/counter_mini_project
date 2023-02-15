module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define("posts", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  return posts;
};
