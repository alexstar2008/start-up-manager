const { SQLDataSource } = require("datasource-sql");

class TaskDataSource extends SQLDataSource {
    tableName = 'tasks';

    getTask(id) {
        return this.knex
            .select('id', 'phase_id', 'name', 'completed')
            .where({ id })
            .from(this.tableName)
            .first();
    }
    getTasks(phase_id) {
        return this.knex
            .select('id','name', 'completed')
            .where('phase_id', phase_id)
            .from(this.tableName);
    }
    createTask(name, phase_id) {
        return this.knex
            .insert({ name, phase_id })
            .into(this.tableName);
    }
    setTaskCompletedStatus(id) {
        return this.knex
            .update({ completed: true, updated_at: this.knex.fn.now() })
            .where('id', id)
            .into(this.tableName);
    }
    hasPhaseUncompletedTasks(phase_id) {
        return this.knex
            .count('*')
            .where({
                phase_id,
                completed: false
            })
            .from(this.tableName)
            .first();
    }
}

module.exports = TaskDataSource;