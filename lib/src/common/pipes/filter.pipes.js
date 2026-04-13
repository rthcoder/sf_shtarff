"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseFiltersPipe = void 0;
const common_1 = require("@nestjs/common");
let ParseFiltersPipe = class ParseFiltersPipe {
    transform(value, _) {
        const filters = [];
        let existsFilter = false;
        if (value)
            Object.keys(value).forEach((key) => {
                let match = key.match(/^filters\[(\d+)]\.(\w+)$/);
                if (match) {
                    existsFilter = true;
                    const [_, index, field] = match;
                    const idx = Number(index);
                    filters[idx] = filters[idx] || {};
                    filters[idx][field] = value[key];
                    delete value[key];
                }
            });
        if (value?.sort && Object.keys(value).some((k) => k.startsWith('sort.'))) {
            let sort = {};
            Object.entries(value).forEach(([key, val]) => {
                const match = key.match(/^sort\.(.+)$/);
                if (match) {
                    sort[match[1]] = val;
                    delete value[key];
                }
            });
            value.sort = sort;
        }
        if (existsFilter) {
            value = {
                ...value,
                filters,
            };
        }
        return value;
    }
};
exports.ParseFiltersPipe = ParseFiltersPipe;
exports.ParseFiltersPipe = ParseFiltersPipe = __decorate([
    (0, common_1.Injectable)()
], ParseFiltersPipe);
//# sourceMappingURL=filter.pipes.js.map