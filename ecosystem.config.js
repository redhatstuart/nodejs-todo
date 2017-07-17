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
      env_production : {
        NODE_ENV: 'development'
      }
    }
  ]
}
