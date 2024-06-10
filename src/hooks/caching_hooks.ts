import {
    AfterErrorContext,
    AfterErrorHook,
    AfterSuccessContext,
    AfterSuccessHook,
    BeforeRequestContext,
    BeforeRequestHook,
    SDKInitHook,
    SDKInitOptions,
} from "./types";



export class CachingHooks
    implements SDKInitHook {
    sdkInit(opts: SDKInitOptions): SDKInitOptions {
        const { baseURL, client: httpClient } = opts;

        const cachedClient = new CachedClient(httpClient);

        return { baseURL: baseURL, client: cachedClient };
    }
}
