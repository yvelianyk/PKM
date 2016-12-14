import * as path from 'path';

const config = {
    // config options:
    env: process.env.ENV || 'development',
    port: 3000,

    // constants:
    CLIENT_APP_DIR: path.join(__dirname, '../../client')
};

export { config };