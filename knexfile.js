const credentials = require("./config/dbCredentials.js");
const { knexSnakeCaseMappers } = require("objection");

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: credentials.database,
      user: credentials.user,
      password: credentials.password,
    },
    ...knexSnakeCaseMappers()
  }

};
