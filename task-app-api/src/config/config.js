const env = process.env;

const config = {
    port: env.PORT || 5000,
    mongoDbUrl: env.MONGO_DB_URL || 'mongodb://localhost:27019',
    appDB: env.App_DB || 'task-app'
};

export default config;
