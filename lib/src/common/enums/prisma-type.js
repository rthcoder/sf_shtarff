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
exports.QueryStatus = exports.ParamId = exports.PaginationResponse = exports.PaginationOptionalDto = exports.PaginationDto = exports.OperatorTypes = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var OperatorTypes;
(function (OperatorTypes) {
    OperatorTypes["equals"] = "equals";
    OperatorTypes["equal"] = "equal";
    OperatorTypes["contains"] = "contains";
    OperatorTypes["between"] = "between";
    OperatorTypes["gte"] = "gte";
    OperatorTypes["lte"] = "lte";
})(OperatorTypes || (exports.OperatorTypes = OperatorTypes = {}));
class PaginationDto {
    page;
    size;
}
exports.PaginationDto = PaginationDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, default: '1' }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ type: String, default: '10' }),
    __metadata("design:type", Number)
], PaginationDto.prototype, "size", void 0);
class PaginationOptionalDto {
    page;
    size;
}
exports.PaginationOptionalDto = PaginationOptionalDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, default: '1', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], PaginationOptionalDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number, default: '10', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaginationOptionalDto.prototype, "size", void 0);
class PaginationResponse {
    totalPage;
    currentPage;
    hasNextPage;
    hasPreviousPage;
    totalItems;
    data;
}
exports.PaginationResponse = PaginationResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], PaginationResponse.prototype, "totalPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], PaginationResponse.prototype, "currentPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], PaginationResponse.prototype, "hasNextPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], PaginationResponse.prototype, "hasPreviousPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Number }),
    __metadata("design:type", Number)
], PaginationResponse.prototype, "totalItems", void 0);
class ParamId {
    id;
}
exports.ParamId = ParamId;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: false }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ParamId.prototype, "id", void 0);
class QueryStatus {
    status;
}
exports.QueryStatus = QueryStatus;
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, required: false, enum: client_1.Status }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QueryStatus.prototype, "status", void 0);
//# sourceMappingURL=prisma-type.js.map