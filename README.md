# strapi-medusa-template for Strapi v4

Bring the power of two awesome open source system together. It comes preloaded with the plugins that you need kick start medusa. 


npx create-strapi-app strapi-medusa --template https://github.com/Kyle772/strapi-medusa-template.git
# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

### Docker

We've provided a dockerfile and docker compose file build file also for you reference. 

## Configuration 

### Environment Settings

These values will need to be sent in your .env file or equivalent enivorment sttings,
please generate these keys as per the recommended 
To know more about how to create the keys please read this
(https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/api-tokens.html#usage)

HOST=<your hostname>
PORT=<yous strapi port>
APP_KEYS=<key1>,<key2>,<key3>,<key4>

### Admin Settings

API_TOKEN_SALT=<api salt>
ADMIN_JWT_SECRET=<admin jwt secret> 

### Users-Permissions Plugin Settings

JWT_SECRET=<STRAPI JWT Secret>

### Strapi Medusa Interface

Strapi runs as slave to medusajs. It just makes it easier when there is one boss :)


MEDUSA_STRAPI_SECRET=<MEDUSA JWT SECRET, needs to be the same as that used in medusa project config jwt_secret>
SUPERUSER_USERNAME=<super user name> defaults to  "SuperUser",
SUPERUSER_PASSWORD=<super secret super user password>  defaults to  "MedusaStrapi1",
SUPERUSER_FIRSTNAME=<firstname, coz strapi loves addressing  by firstname>  defaults to  "Medusa",
SUPERUSER_LASTNAME=<well strapi has got to know who the admin daddy or mommy is >  defaults to  "Commerce",
SUPERUSER_EMAIL=<you better have an email address or your not from this century :)>  defaults to  "support@medusa-commerce.com",

All the default values are there too for your refernce. 


### Database Settings

DATABASE_HOST=<database host>
DATABASE_PORT=<database port>
DATABASE_NAME=<database name>
DATABASE_USERNAME=<database username>
DATABASE_PASSWORD=<database password if you are using const string password and not AWS IAM>
DATABASE_SSL=<data base ssl name>
DATABASE_SCHEMA=<postgres database schema name>

### Media Bucket
Media bucket store big chunks of data that you can't hold in the database, they can be uploaded using upload apis
This version comes preinstalled with S3 support 

If you are not using AWS then
S3_ACCESS_KEY_ID=<AWS KEYID>
S3_ACCESS_SECRET_KEY=<AWS KEY SECRET>
S3_BUCKET=<s3 bucket name>
S3_REGION=<your region>

### Senty helps track any issues that your system may encounter
SENTRY_DSN=<DSN>
SENTRY_KEY=<SENTY KEY>
SENTRY_API_KEY=<SENTRY API KEY>
SENTRY_WEBHOOK_SECRET=<SENTRY WEBHOOK SECRET>

### Search

Search is the most critical part of any content system. This comes preconfigured with melisearch

MELISEARCH_HOST= <MELISEARCH HOSTNAME>
MELISEARCH_MASTER_KEY=<MELISEARCH KEY>

### Messaging

Sometimes you've got to just send a message, we've preconfigured this with SENDGRID

SENDGRID_API_KEY=<YOUR SENDGRID KEY>
SENDGRID_NOTIFICATION_FROM_ADDRESS=<SENDERS ADDRESS>

### Other Environment settings

