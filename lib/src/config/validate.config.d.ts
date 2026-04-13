import 'dotenv/config';
import { ConfigService } from '@nestjs/config';
export declare let config: ConfigService<Record<string | symbol, unknown>, false>;
declare class EnvironmentVariables {
    APP_PORT: string;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
