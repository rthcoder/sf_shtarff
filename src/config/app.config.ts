import { config } from './validate.config';

// app
const APP_PORT = config.get<string>('APP_PORT') ?? 1722;

// rabbitmq
const RABBITMQ_URL = config.get<string>('RABBITMQ_URL') ?? '';
const RABBITMQ_LOGIN = config.get<string>('RABBITMQ_LOGIN') ?? '';
const RABBITMQ_PASSWORD = config.get<string>('RABBITMQ_PASSWORD') ?? '';
// const RABBITMQ_QUEUE = config.get<string>('RABBITMQ_QUEUE') ?? 'main_queue';

function buildRabbitMqAmqpUrl() {
  try {
    const sourceUrl = new URL(RABBITMQ_URL);
    const protocol = sourceUrl.protocol.startsWith('amqp') ? sourceUrl.protocol : 'amqp:';
    const port = sourceUrl.port && sourceUrl.port !== '15672' ? sourceUrl.port : '5672';
    const username = encodeURIComponent(RABBITMQ_LOGIN);
    const password = encodeURIComponent(RABBITMQ_PASSWORD);

    return `${protocol}//${username}:${password}@${sourceUrl.hostname}:${port}`;
  } catch {
    return `amqp://${encodeURIComponent(RABBITMQ_LOGIN)}:${encodeURIComponent(RABBITMQ_PASSWORD)}@localhost:5672`;
  }
}

const RABBITMQ_AMQP_URL = buildRabbitMqAmqpUrl();


//export
export {
  APP_PORT,
  RABBITMQ_URL,
  RABBITMQ_LOGIN,
  RABBITMQ_PASSWORD,
  RABBITMQ_AMQP_URL,
};
