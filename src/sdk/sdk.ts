/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { PetSDK } from "./petsdk";
import { Store } from "./store";
import { UserSDK } from "./usersdk";

export class Petstore extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _petSDK?: PetSDK;
    get petSDK(): PetSDK {
        return (this._petSDK ??= new PetSDK(this.options$));
    }

    private _store?: Store;
    get store(): Store {
        return (this._store ??= new Store(this.options$));
    }

    private _userSDK?: UserSDK;
    get userSDK(): UserSDK {
        return (this._userSDK ??= new UserSDK(this.options$));
    }
}
