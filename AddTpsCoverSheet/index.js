/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 *
 * Before running this sample, please:
 * - run 'npm install durable-functions'
 */

const fs = require('fs');
const path = require('path');
const storage = require('azure-storage');
const crypto = require('crypto');

const blobServiceClient = storage.createBlobService(process.env['AzureWebJobsStorage']);

module.exports = function (context, filePath) {
    const id = crypto.randomBytes(20).toString('hex');
    const container = 'tpsreports';
    const base = path.parse(filePath).base;
    const blobPath = `${id}/${base}`;
    const outputLocation = `${container}/${id}`;

    blobServiceClient.createContainerIfNotExists(container, (error) => {
        if (error) {
            context.log('PC LOAD LETTER');
            throw error;
        }

        fs.stat(filePath, function (error, stats) {
            if (error) {
                context.log('PC LOAD LETTER');
                throw error;
            }

            context.log(`Copying '${filePath}' to '${outputLocation}'. Total bytes = ${stats.size}.`);

            const readStream = fs.createReadStream(filePath);
            blobServiceClient.createBlockBlobFromStream(container, blobPath, readStream, stats.size, function (error) {
                if (error) {
                    context.log('PC LOAD LETTER');
                    throw error;
                }

                context.log('Adding required TPS cover sheet');
                const blobName = `${id}/tps-report-coversheet.txt`;
                const content = 'TPS Report Coversheet';

                blobServiceClient.createBlockBlobFromText(container, blobName, content, function (error) {
                    if (error) {
                        context.log('PC LOAD LETTER');
                        throw error;
                    }

                    context.log('TPS upload complete!');
                    context.done(null, stats.size);
                });
            });
        });
    });
};