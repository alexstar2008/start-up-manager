const config = require('config');
const logger = require('./src/libs/logger');
const appInstance = require('./src/app');

class Server {
  constructor() {
    this.port = config.get('port');
  }

  async start() {
    await appInstance.listen({ port: this.port });
    logger.info(`Server started on port:${this.port}`);
  }
}

module.exports = Server;
