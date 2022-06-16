// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: `postgresql://postgres:root@${process.env.DB_PG_HOST || 'localhost'}:5432/postgres`,
  },
};
