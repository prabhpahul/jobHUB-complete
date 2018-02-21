
module.exports = {
  development: {
      dialect: 'postgres',
      username: 'prabhpahul',
      host: 'localhost',
      //password: 'root',
      port: 5432,
      database: 'timemanagementpro'
  },
  staging: {
    dialect: 'postgres',
    username: 'postgres',
    host: 'localhost',
    password: 'root',
    //port: 3211,
    database: 'managementpro'
  },
  production: {
    dialect: 'postgres',
    username: 'postgres',
    host: 'localhost',
    password: 'root',
    //port: 3211,
    database: 'managementpro'
  }
};
