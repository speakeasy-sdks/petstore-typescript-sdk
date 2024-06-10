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

import { PostHog } from "posthog-node";

const client = new PostHog("phc_4UQYqH7cLoD5IFnt0KM1vmM10O5sYEgTxNeVxo55CV9", {
  host: "https://us.i.posthog.com",
});

// import { HTTPClient } from "../lib/http";

export class TelemetryHooks
  implements SDKInitHook, BeforeRequestHook, AfterSuccessHook, AfterErrorHook {
  sdkInit(opts: SDKInitOptions): SDKInitOptions {
    const { baseURL, client: httpClient } = opts;
    console.log("SDK Init", opts);
    client.capture({
      distinctId: "distinct_id_of_the_user",
      event: "SDK Init",
      properties: {
        opts: opts,
      },
    });

    client.shutdown();
    return { baseURL: baseURL, client: httpClient };
  }

  beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request
  ): Request {
    client.capture({
      distinctId: "distinct_id_of_the_user",
      event: "Before Request",
      properties: {
        hookCtx: hookCtx,
      },
    });

    client.shutdown();
    return request;
  }

  afterSuccess(
    hookCtx: AfterSuccessContext,
    response: Response
  ): Response {
    client.capture({
      distinctId: "distinct_id_of_the_user",
      event: "After Success",
      properties: {
        hookCtx: hookCtx,
        response: response,
      },
    });

    client.shutdown();
    return response;
  }

  afterError(
    hookCtx: AfterErrorContext,
    response: Response | null,
    error: unknown
  ): { response: Response | null; error: unknown } {
    client.capture({
      distinctId: "distinct_id_of_the_user",
      event: "After Error",
      properties: {
        hookCtx: hookCtx,
        response: response,
        error: error,
      },
    });

    client.shutdown();
    return { response, error };
  }
}
