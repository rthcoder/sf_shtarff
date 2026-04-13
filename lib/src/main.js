"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const app_module_1 = require("./app.module");
const _pipes_1 = require("./common/pipes");
const core_1 = require("@nestjs/core");
const _enums_1 = require("./common/enums");
const basicAuth = require("express-basic-auth");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _exceptions_1 = require("./common/exceptions");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        prefix: 'api/v1',
    });
    new _pipes_1.ParseFiltersPipe(),
        app.useGlobalPipes(new common_1.ValidationPipe({
            transform: true,
            whitelist: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
        }));
    app.useGlobalFilters(new _exceptions_1.AllExceptionFilter());
    app.useGlobalFilters(new _exceptions_1.HttpExceptionFilter());
    app.use('/docs', basicAuth({
        challenge: true,
        users: {
            '1': '1',
            'shtraff': "shtraff"
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Shtraff API')
        .setDescription('The Shtraff API description')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    })
        .addGlobalParameters(..._enums_1.globalHeaderParametrs)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(config_1.APP_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map