const Sequelize = require('sequelize');
const sequelize = new Sequelize ('DB', 'root', '146534',
{host: "localhost",
    dialect:'mariadb'
});

module.exports = sequelize;

sequelize.authenticate()
.then(function(){
	console.log('Conexão com o mariaDB realizada com sucesso!');
}) 
.catch(function(){
	console.log('Erro ao conectar com o banco de dados');
}); 

module.exports = sequelize;