import { config } from 'dotenv';
import { DevSiteEnvironment } from './environment.interface';

config();

export const environment: DevSiteEnvironment = {
  production: true,
  butter: '9ffd3dad4fd54423ad22bc3ce3e1a2fd6bbc9081'
};
