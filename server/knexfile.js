// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://postgres:docker@localhost/movies",
    
  },

  staging: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "movies",
      user: "postgres",
      password: "docker",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
  },
};