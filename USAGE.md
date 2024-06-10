<!-- Start SDK Example Usage [usage] -->
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