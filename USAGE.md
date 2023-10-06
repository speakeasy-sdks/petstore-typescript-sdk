<!-- Start SDK Example Usage -->


```typescript
import { SwaggerPetstore } from "Swagger-Petstore";
import { CreatePetsResponse } from "Swagger-Petstore/dist/sdk/models/operations";

const sdk = new SwaggerPetstore();

sdk.pets.createPets().then((res: CreatePetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->