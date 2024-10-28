const { Sequelize } = require('sequelize');

// Configuração do Sequelize para conectar ao banco de dados PostgreSQL
const sequelize = new Sequelize('azjfgsms', 'azjfgsms', 'foQUTkO5aTYkpCoUkiG1k4IsJCn9kmk2', {
  host: 'kashin.db.elephantsql.com',
  dialect: 'postgres',
});

// Teste de conexão
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Chame a função para testar a conexão
testConnection();

module.exports = sequelize;
