"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionFilter = AllExceptionFilter_1 = class AllExceptionFilter {
    logger = new common_1.Logger(AllExceptionFilter_1.name);
    catch(exception, host) {
        const ctx = host.switchToHttp();
        this.logger.error(exception);
        const response = ctx.getResponse();
        let status = exception?.getStatus() ?? 500;
        let responseJson = exception.getResponse() ?? { message: 'Internal server error', status: status };
        response.status(status).json(responseJson);
    }
};
exports.AllExceptionFilter = AllExceptionFilter;
exports.AllExceptionFilter = AllExceptionFilter = AllExceptionFilter_1 = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], AllExceptionFilter);
//# sourceMappingURL=all-exceptions.js.map