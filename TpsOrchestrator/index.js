/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by a starter function.
 *
 * Before running this, please:
 * - run 'npm install durable-functions'
 */

const df = require('durable-functions');

module.exports = df.orchestrator(function*(context){
    // Get all TPS Reports from directory
    const files = yield context.df.callActivity('CheckTpsActivity');

    // Add a coversheet and push file to storage
    const tasks = [];
    for (const file of files) {
        tasks.push(context.df.callActivity('AddTpsCoverSheet', file));
    }

    // Wait for everything to complete and then notify Lumbergh
    const results = yield context.df.Task.all(tasks);
    const totalBytes = results.reduce((prev, curr) => prev + curr, 0);
    yield context.df.callActivity('SendManagerMemo', 'Lumbergh');

    return totalBytes;
});
