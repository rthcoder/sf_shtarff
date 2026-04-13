import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ParseFiltersPipe implements PipeTransform {
    transform(value: any, _: ArgumentMetadata): any;
}
