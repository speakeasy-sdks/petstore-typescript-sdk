/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ApiResponse = {
    code?: number | undefined;
    message?: string | undefined;
    type?: string | undefined;
};

/** @internal */
export namespace ApiResponse$ {
    export const inboundSchema: z.ZodType<ApiResponse, z.ZodTypeDef, unknown> = z
        .object({
            code: z.number().int().optional(),
            message: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        code?: number | undefined;
        message?: string | undefined;
        type?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApiResponse> = z
        .object({
            code: z.number().int().optional(),
            message: z.string().optional(),
            type: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.code === undefined ? null : { code: v.code }),
                ...(v.message === undefined ? null : { message: v.message }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