You can read about other environment settings that strapi provides [here](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations/optional/environment.html#strapi-s-environment-variables)

# Routes Available

The routes below are available for your use

  ┌────────────────────┬────────────────────────────────────────────────────────────────┐
  │     Method         | Path                                                           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|ACL|BIND|CHE… │ /_health                                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /uploads/(.*)                                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/:path*                                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /                                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /index.html                                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /assets/images/(.*)                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /(.*)                                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/countries                                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/countries/:id                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/countries                                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/countries/:id                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/countries/:id                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/currencies                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/currencies/:id                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/currencies                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/currencies/:id                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/currencies/:id                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/fulfillment-providers                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/fulfillment-providers/:id                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/fulfillment-providers                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/fulfillment-providers/:id                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/fulfillment-providers/:id                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/images                                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/images/:id                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/images                                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/images/:id                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/images/:id                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/money-amounts                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/money-amounts/:id                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/money-amounts                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/money-amounts/:id                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/money-amounts/:id                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/payment-providers                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/payment-providers/:id                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/payment-providers                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/payment-providers/:id                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/payment-providers/:id                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/products                                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/products/:id                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/products                                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/products/:id                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/products/:id                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-collections                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-collections/:id                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/product-collections                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/product-collections/:id                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/product-collections/:id                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-options                                           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-options/:id                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/product-options                                           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/product-options/:id                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/product-options/:id                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-option-values                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-option-values/:id                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/product-option-values                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/product-option-values/:id                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/product-option-values/:id                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-tags                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-tags/:id                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/product-tags                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/product-tags/:id                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/product-tags/:id                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-types                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-types/:id                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/product-types                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/product-types/:id                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/product-types/:id                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-variants                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/product-variants/:id                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/product-variants                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/product-variants/:id                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/product-variants/:id                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/regions                                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/regions/:id                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/regions                                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/regions/:id                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/regions/:id                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/shipping-options                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/shipping-options/:id                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/shipping-options                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/shipping-options/:id                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/shipping-options/:id                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/shipping-option-requirements                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/shipping-option-requirements/:id                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/shipping-option-requirements                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/shipping-option-requirements/:id                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/shipping-option-requirements/:id                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/shipping-profiles                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/shipping-profiles/:id                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/shipping-profiles                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/shipping-profiles/:id                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/shipping-profiles/:id                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/stores                                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/stores/:id                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/stores                                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/stores/:id                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/stores/:id                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/content-type-builder/content-types                        │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/content-type-builder/content-types/:uid                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/content-type-builder/components                           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/content-type-builder/components/:uid                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/email                                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/upload                                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/upload/files                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/upload/files/:id                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/upload/files/:id                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/connect/(.*)                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/auth/local                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/auth/local/register                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/auth/:provider/callback                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/auth/forgot-password                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/auth/reset-password                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/auth/email-confirmation                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/auth/send-email-confirmation                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/auth/change-password                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/users/count                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/users                                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/users/me                                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/users/:id                                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/users                                                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/users/:id                                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/users/:id                                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/users-permissions/roles/:id                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/users-permissions/roles                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /api/users-permissions/roles                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /api/users-permissions/roles/:role                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /api/users-permissions/roles/:role                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/users-permissions/permissions                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /api/i18n/locales                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/init                                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/project-settings                                        │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/project-settings                                        │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/project-type                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/information                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/telemetry-properties                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/plugins                                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/plugins/install                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /admin/plugins/uninstall/:plugin                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/login                                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/renew-token                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/register-admin                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/registration-info                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/register                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/forgot-password                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/reset-password                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/permissions                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/permissions/check                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/users/me                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /admin/users/me                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/users/me/permissions                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/users                                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/users                                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/users/:id                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /admin/users/:id                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /admin/users/:id                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/users/batch-delete                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/users/batch-delete                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/roles/:id/permissions                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /admin/roles/:id/permissions                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/roles/:id                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/roles                                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /admin/roles/:id                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/webhooks                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/webhooks                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/webhooks/:id                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /admin/webhooks/:id                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /admin/webhooks/:id                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/webhooks/batch-delete                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/webhooks/:id/trigger                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/api-tokens                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/api-tokens                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /admin/api-tokens/:id                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/api-tokens/:id                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /admin/api-tokens/:id                                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /admin/api-tokens/:id/regenerate                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/content-api/permissions                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /admin/content-api/routes                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/content-types                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/content-types-settings                        │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/content-types/:uid/configuration              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /content-manager/content-types/:uid/configuration              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/components                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/components/:uid/configuration                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /content-manager/components/:uid/configuration                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/uid/generate                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/uid/check-availability                        │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/relations/:model/:targetField                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/single-types/:model                           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /content-manager/single-types/:model                           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /content-manager/single-types/:model                           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/single-types/:model/actions/publish           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/single-types/:model/actions/unpublish         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/collection-types/:model/:id/:targetField      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/collection-types/:model                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/collection-types/:model                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-manager/collection-types/:model/:id                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /content-manager/collection-types/:model/:id                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /content-manager/collection-types/:model/:id                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/collection-types/:model/:id/actions/publish   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/collection-types/:model/:id/actions/unpublish │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-manager/collection-types/:model/actions/bulkDelete    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-type-builder/reserved-names                           │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-type-builder/content-types                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-type-builder/content-types/:uid                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-type-builder/content-types                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /content-type-builder/content-types/:uid                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /content-type-builder/content-types/:uid                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-type-builder/components                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /content-type-builder/components/:uid                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /content-type-builder/components                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /content-type-builder/components/:uid                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /content-type-builder/components/:uid                          │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /content-type-builder/component-categories/:name               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /content-type-builder/component-categories/:name               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /email                                                         │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /email/test                                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /email/settings                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /upload/settings                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /upload/settings                                               │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /upload                                                        │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /upload/files                                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /upload/files/:id                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /upload/files/:id                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /upload/folders/:id                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /upload/folders                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /upload/folders                                                │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /upload/folders/:id                                            │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /upload/folder-structure                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /upload/actions/bulk-delete                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /upload/actions/bulk-move                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /seo/component                                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /seo/component                                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /seo/content-types                                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /strapi-plugin-medusajs/create-medusa-user                     │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /strapi-plugin-medusajs/synchronise-medusa-tables              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /users-permissions/roles/:id                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /users-permissions/roles                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /users-permissions/roles                                       │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /users-permissions/roles/:role                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /users-permissions/roles/:role                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /users-permissions/email-templates                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /users-permissions/email-templates                             │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /users-permissions/advanced                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /users-permissions/advanced                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /users-permissions/providers                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /users-permissions/providers                                   │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /users-permissions/permissions                                 │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /users-permissions/policies                                    │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /users-permissions/routes                                      │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /i18n/iso-locales                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ HEAD|GET           │ /i18n/locales                                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /i18n/locales                                                  │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ PUT                │ /i18n/locales/:id                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ DELETE             │ /i18n/locales/:id                                              │
  ├────────────────────┼────────────────────────────────────────────────────────────────┤
  │ POST               │ /i18n/content-manager/actions/get-non-localized-fields         |│_____________________________________________________________________________________|

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
