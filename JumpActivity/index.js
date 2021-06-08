/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 *
 * Before running this sample, please:
 * - run 'npm install durable-functions'
 */

module.exports = async function (context) {
    context.log(`Jump to conclusion: ${context.bindings.conclusion}!`);
    return `Jump to conclusion: ${context.bindings.conclusion}!`;
};
