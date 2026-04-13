import { IsEnum, IsOptional } from 'class-validator';

enum Lang {
  ru = 'ru',
  en = 'en',
}

export class DeviceHeadersDto {
  @IsOptional()
  @IsEnum(Lang)
  lang?: Lang;
}

export const globalHeaderParametrs = [
  {
    in: 'header' as const,
    name: 'lang',
    required: false,
    schema: {
      enum: ['ru', 'en'],
      type: 'string' as const,
      default: 'ru',
    },
  },
];
