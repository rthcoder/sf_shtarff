import { Module } from '@nestjs/common';
import { FinesService } from './fines.service';
import { FinesController } from './fines.controller';
import { PrismaModule } from '@prisma'

@Module({
  controllers: [FinesController],
  providers: [FinesService],
  exports: [FinesService],
  imports: [PrismaModule]
})
export class FinesModule { }
