/**
 * Temporary dummy deployment script.
 * It removes folder by ssh and copy the new one via scp
 *
 * Need to be rewritten with SSH2
 *
 * It works only on unix systems
 * And can't provide you full info about deployment
 * Use it carefully and at your own risk
 */

const
    util = require('util'),
    path = require('path'),
    exec = util.promisify(require('child_process').exec);

require('dotenv').config();

const colors = {
    success: '\x1b[32m%s\x1b[0m',
    error: '\x1b[31m%s\x1b[0m',
};

const
    userName = 'travis',
    remoteAddress = 'themezv.ru',
    remotePath = '/services/memebattle-front',
    folderForDelete = path.resolve(remotePath, 'dist'),
    localPath = path.resolve(__dirname, '..', 'dist');

console.log(folderForDelete)
console.log(localPath)

const deployStage = async () => {
    try {
        console.log('Removing public folder...');
        const {stdout, stderr} = await exec(
            `ssh -p 9022 -o StrictHostKeyChecking=no ${userName}@${remoteAddress} "rm -rf ${folderForDelete}"`
        );
        console.log(colors.success, 'Folder removed successfully');
    } catch (e) {
        console.log(colors.error, 'Error occurred while folder removing');
        console.log('Stack trace:', e);
        return false;
    }

    try {
        console.log('Copying public folder from local...');
        const {stdout1, stderr1} = await exec(
            `scp -P 9022 -r ${localPath} ${userName}@${remoteAddress}:${remotePath}`
        );
        console.log(colors.success, 'Folder copied successfully');
    } catch (e) {
        console.log(colors.error, 'Error occurred while folder copying');
        console.log('Stack trace:', e);
        return false;
    }

    return true;
};

const run = async () => {
    console.log('Start deployment');

    const isSuccessful = await deployStage();

    if (!isSuccessful) {
        console.log(colors.error, 'Deployment failed');
        return;
    }

    console.log(colors.success, 'Deployment finished');
};

run();
