# Swagger-Petstore

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/petstore-typescript-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/petstore-typescript-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/petstore-typescript-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/petstore-typescript-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Petstore } from "Petstore";

const petstore = new Petstore({
    petstoreAuth: "<YOUR_PETSTORE_AUTH_HERE>",
});

async function run() {
    const result = await petstore.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [pet](docs/sdks/petsdk/README.md)

* [addPetForm](docs/sdks/petsdk/README.md#addpetform) - Add a new pet to the store
* [addPetJson](docs/sdks/petsdk/README.md#addpetjson) - Add a new pet to the store
* [addPetRaw](docs/sdks/petsdk/README.md#addpetraw) - Add a new pet to the store
* [deletePet](docs/sdks/petsdk/README.md#deletepet) - Deletes a pet
* [findPetsByStatus](docs/sdks/petsdk/README.md#findpetsbystatus) - Finds Pets by status
* [findPetsByTags](docs/sdks/petsdk/README.md#findpetsbytags) - Finds Pets by tags
* [getPetById](docs/sdks/petsdk/README.md#getpetbyid) - Find pet by ID
* [updatePetWithForm](docs/sdks/petsdk/README.md#updatepetwithform) - Updates a pet in the store with form data
* [updatePetForm](docs/sdks/petsdk/README.md#updatepetform) - Update an existing pet
* [updatePetJson](docs/sdks/petsdk/README.md#updatepetjson) - Update an existing pet
* [updatePetRaw](docs/sdks/petsdk/README.md#updatepetraw) - Update an existing pet
* [uploadFile](docs/sdks/petsdk/README.md#uploadfile) - uploads an image

### [store](docs/sdks/store/README.md)

* [deleteOrder](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID
* [getInventory](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
* [getOrderById](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
* [placeOrderForm](docs/sdks/store/README.md#placeorderform) - Place an order for a pet
* [placeOrderJson](docs/sdks/store/README.md#placeorderjson) - Place an order for a pet
* [placeOrderRaw](docs/sdks/store/README.md#placeorderraw) - Place an order for a pet

### [user](docs/sdks/usersdk/README.md)

* [createUserForm](docs/sdks/usersdk/README.md#createuserform) - Create user
* [createUserJson](docs/sdks/usersdk/README.md#createuserjson) - Create user
* [createUserRaw](docs/sdks/usersdk/README.md#createuserraw) - Create user
* [createUsersWithListInput](docs/sdks/usersdk/README.md#createuserswithlistinput) - Creates list of users with given input array
* [deleteUser](docs/sdks/usersdk/README.md#deleteuser) - Delete user
* [getUserByName](docs/sdks/usersdk/README.md#getuserbyname) - Get user by user name
* [loginUser](docs/sdks/usersdk/README.md#loginuser) - Logs user into the system
* [logoutUser](docs/sdks/usersdk/README.md#logoutuser) - Logs out current logged in user session
* [updateUserForm](docs/sdks/usersdk/README.md#updateuserform) - Update user
* [updateUserJson](docs/sdks/usersdk/README.md#updateuserjson) - Update user
* [updateUserRaw](docs/sdks/usersdk/README.md#updateuserraw) - Update user
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| models.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Petstore } from "Petstore";
import * as errors from "Petstore/models";

const petstore = new Petstore({
    petstoreAuth: "<YOUR_PETSTORE_AUTH_HERE>",
});

async function run() {
    let result;
    try {
        result = await petstore.pet.addPetForm({
            category: {
                id: 1,
                name: "Dogs",
            },
            id: 10,
            name: "doggie",
            photoUrls: ["<value>"],
        });
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https:///api/v3` | None |

```typescript
import { Petstore } from "Petstore";

const petstore = new Petstore({
    serverIdx: 0,
    petstoreAuth: "<YOUR_PETSTORE_AUTH_HERE>",
});

async function run() {
    const result = await petstore.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Petstore } from "Petstore";

const petstore = new Petstore({
    serverURL: "https:///api/v3",
    petstoreAuth: "<YOUR_PETSTORE_AUTH_HERE>",
});

async function run() {
    const result = await petstore.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Petstore } from "Petstore";
import { HTTPClient } from "Petstore/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Petstore({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Petstore } from "Petstore";

const petstore = new Petstore({
    petstoreAuth: "<YOUR_PETSTORE_AUTH_HERE>",
});

async function run() {
    const result = await petstore.pet.addPetRaw(new TextEncoder().encode("0xcf5E85CDde"));

    // Handle the result
    console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type           | Scheme         |
| -------------- | -------------- | -------------- |
| `petstoreAuth` | oauth2         | OAuth2 token   |

To authenticate with the API the `petstoreAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Petstore } from "Petstore";

const petstore = new Petstore({
    petstoreAuth: "<YOUR_PETSTORE_AUTH_HERE>",
});

async function run() {
    const result = await petstore.pet.addPetForm({
        category: {
            id: 1,
            name: "Dogs",
        },
        id: 10,
        name: "doggie",
        photoUrls: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Petstore } from "Petstore";

const petstore = new Petstore();

async function run() {
    const result = await petstore.pet.getPetById(
        {
            petId: 504151,
        },
        {
            apiKey: "<YOUR_API_KEY_HERE>",
        }
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
