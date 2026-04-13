import { config } from './validate.config';

// app
const APP_PORT = config.get<string>('APP_PORT') ?? 1722;

//export
export {
  APP_PORT,
};