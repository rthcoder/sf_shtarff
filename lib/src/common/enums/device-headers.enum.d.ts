declare enum Lang {
    ru = "ru",
    en = "en"
}
export declare class DeviceHeadersDto {
    lang?: Lang;
}
export declare const globalHeaderParametrs: {
    in: "header";
    name: string;
    required: boolean;
    schema: {
        enum: string[];
        type: "string";
        default: string;
    };
}[];
export {};
