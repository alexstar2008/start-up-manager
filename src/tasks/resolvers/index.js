const { ValidationError } = require("apollo-server");
const dataSources = require("../data-sources");

const resolvers = {
    Query: {
        getPhases: (_, __, { dataSources }) => {
            return dataSources.phaseData.getPhases();
        }
    },
    Phase: {
        tasks: (parent) => {
            return dataSources.taskData.getTasks(parent.id);
        }
    },
    Mutation: {
        createPhase: async (_, args, { dataSources }) => {
            const { name } = args;
            await dataSources.phaseData.createPhase(name);
            return { success: true };
        },
        completeTask: async (_, args, { dataSources }) => {
            const { id } = args;
            await dataSources.taskData.setTaskCompletedStatus(id);
            const task = await dataSources.taskData.getTask(id);
            if (!task) {
                throw new ValidationError('Task is not found');
            }
            const { count } = await dataSources.taskData.hasPhaseUncompletedTasks(task.phase_id);
            if (Number(count) === 0) {
                await dataSources.phaseData.setPhaseCompletedStatus(phase_id);
            }
            return { success: true };
        },
        createTask: async (_, args, { dataSources }) => {
            const { name, phase_id } = args;
            await dataSources.taskData.createTask(name, phase_id);
            return { success: true };
        }
    }
};

module.exports = resolvers;