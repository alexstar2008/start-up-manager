
module.exports = `
    type Mutation {
        completeTask (id: Int!): SuccessResult!
        createTask (name: String!, phase_id: Int!): SuccessResult!
        createPhase (name: String!): SuccessResult!
    }
`;