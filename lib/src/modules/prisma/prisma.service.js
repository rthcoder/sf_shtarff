"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("@prisma/client");
const child_process_1 = require("child_process");
const config_1 = require("../../config");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        const adapter = new adapter_pg_1.PrismaPg({
            connectionString: config_1.DATABASE_URL,
        });
        super({ adapter });
    }
    maxRetries = 10;
    retryDelay = 1500;
    async onModuleInit() {
        await this.connectWithRetry();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    async handleDisconnect() {
        await this.$disconnect();
        await this.connectWithRetry();
    }
    async connectWithRetry() {
        let retries = 0;
        while (retries < this.maxRetries) {
            try {
                await this.$connect();
                console.log('Prisma client successfully connected to the database.');
                return;
            }
            catch (error) {
                retries++;
                console.error(`Prisma client connection attempt ${retries} failed.`);
                if (retries >= this.maxRetries) {
                    console.error('Max retries reached. Could not connect to the database.');
                }
                await this.delay(this.retryDelay);
            }
        }
    }
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    exec() {
        (0, child_process_1.exec)('sudo systemctl restart postgresql', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map