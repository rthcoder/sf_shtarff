"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersValidation = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const _enums_1 = require("../enums");
exports.HeadersValidation = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const headers = request.headers;
    const headersDto = (0, class_transformer_1.plainToInstance)(_enums_1.DeviceHeadersDto, headers);
    const errors = await (0, class_validator_1.validate)(headersDto);
    if (errors.length > 0) {
        const messages = errors.flatMap((err) => Object.values(err.constraints || {}));
        throw new common_1.BadRequestException(messages);
    }
    return { ...headersDto, lang: headersDto?.lang?.toLowerCase() ?? 'ru' };
});
//# sourceMappingURL=haeder-validation.decorator.js.map