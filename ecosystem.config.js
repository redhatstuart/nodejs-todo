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
<<<<<<< HEAD
      env : {
        NODE_ENV: 'development',
        NODE_DB_Type: 'iaas mongo instance',
        NODE_TODO_MONGO_DBCONNECTION: "mongodb://dansand-mongo-svr1:27017/todo"
      }
    }
  ]
}
=======
      env_production : {
        NODE_ENV: 'development'
      }
    }
  ]
}
>>>>>>> 5fbaabc4248188327b5f19d4ff1c627060806c49
