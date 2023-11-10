<!-- Start SDK Example Usage -->
```typescript
import { SwaggerPetstore } from "Swagger-Petstore";

(async () => {
    const sdk = new SwaggerPetstore();

    const res = await sdk.pets.createPets();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->