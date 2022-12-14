module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
  },
    {
      timestamps: false,
    }
  );

  return Client;
};