const { SQLDataSource } = require("datasource-sql");

/**
 * @todo Add caching to the methods
 */
class PhaseDataSource extends SQLDataSource {
    tableName = 'phases';
    getPhases() {
        return this.knex
            .select('id', 'name', 'completed')
            .from(this.tableName);
    }
    createPhase(name) {
        return this.knex
            .insert({ name })
            .into(this.tableName);
    }
    setPhaseCompletedStatus(id) {
        return this.knex
            .update({ completed: true, updated_at: this.knex.fn.now() })
            .where('id', id)
            .into(this.tableName);
    }
}

module.exports = PhaseDataSource;