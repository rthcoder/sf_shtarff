import { Injectable, Logger } from '@nestjs/common';
import { FinesService } from '../fines/fines.service';
import { FineCreatedMessageDto } from '@interfaces';

@Injectable()
export class RabbitmqService {
  private readonly logger = new Logger(RabbitmqService.name);

  constructor(private readonly finesService: FinesService) {}

  // async handleFineMessage(payload: unknown) {
  //   if (!Array.isArray(payload) || payload.length === 0) {
  //     throw new BadRequestException('RabbitMQ payload array bo`lishi kerak.');
  //   }

  //   this.logger.log(`Received fine batch with ${payload.length} items.`);

  //   const fines: IncomingFinePayload[] = [];
  //   const missingFines: IncomingFinePayload[] = [];

  //   for (const item of payload) {
  //     if (!item || typeof item !== 'object' || Array.isArray(item)) {
  //       throw new BadRequestException('Har bir element object bo`lishi kerak.');
  //     }

  //     const fine = item as IncomingFinePayload & {
  //       exists?: boolean;
  //       isExists?: boolean;
  //       vehicleExists?: boolean;
  //     };

  //     const exists = fine.vehicleExists ?? fine.exists ?? fine.isExists;

  //     if (typeof exists !== 'boolean') {
  //       throw new BadRequestException(
  //         'Har bir elementda true/false qiymatli exists, isExists yoki vehicleExists field bo`lishi kerak.',
  //       );
  //     }

  //     if (exists) {
  //       fines.push(fine);
  //     } else {
  //       missingFines.push(fine);
  //     }
  //   }

  //   if (fines.length > 0) {
  //     await this.finesService.createManyFines(fines);
  //   }

  //   if (missingFines.length > 0) {
  //     await this.finesService.createManyMissingFines(missingFines);
  //   }

  //   return {
  //     total: payload.length,
  //     fineCount: fines.length,
  //     missingCount: missingFines.length,
  //   };
  // }

  async handleNewFines(data: FineCreatedMessageDto) {
     
  }
}
