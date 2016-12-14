import * as path from 'path';

const config = {
    // config options:
    env: process.env.ENV || 'development',
    port: 3002,

    // constants:
    CLIENT_APP_DIR: path.join(__dirname, '../../client')
};

export { config };