<!-- Start SDK Example Usage [usage] -->
```typescript
import { SwaggerPetstore } from "Swagger-Petstore";

async function run() {
    const sdk = new SwaggerPetstore();

    const res = await sdk.pets.createPets();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->