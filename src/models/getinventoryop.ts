/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetInventorySecurity = {
    apiKey: string;
};

export type GetInventoryResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * successful operation
     */
    object?: { [k: string]: number } | undefined;
};

/** @internal */
export namespace GetInventorySecurity$ {
    export const inboundSchema: z.ZodType<GetInventorySecurity, z.ZodTypeDef, unknown> = z
        .object({
            api_key: z.string(),
        })
        .transform((v) => {
            return {
                apiKey: v.api_key,
            };
        });

    export type Outbound = {
        api_key: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInventorySecurity> = z
        .object({
            apiKey: z.string(),
        })
        .transform((v) => {
            return {
                api_key: v.apiKey,
            };
        });
}

/** @internal */
export namespace GetInventoryResponse$ {
    export const inboundSchema: z.ZodType<GetInventoryResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.record(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: { [k: string]: number } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInventoryResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.record(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
