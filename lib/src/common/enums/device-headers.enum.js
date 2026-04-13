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
exports.globalHeaderParametrs = exports.DeviceHeadersDto = void 0;
const class_validator_1 = require("class-validator");
var Lang;
(function (Lang) {
    Lang["ru"] = "ru";
    Lang["en"] = "en";
})(Lang || (Lang = {}));
class DeviceHeadersDto {
    lang;
}
exports.DeviceHeadersDto = DeviceHeadersDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(Lang),
    __metadata("design:type", String)
], DeviceHeadersDto.prototype, "lang", void 0);
exports.globalHeaderParametrs = [
    {
        in: 'header',
        name: 'lang',
        required: false,
        schema: {
            enum: ['ru', 'en'],
            type: 'string',
            default: 'ru',
        },
    },
];
//# sourceMappingURL=device-headers.enum.js.map