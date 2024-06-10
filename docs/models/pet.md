# Pet


## Fields

| Field                                      | Type                                       | Required                                   | Description                                | Example                                    |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `category`                                 | [models.Category](../models/category.md)   | :heavy_minus_sign:                         | N/A                                        |                                            |
| `id`                                       | *number*                                   | :heavy_minus_sign:                         | N/A                                        | 10                                         |
| `name`                                     | *string*                                   | :heavy_check_mark:                         | N/A                                        | doggie                                     |
| `photoUrls`                                | *string*[]                                 | :heavy_check_mark:                         | N/A                                        |                                            |
| `status`                                   | [models.PetStatus](../models/petstatus.md) | :heavy_minus_sign:                         | pet status in the store                    |                                            |
| `tags`                                     | [models.Tag](../models/tag.md)[]           | :heavy_minus_sign:                         | N/A                                        |                                            |