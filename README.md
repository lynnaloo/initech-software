# Initech Software

Updating bank software for the 2000 switch.

## What are Durable Functions?

Durable Functions is an extension of [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview) that lets you write stateful functions in a serverless compute environment. Behind the scenes, the extension manages state, checkpoints, and restarts for you.

Durable Functions extension is built on top of the [Durable Task Framework](https://github.com/Azure/durabletask), an open-source library on GitHub that's used to build workflows in code

## Using Durable Functions to automate the Office Space

* Automatically add cover sheets to your TPS reports
* Jump-to-conclusions mat application
* [TODO] Superman III fractions of a penny aggregator
* [TODO] Bob Slydell's Initech downsizing algorithm
* [TODO] Payroll "glitch" fix
* [TODO] Corporate Accounts payable phone switchboard system
* [TODO] Cake purchasing calculation to fix the employee to cake ratio
* [TODO] Fire risk monitoring system
* [TODO] Minimum flair calculator

## Setup

* Create your own `local.settings.json` file for your functions:

```javascript
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "usedevelopmentstorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "node"
  }
}
```

## Install

* Install [Node LTS](https://nodejs.org/)
* Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
* Install [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v2)

* Clone this repository

```
$ git clone git@github.com:lynnaloo/initech-software.git
```

* Install libraries

```
$ cd initech-software
$ npm install
```

## Run Azure Functions locally:

```
$ func start
```

* Trigger HTTP client function:

```
http://[localhost:port]/orchestrators/TpsOrchestrator
```

## Deploy

* [Deploy using Azure CLI](https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-cli-node?tabs=azure-cli%2Cbrowser#create-a-local-function-project)
