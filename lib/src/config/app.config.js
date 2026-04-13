"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_PORT = void 0;
const validate_config_1 = require("./validate.config");
const APP_PORT = validate_config_1.config.get('APP_PORT') ?? 1722;
exports.APP_PORT = APP_PORT;
//# sourceMappingURL=app.config.js.map