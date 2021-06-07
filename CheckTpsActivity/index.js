/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 *
 * Before running this sample, please:
 * - run 'npm install durable-functions'
 */

const readdirp = require('readdirp');

module.exports = function (context) {
    context.log('Searching for TPS Reports...');
    const allFilePaths = [];

    readdirp('./tpsreports', {fileFilter: '*.txt', alwaysStat: true})
        .on('data', (entry) => {
            const fullPath = entry.fullPath;
            context.log(fullPath);
            allFilePaths.push(fullPath);
            context.log(`Found ${allFilePaths.length} in TPS Reports Directory.`);
        })
        .on('error', error => context.log('PC LOAD LETTER', error))
        .on('end', () => {
            context.log('done');
            context.done(null, allFilePaths);
        });
};
