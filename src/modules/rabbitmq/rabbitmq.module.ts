import { Module } from '@nestjs/common';
import { FinesModule } from '../fines';
import { RabbitmqController } from './rabbitmq.controller';
import { RabbitmqService } from './rabbitmq.service';

@Module({
  imports: [FinesModule],
  controllers: [RabbitmqController],
  providers: [RabbitmqService],
  exports: [RabbitmqService],
})
export class RabbitmqModule {}
