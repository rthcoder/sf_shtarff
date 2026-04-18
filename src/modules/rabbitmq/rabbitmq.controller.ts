import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { Controller, Logger } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';

@Controller()
export class RabbitmqController {
  private readonly logger = new Logger(RabbitmqController.name);

  constructor(private readonly rabbitmqService: RabbitmqService) { }

  @MessagePattern('fine')
  async handleFineMessage(@Payload() payload: unknown, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const message = context.getMessage();

    try {
      const result = await this.rabbitmqService.handleFineMessage(payload);
      channel.ack(message);

      return result;
    } catch (error) {
      this.logger.error('Failed to process fine message', error instanceof Error ? error.stack : undefined);
      channel.nack(message, false, false);
      throw error;
    }
  }

  @EventPattern('fine_created_event') // SIZ TOPGAN PATTERN
  handleFineCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('--- YANGI XABAR KELDI ---');
    console.log('Ma’lumot:', data);
    
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    try {
      // RabbitMQ-dagi texnik ma'lumotlarni ko'rish uchun (ixtiyoriy)
      console.log('Queue:', context.getPattern());
      channel.ack(originalMsg)

    } catch (error) {
      channel.nack(originalMsg)
    }
  }
}
