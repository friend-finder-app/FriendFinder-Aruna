// Update with your config settings.
const dbConnection = process.env.DATABASE_URL

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/friend.db3'
    },
    useNullAsDefault:true,
    migrations: {
      directory:'./database/migrations'
    },
    seeds: {
      directory:'./database/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/friendTest.db3'
    },
    useNullAsDefault:true,
    migrations: {
      directory:'./database/migrations'
    },
    seeds: {
      directory:'./database/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: dbConnection,
    useNullAsDefault:true,
    migrations: {
      directory:'./database/migrations'
    },
    seeds: {
      directory:'./database/seeds'
    }
  }

};
