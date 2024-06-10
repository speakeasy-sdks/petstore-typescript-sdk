/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LoginUserRequest = {
    /**
     * The user name for login
     */
    username?: string | undefined;
    /**
     * The password for login in clear text
     */
    password?: string | undefined;
};

export type LoginUserResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    headers: { [k: string]: Array<string> };
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
    res?: string | undefined;
    /**
     * successful operation
     */
    string?: string | undefined;
};

/** @internal */
export namespace LoginUserRequest$ {
    export const inboundSchema: z.ZodType<LoginUserRequest, z.ZodTypeDef, unknown> = z
        .object({
            username: z.string().optional(),
            password: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.username === undefined ? null : { username: v.username }),
                ...(v.password === undefined ? null : { password: v.password }),
            };
        });

    export type Outbound = {
        username?: string | undefined;
        password?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginUserRequest> = z
        .object({
            username: z.string().optional(),
            password: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.username === undefined ? null : { username: v.username }),
                ...(v.password === undefined ? null : { password: v.password }),
            };
        });
}

/** @internal */
export namespace LoginUserResponse$ {
    export const inboundSchema: z.ZodType<LoginUserResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            Headers: z.record(z.array(z.string())),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            res: z.string().optional(),
            string: z.string().optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                headers: v.Headers,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.res === undefined ? null : { res: v.res }),
                ...(v.string === undefined ? null : { string: v.string }),
            };
        });

    export type Outbound = {
        ContentType: string;
        Headers: { [k: string]: Array<string> };
        StatusCode: number;
        RawResponse: never;
        res?: string | undefined;
        string?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginUserResponse> = z
        .object({
            contentType: z.string(),
            headers: z.record(z.array(z.string())),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            res: z.string().optional(),
            string: z.string().optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                Headers: v.headers,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.res === undefined ? null : { res: v.res }),
                ...(v.string === undefined ? null : { string: v.string }),
            };
        });
}
