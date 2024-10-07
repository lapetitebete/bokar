import path from 'path';

import dotenvFlow from 'dotenv-flow';

import { __dirname } from './dirname.js';

const envConfig = dotenvFlow.config({
    node_env: process.env.NODE_ENV,
    default_node_env: 'development',
    path: path.join(__dirname, 'env')
  });

export { envConfig }