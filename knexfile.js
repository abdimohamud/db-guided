// Update with your config settings.

module.exports = {
  //config for development environment db connection
  development: {
    client: "sqlite3", // db driver
    connection: {
      filename: "./database/food.db3",
    },
    useNullAsDefault: true,
  },
  //config for production environment db connection
  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
