# Start-up-manager application

**Archiecture of service** is based on GraphQL usage.
There are next building blocks: resolvers, data-sources.
To seperate business logic layer services can be used
to pass params from resolvers to data-sources like:
resolver -> service -> data-source.
<br/>



### GraphQL schema: [Schema](http://localhost:3000)

### Table of contents

- [Start-up-manager application](#start-up-manager-application)
    - [GraphQL schema: Schema](#graphql-schema-schema)
    - [Table of contents](#table-of-contents)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code style](#code-style)
  - [Feature List](#feature-list)
  - [TODO](#todo)
  - [Versioning](#versioning)
  - [Authors](#authors)

## Technologies

1. **Basic**

   | Type           |   Name   | Version |
   | -------------- | :------: | ------: |
   | Platform       | Node.js  | v16.15.x |
   | Framework      |   GraphQL    |  v16.5.x |

## Setup

**Prerequisites**:

1. _Required_. Installed Docker deamon.<br/>
   Install guide for [MacOS](https://docs.docker.com/desktop/mac/install/)

**Install steps**:

1.  docker-compose up
2.  Verify GraphQL up by localhost:3000 request


## Code style

We use three main configs for formatting:

1. .editorConfig - config for IDE
2. .prettierrc - auto format code
3. .eslintrc - lint code style

**Pre commit hook** is used to format & lint code.

[Airbnb Code Style](https://github.com/airbnb/javascript#functions)

[Prettier](https://prettier.io/)

## Feature List

There is implemented next list of modules in **Start-up manager App** now:

1. Create new phase
2. Fill phase with tasks
3. Complete task & autocomplete phase once all tasks are completed

## TODO
1. Implement extra param validation for requests
2. Add integration testing
3. Define caching approach for DB

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

| Name                  | Profile |
| --------------------- | ----------------------------------------: |
| Oleksii Starovoitenko | [GitHub](https://github.com/alexstar2008) |