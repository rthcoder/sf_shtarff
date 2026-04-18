import { Module } from '@nestjs/common';
import { PrismaModule, FinesModule, RabbitmqModule } from '@modules';
import { ConfigModule } from '@nestjs/config';
import { validate } from '@config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
      envFilePath: '.env',
    }),
    PrismaModule,
    FinesModule,
    RabbitmqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
