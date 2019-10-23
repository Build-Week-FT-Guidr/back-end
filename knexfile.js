// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/newGuidr.db3"
    },
    useNullAsDefault: true,
    debug: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    },
  },


  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds'
    },
  },
};