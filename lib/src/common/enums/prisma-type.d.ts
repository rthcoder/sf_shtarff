import { PrismaClient, Status } from '@prisma/client';
export type Models = keyof Omit<PrismaClient, '$transaction' | '$queryRawUnsafe' | '$queryRaw' | '$on' | '$extends' | '$executeRawUnsafe' | '$executeRaw' | '$disconnect' | '$connect' | '$use' | symbol>;
export declare enum OperatorTypes {
    equals = "equals",
    equal = "equal",
    contains = "contains",
    between = "between",
    gte = "gte",
    lte = "lte"
}
export declare class PaginationDto {
    page: number;
    size: number;
}
export declare class PaginationOptionalDto {
    page: number;
    size: number;
}
export declare class PaginationResponse<T> {
    totalPage: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    totalItems: number;
    data: T;
}
export declare class ParamId {
    id: number;
}
export declare class QueryStatus {
    status: Status;
}
