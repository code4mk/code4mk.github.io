---
description: Use of environment variable in circleci.
keywords: circleci, circleci-101
title: Circleci environemnt variable feature.
toc_max:  4
---

## environment variable
Most of all ci-cd platform has enviornment feature.Circleci also has robust environent variable. 

## Type of environment variable:
1. root `job` block
2. individual `run` block
3. context (secret) - load from circleci server.
4. project level env - load from circleci server

## Access env variable

* `"${THE_ENV_VAR_NAME}"`, or `$THE_ENV_VAR_NAME`

## env inside `job` block

```yml
job:
  build:
    docker:
      - image: cimg/base:2022.04-20.04
    environment:
      THE_ENV_VAR_NAME: "set environemnt inside job"
```


## env inside  `run` block

```yml
- run:
  name: Print env variable
  environemnt:
    THE_ENV_VAR_NAME: "set environemnt inside run"
  command: |
  echo "${THE_ENV_VAR_NAME}"
```

## set env variable inside bash

```
echo 'export THE_NAME=value' >> $BASH_ENV
```

## env from context

context is circleci group of environment. need to load context 

* flow: dashboard -> organization settings -> contexts

load context inside `config.yml`

```yml
workflows:
  version: 2
  build_project:
    jobs:
      - build:
          # context environment. load from circleci server
          context: your_context_name

jobs:
  build:
    .....
    steps:
      - run:
        name: access context variable
        command: |
        echo $YOUR_CONTEXT_VARIABLE_NAME
```

# default variables

* BASH_ENV
* CI
* CIRCLECI
* CIRCLE_BRANCH
* CIRCLE_BUILD_NUM
* CIRCLE_BUILD_URL
* CIRCLE_COMPARE_URL
* CIRCLE_JOB
* CIRCLE_NODE_INDEX
* CIRCLE_NODE_TOTAL
* CIRCLE_PREVIOUS_BUILD_NUM
* CIRCLE_PROJECT_REPONAME
* CIRCLE_PROJECT_USERNAME
* CIRCLE_REPOSITORY_URL
* CIRCLE_SHA1
* CIRCLE_SHELL_ENV
* CIRCLE_STAGE
* CIRCLE_USERNAME
* CIRCLE_WORKFLOW_ID
* CIRCLE_WORKFLOW_JOB_ID
* CIRCLE_WORKFLOW_UPSTREAM_JOB_IDS
* CIRCLE_WORKFLOW_WORKSPACE_ID
* CIRCLE_WORKING_DIRECTORY

## resources

* [environment-variables circleci](https://circleci.com/docs/2.0/env-vars#built-in-environment-variables)
