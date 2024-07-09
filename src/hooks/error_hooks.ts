import {
    AfterErrorContext,
    AfterErrorHook,
} from "./types.js";

import * as Sentry from "@sentry/node";

// Ensure to call this before importing any other modules!
Sentry.init({
    dsn: "https://680f99362784e3872f59ba62dffa1409@o4506395910471680.ingest.us.sentry.io/4507568295837696",
});

export class ErrorHooks
    implements AfterErrorHook {
    afterError(
        hookCtx: AfterErrorContext,
        response: Response | null,
        error: unknown
    ): { response: Response | null; error: unknown } {
        console.error("An error occurred in the SDK", { hookCtx, response, error });
        Sentry.addBreadcrumb({
            category: "sdk error",
            message: "An error occurred in the SDK",
            level: "error",
            data:{
                hookCtx,
                response,
                error
            }
          });
        Sentry.captureException(error);
        return { response, error };
    }
}
