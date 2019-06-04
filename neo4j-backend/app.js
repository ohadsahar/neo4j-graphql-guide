const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const { v1 } = require('neo4j-driver');
const config = require('./utils/config');
const chalk = require('chalk');
const morgan = require('morgan');
const log = require('./utils/logger');
const mergedSchema = require('./utils/schema.util');



const PORT = process.env.PORT || 4000;
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const app = express();
const driver = v1.driver(
  config[env].neoDB.uri,
  v1.auth.basic(
    config[env].neoDB.username, config[env].neoDB.password,
  ),
);

const isDev = process.env.NODE_ENV !== 'production';

const server = new ApolloServer({
  schema: mergedSchema,
  context: ({ req }) => ({
    req,
    driver,
  }),
  introspection: true,
  playground: isDev,
});

// Middle wares
log.info('app: Loading middle wares');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(config[env].cors));
log.info(`app: Setting up morgan level ${config[env].logger.morganLevel}`);
app.use(morgan(config[env].logger.morganLevel, { stream: log.stream }));
server.applyMiddleware({ app});

// Start the server
app.listen(PORT, () => {
  log.info(chalk.magenta(`App listening on http://localhost:${PORT}${server.graphqlPath}`));
});

// Testing module
module.exports = app;