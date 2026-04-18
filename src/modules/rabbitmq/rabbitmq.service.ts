import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RabbitmqService {
  private readonly logger = new Logger(RabbitmqService.name);

  async handleFineMessage(payload: unknown) {
    this.logger.log(`Received fine message: ${JSON.stringify(payload)}`);

    return {
      status: 'received',
      message: 'fine message accepted successfully',
      payload,
      receivedAt: new Date().toISOString(),
    };
  }
}
