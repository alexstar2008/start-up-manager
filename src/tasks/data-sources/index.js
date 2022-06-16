const config = require('config');
const PhaseDataSource = require('./phase');
const TaskDataSource = require('./task');

const knexConfig = {
    client: "pg",
    connection: config.databases.pg.connection
};

module.exports = {
    phaseData: new PhaseDataSource(knexConfig),
    taskData: new TaskDataSource(knexConfig)
};