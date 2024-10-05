const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost/meanstacktutorials';

module.exports = {
    remoteUrl : 'mongodb://node2:27017/node-todo',
    localUrl: mongodbUri
};
