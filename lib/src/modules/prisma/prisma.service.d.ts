import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor();
    private readonly maxRetries;
    private readonly retryDelay;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    handleDisconnect(): Promise<void>;
    private connectWithRetry;
    private delay;
    private exec;
}
