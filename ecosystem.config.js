module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // Nodejs application
    {
      name      : 'nodejs-todo',
      script    : 'server.js',
      env : {
          NODE_ENV: 'development',
          RUNNING_ENVIRO: 'Running on AWS IAAS',
          NODE_DB_Type: 'IAAS mongo instance',
          NODE_TODO_MONGO_DBCONNECTION: "mongodb://dansand-mongo-svr1:27017/todo"

        }
    }
  ]
}
