const credentials = require("./config/mysqlCredentials.js");
const { knexSnakeCaseMappers } = require("objection");

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      //host: credentials.host, // AWS
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
      //port: 3306 // AWS
    },
    ...knexSnakeCaseMappers()
  }

};
