/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 *
 * Before running this sample, please:
 * - run 'npm install durable-functions'
 */

const df = require('durable-functions');

module.exports = df.orchestrator(function* (context) {
    const outputs = [];

    outputs.push(yield context.df.callActivity('JumpActivity', '???'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Jump Again'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Strike Out'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Could Be'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Loose One Turn'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Yes!'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'No!'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Accept It'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Go Wild'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'One Step Back'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Think Again'));
    outputs.push(yield context.df.callActivity('JumpActivity', 'Moot!'));

    context.log(outputs);
    return outputs;
});
