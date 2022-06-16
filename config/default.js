const port = 3000;

module.exports = {
  port,
  databases: {
    pg: {
      connection: `postgresql://postgres:root@${process.env.DB_PG_HOST || 'localhost'}:5432/postgres`,
    },
  },
};