# Changelog

## Unreleased

### ⚠️ Breaking Changes

- Wasp now requires Node.js version to be >=v22.12. [#2915](https://github.com/wasp-lang/wasp/pull/2915)
- Wasp now uses ECMAScript Modules (ESM) instead of CommonJS (CJS) for Tailwind configuration files. ([#2998](https://github.com/wasp-lang/wasp/pull/2998))

### 🎉 New Features

- New command: `wasp build start`. Lets you run your built Wasp app locally, just like in production. If required environment variables are missing, the command will show errors—helping you confirm which env vars you'll need to set in production. [#2796](https://github.com/wasp-lang/wasp/pull/2796)

## 0.17.1

### 🐞 Bug fixes

- Fixes parsing of `app.client` and `app.server` options in `main.wasp.ts` ([#2999](https://github.com/wasp-lang/wasp/pull/2999))

## 0.17.0

### ⚠️ Breaking Changes

Follow the [the official migration guide](https://wasp.sh/docs/migration-guides/migrate-from-0-16-to-0-17) to address all the breaking changes. Here's a short overview:

- In the `usernameAndPassword` authentication method, the function `login()` imported from `wasp/client/auth` now accepts an object with `username` and `password` instead of two separate arguments ([#2598](https://github.com/wasp-lang/wasp/pull/2598))
- We've made some improvements to our TypeScript setup that require you to
  update the `tsconfig.json` file. The [migration guide](https://wasp.sh/docs/migration-guides/migrate-from-0-16-to-0-17) will lead you through
  them, but here are all the non-cosmetic ones:
  ```diff
   {
     "compilerOptions": {
       // ...
  +    "moduleDetection": "force",
  +    "isolatedModules": true,
  -    "typeRoots": [ ... ]
     },
   }
  ```
- The types for DOM helpers in tests are now handled with an import in `src/vite-env.d.ts` (instead of overriding `typeRoots` in `tsconfig.json`).
- Wasp will no longer generate `favicon.ico` on compile if there isn't one in the `public` directory. New Wasp projects will start with a default `favicon.ico` in the `public` directory, instead. ([#1979](https://github.com/wasp-lang/wasp/pull/1979)).
- Wasp will no longer automatically add a favicon `<link>` tag to the `index.html`. The `<link>` tag will be included by default in the `main.wasp` for new projects. ([#1979](https://github.com/wasp-lang/wasp/pull/1979)).
- Updated Express to [v5](https://expressjs.com/en/guide/migrating-5.html) ([#2685](https://github.com/wasp-lang/wasp/pull/2685))

### 🎉 New Features

- Added support for one-line deployment with Railway to `wasp deploy` command. ([#2578](https://github.com/wasp-lang/wasp/pull/2578))
- Wasp now includes a `onAfterEmailVerified` auth hook. You can use this hook to run custom logic after a user has verified their email. ([#2602](https://github.com/wasp-lang/wasp/pull/2602))
- Wasp now supports Slack as an auth provider (by @scorpil). ([#2764](https://github.com/wasp-lang/wasp/pull/2764))
- You can now return Prisma `Decimal`s from your Queries and Actions. ([#2701](https://github.com/wasp-lang/wasp/pull/2701))
- Added build-time client env variable validation. ([#2392](https://github.com/wasp-lang/wasp/pull/2392))
- Added `prismaSetupFn` hook to database config to allow users to run custom Prisma setup code. ([#2693](https://github.com/wasp-lang/wasp/pull/2693))

### 🐞 Bug fixes

- Fixes an OAuth logic race condition where a valid session ID was cleared and users would be logged out. ([#2684](https://github.com/wasp-lang/wasp/pull/2684))
- Calling `useAuth()` when the user is not logged in will not fail the request, only return `null` ([#2689](https://github.com/wasp-lang/wasp/pull/2689))
- Fixes a bug where a Prisma file with no models defined would cause the app not to render in the browser. ([#2902](https://github.com/wasp-lang/wasp/pull/2902))
- Fixes Wasp Studio not working in Firefox. ([#2848](https://github.com/wasp-lang/wasp/pull/2848))

### 🔧 Small improvements

- Show a friendlier error when there are no routes defined in the Wasp file. ([#2643](https://github.com/wasp-lang/wasp/pull/2643))
- Modernized our TypeScript support for bundlers. ([#2656](https://github.com/wasp-lang/wasp/pull/2656))
- Added support for jump-to-definition for Wasp symbols. ([#2656](https://github.com/wasp-lang/wasp/pull/2656))
- `userSignupFields` types are now correctly propagated to client auth methods. ([#2641](https://github.com/wasp-lang/wasp/pull/2641))
- The generated server code is now type-checked before building. ([#2778](https://github.com/wasp-lang/wasp/pull/2778))
- App name in `package.json` is now in kebab case (by @0xTaneja) ([#2588](https://github.com/wasp-lang/wasp/pull/2588))
- Improved error handling when `npm` doesn't satisfy the minimum version requirement .([#2549](https://github.com/wasp-lang/wasp/pull/2549))

## 0.16.7

### 🐞 Bug fixes

- Make Wasp work with Node older than 20.19.0 by pinning down the version of `@vitejs/plugin-react` to `4.5.1`. This prevents Vite 7 from being installed and clashing with Node ([2865]https://github.com/wasp-lang/wasp/pull/2865))

## 0.16.6

### 🐞 Bug fixes

- Stops lowercasing user IDs received from OAuth providers.

## 0.16.5

### 🐞 Bug fixes

- Pins down the version of tanstack/react-query to exactly `4.36.1` instead of `^4.29.0`, to avoid the issue with the latest `4.39.0` release that fails to import in Wasp.

## 0.16.4

### 🐞 Bug fixes

- Adds support for the latest version of Fly.io CLI (v0.3.121 or greater) ([#2760](https://github.com/wasp-lang/wasp/pull/2760))

## 0.16.3

### 🎉 New Features and improvements

- Prisma enums are now usable on the client ([#2565](https://github.com/wasp-lang/wasp/pull/2565)).
- Wasp now detects `wasp/server/*` imports on the client ([#2442](https://github.com/wasp-lang/wasp/pull/2442)).
- Bumped the minimum Node version to 20.0.0 ([#2537](https://github.com/wasp-lang/wasp/pull/2537)).

### ⚠️ Breaking Changes

- Wasp TS spec now defines HTTP routes for custom APIs with objects instead of arrays ([#2580](https://github.com/wasp-lang/wasp/pull/2580)).

### 🐞 Bug fixes

- CRUD operations can now have their return types inferred like regular operations ([#2541](https://github.com/wasp-lang/wasp/issues/2541) by @Genyus).
- Adds a default value for `NODE_ENV` to prevent validation errors in rare cases ([#2507](https://github.com/wasp-lang/wasp/pull/2507)).
- Invalid CLI commands now properly return non-zero exit code ([#2522](https://github.com/wasp-lang/wasp/pull/2552)).
- Custom API types have their `res` and `req` types properly defined ([#2569](https://github.com/wasp-lang/wasp/pull/2569)).

### 🔧 Small improvements

- The root server route doesn't return "Hello World" ([#2538](https://github.com/wasp-lang/wasp/pull/2538)).
- Better surface SendGrid errors in the server logs ([##2596](https://github.com/wasp-lang/wasp/pull/2596)).
- Improved the error message when the user has a top level `.wasp` file ([#2418](https://github.com/wasp-lang/wasp/pull/2418) by @komyg).
- Extra validation of dependencies in `package.json` ([#2554](https://github.com/wasp-lang/wasp/pull/2554)).
- Custom values for `theme-color` are now supported ([#2546](https://github.com/wasp-lang/wasp/pull/2546) by @andrsdt).

## 0.16.2

### 🎉 New Features and improvements

- Wasp has got a new https://wasp.sh domain! This migrates the wasp-lang.dev domain mentions to wasp.sh.

## 0.16.1

### 🎉 New Features and improvements

- TypeScript error messages now match the user's directory structure ([#2486](https://github.com/wasp-lang/wasp/pull/2486)).
- Wasp's WSL guide now includes up to date Docker post-installation steps ([#2452](https://github.com/wasp-lang/wasp/pull/2452)).

### Bug fixes

- Session ID is no longer removed when the user logs out from a different tab ([#2075](https://github.com/wasp-lang/wasp/issues/2075)).
- Using operations on the server no longer breaks relative extensionless imports ([#2492](https://github.com/wasp-lang/wasp/issues/2492)).

## 0.16.0

### 🎉 New Features and improvements

#### Env variables validation with Zod

Wasp now uses Zod to validate environment variables, allowing it to fail faster if something is misconfigured. This means you’ll get more relevant error messages when running your app with incorrect env variables.

You can also use Zod to validate your own environment variables. Here’s an example:

```ts
// src/env.ts
import * as z from 'zod'

import { defineEnvValidationSchema } from 'wasp/env'

export const serverEnvValidationSchema = defineEnvValidationSchema(
  z.object({
    STRIPE_API_KEY: z.string({
      required_error: 'STRIPE_API_KEY is required.',
    }),
  })
)

// main.wasp
app myApp {
  ...
  server: {
    envValidationSchema: import { serverEnvValidationSchema } from "@src/env",
  },
}
```

### Deployment docs upgrade

Based on feedback from our Discord community, we’ve revamped our deployment docs to make it simpler to deploy your app to production. We focused on explaining key deployment concepts, regardless of the deployment method you choose. We’ve added guides on hosting Wasp apps on your own servers, for example, how to use Coolify and Caprover for self-hosting. The Env Variables section now includes a comprehensive list of all available Wasp env variables and provides clearer instructions on how to set them up in a deployed app.

Check the updated deployment docs here: https://wasp.sh/docs/deployment/intro

### ⚠️ Breaking Changes

- Renamed and split `deserializeAndSanitizeProviderData` to `getProviderData` and `getProviderDataWithPassword` so it's more explicit if the resulting data will contain the hashed password or not.
- You need to include `react-dom` and `react-router-dom` as deps in your `package.json` file. This ensures `npm` doesn't accidentally install React 19, which is not yet supported by Wasp:
  ```json
  {
    // ...
    "dependencies": {
      // ...
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.26.2"
    }
  }
  ```
- Wasp now internally works with project references, so you'll have to update your `tsconfig.json` (Wasp will validate your `tsconfig.json` and warn you if you forget this). Here are all the properties you must set or change:
  ```json
  {
    "compilerOptions": {
      // ...
      "composite": true,
      "skipLibCheck": true,
      "outDir": ".wasp/out/user"
    },
    "include": ["src"]
  }
  ```

Read more about breaking changes in the migration guide: https://wasp.sh/docs/migration-guides/migrate-from-0-15-to-0-16

### 🐞 Bug fixes

- We fixed Fly deployment using the Wasp CLI where the server app `PORT` was set incorrectly.

### 🔧 Small improvements

- Enabled strict null checks for the Wasp SDK which means that some of the return types are more precise now e.g. you'll need to check if some value is `null` before using it.
- Documentation improvements and fixes.

Big thanks to our community members who contributed to this release! @Bojun-Feng @dabrorius @komyg @NathanaelA @vblazenka @genyus

## 0.15.2

### 🐞 Bug fixes

- Fixed build step for apps that use Wasp's new TS config.

## 0.15.1

### 🐞 Bug fixes

- Server and Client setup props are no longer mandatory when using TS Config.

## 0.15.0

### 🎉 New Features and improvements

#### Write your app config in TypeScript (preview feature)

Wasp 0.15.0 ships a preview feature that lets you define your app in `main.wasp.ts` using TypeScript instead of in `main.wasp` using the Wasp DSL.

So, instead of this:

```c
app TodoApp {
  wasp: {
    version: "^0.15.0"
  },
  title: "TodoApp",
  auth: {
    userEntity: User,
    methods: {
      usernameAndPassword: {}
    },
    onAuthFailedRedirectTo: "/login"
  }
}

route RootRoute { path: "/", to: MainPage }
page MainPage {
  authRequired: true,
  component: import { MainPage } from "@src/MainPage"
}
```

You can now write this:

```typescript
import { App } from "wasp-config";

const app = new App("TodoApp", {
  wasp: {
    version: "^0.15.0",
  },
  title: "TodoApp",
});

app.auth({
  userEntity: "User",
  methods: {
    usernameAndPassword: {},
  },
  onAuthFailedRedirectTo: "/login",
});

const mainPage = app.page("MainPage", {
  authRequired: true,
  component: { import: "MainPage", from: "@src/MainPage" },
});
app.route("RootRoute", { path: "/", to: mainPage });
```

To learn more about this feature and how to activate it, check out the [Wasp TS config docs](https://wasp.sh/docs/general/wasp-ts-config).

### ⚠️ Breaking Changes

There are some breaking changes with React Router 6 which will require you to update your code.
Also, the new version of Prisma may cause breaking changes depending on how you're using it.

Read more about breaking changes in the migration guide: https://wasp.sh/docs/migration-guides/migrate-from-0-14-to-0-15 .

### 🐞 Bug fixes

- Allow setting a custom server URL when deploying to Fly.io. (by @Case-E)
- If the user uses native DB types for the `userEntity`, Wasp will use them correctly.

### 🔧 Small improvements

- Upgrade to the latest Prisma version which makes Wasp faster!
- Upgrade to the latest React Router version which sets us up for some cool new features in the future.
- Enable users to use Mailgun's EU region by setting the `MAILGUN_API_URL` env variable.
- Validate `userEntity` ID field's `@default` attribute.

Community contributions by @Case-E @therumbler

## 0.14.2 (2024-09-09)

Updated GPT models used in Wasp AI to latest models, since 3.5 are getting deprecated.

Default model used is now 4o (instead of old 4 + 3.5-turbo combo).

## 0.14.1 (2024-08-26)

### 🎉 New Features

- Wasp now supports `onBeforeLogin` and `onAfterLogin` auth hooks! You can use these hooks to run custom logic before and after a user logs in. For example, you can use the `onBeforeLogin` hook to check if the user is allowed to log in.
- OAuth refresh tokens are here. If the OAuth provider supports refresh tokens, you'll be able to use them to refresh the access token when it expires. This is useful for using OAuth provider APIs in the background e.g. accessing user's calendar events.

### ⚠️ Breaking Changes

- To make the API consistent across different auth hooks, we change how the `onBeforeOAuthRedirect` hook receives the `uniqueRequestId` value to `oauth.uniqueRequestId`.

### 🐞 Bug fixes

- Prisma file parser now allows using empty arrays as default values.

### 🔧 Small improvements

- Replace `oslo/password` with directly using `@node-rs/argon2`
- We now use `websocket` transport for the WebSocket client to avoid issues when deploying the server behind a load balancer.

Community contributions by @rubyisrust @santolucito @sezercik @LLxD!

## 0.14.0 (2024-07-17)

### 🎉 New Features

- Simplified Auth User API: Introduced a simpler API for accessing user auth fields (for example `username`, `email`, `isEmailVerified`) directly on the `user` object, eliminating the need for helper functions.
- Improved the API for calling Operations (Queries and Actions) directly on both the client and the server.
- Improved API for calling Operations (Queries and Actions) directly.
- Auth Hooks: you can now hook into the auth process with `onBeforeSignup`, `onAfterSignup` hooks. You can also modify the OAuth redirect URL with `onBeforeOAuthRedirect` hook.

  ```wasp
  app myApp {
    ...
    auth: {
      onBeforeSignup: import { onBeforeSignup } from "...",
      onAfterSignup: import { onAfterSignup } from "...",
      onBeforeOAuthRedirect: import { onBeforeOAuthRedirect } from "...",
    },
  }
  ```

- Auth: you can now use Discord as a social auth provider (by @wardbox)
- Using the Prisma Schema file directly: define your database schema in the `schema.prisma` file and Wasp will use it to generate the database schema and Prisma client code.
- Added the `wasp db reset` command for resetting the database.

### ⚠️ Breaking Changes & Migration Guide

#### New `tsconfig.json` file

Wasp 0.14.0 requires some changes to your `tsconfig.json` file.
Visit the [migration guide](https://wasp.sh/docs/migrate-from-0-13-to-0-14#bump-the-version-and-update-tsconfigjson) for details.

#### Strict options when building the `wasp` package

The `wasp` package is now built with `strictBindCallApply`, `alwaysStrict`, `noImplicitThis`, and `strictFunctionTypes`.
This is a breaking change only if you have manually set your `tsconfig.json`'s `strict` field to `false` and are relying on it being more permissive.
To fix the errors, enable the options listed above and make sure your code type checks.

This quirk is only temporary. You'll soon be able to use any `tsconfig.json` options you want.
Track this issue for progress: https://github.com/wasp-lang/wasp/issues/1827

#### Directly calling Queries on the client

You can now call Queries directly from the client without dealing with
`queryCacheKey`s. Wasp takes care of it under the hood:

Now:

```typescript
const doneTasks = await getTasks({ isDone: true });
```

Before:

```typescript
const doneTasks = await getTasks(getTasks.queryCacheKey, { isDone: true });
```

#### Accessing `AuthUser` data

We had to make a couple of breaking changes to reach the new simpler Auth API:

1. You don't need to use `getUsername` to access the username:

   - Before: Used `getUsername` to access the username.
   - After: Directly use `user.identities.username?.id`.

2. You don't need to use `getEmail` to access the email:

   - Before: Used `getEmail` to access the email.
   - After: Directly use `user.identities.email?.id`.

3. Better API for accessing `providerData`:

   - Before: Required complex logic to access typed provider data.
   - After: Directly use `user.identities.<provider>.<value>` for typed access.

4. Better API for accessing `getFirstProviderUserId`:

   - Before: Used `getFirstProviderUserId(user)` to get the ID.
   - After: Use `user.getFirstProviderUserId()` directly on the user object.

5. You don't need to use `findUserIdentity` any more:

   - Before: Relied on `findUserIdentity` to check which user identity exists.
   - After: Directly check `user.identities.<provider>` existence.

These changes improve code readability and lower the complexity of accessing user's auth fields. Follow the [detailed migration steps to update your project to 0.14.0](https://wasp.sh/docs/migrate-from-0-13-to-0-14).

#### Using the Prisma Schema file

Wasp now uses the `schema.prisma` file to generate the database schema and Prisma client code. This means that you should move your database schema from the `main.wasp` file to the `schema.prisma` file.

This means that this entity in `main.wasp`:

```wasp
entity Task {=psl
  id          Int @id @default(autoincrement())
  description String
  isDone      Boolean
  userId      Int
  user        User @relation(fields: [userId], references: [id])
psl=}
```

will move to the `schema.prisma` file:

```prisma
model Task {
  id          Int @id @default(autoincrement())
  description String
  isDone      Boolean
  userId      Int
  user        User @relation(fields: [userId], references: [id])
}
```

Read more about the migration steps in the [migration guide](https://wasp.sh/docs/migrate-from-0-13-to-0-14#migrate-to-the-new-schemaprisma-file).

### Note on Auth Helper Functions (`getUsername`, `getEmail` etc.)

These changes only apply to getting auth fields from the `user` object you receive from Wasp, for example in the `authRequired` enabled pages or `context.user` on the server. If you are fetching the user and auth fields with your own queries, you _can_ keep using most of the helpers. Read more [about using the auth helpers](https://wasp.sh/docs/auth/entities#including-the-user-with-other-entities).

### 🐞 Bug fixes

- Updated the `tsconfig.json` to make sure IDEs don't underline `import.meta.env` when users use client env vars.
- Fixed `netlify.toml` to include the correct build path for the client app.
- Fixed the client router to ensure that user defined routes don't override Wasp defined routes by moving the user defined routes to the end of the route list.
- Fixed the CRUD client helpers to accept the same params as the `useQuery` and `useAction` hooks.

### 🔧 Small improvements

- Improved the default loading spinner while waiting for the user to be fetched.
- Hided Prisma update message to avoid confusion since users shouldn't update Prisma by themselves.
- When an unknown OAuth error happens, Wasp now logs the error on the server to help with debugging.
- Improved default gitignore to more tightly target dotenv files and to allow for example dotenv files and .env.client.
- Improved the type signature of client auth helpers (e.g. `getEmail`) to make them accept the minimal required user object.
- Improved the documentation and added extra TypeScript content.
- Improved RPC type inference.

## 0.13.2 (2024-04-11)

### 🐞 Bug fixes

- Fixed problems with Wasp's type inference in projects created using Wasp 0.13.1.

## 0.13.1 (2024-04-04)

### 🐞 Bug fixes

- Vite HMR now works correctly with Wasp's new project structure (no more full-page reloads).
- Keycloak UI helpers are now correctly exported.

### 🔧 Small improvements

- Improved how IDE auto-imports symbols from the `wasp` package. If you have an existing project, add these lines to your `tsconfig.json` to getter better IDE support:

  ```
  {
    "compilerOptions" {
      "target": "esnext",
      "moduleResolution": "bundler",
      // ...
    }
    // ...
  }
  ```

## 0.13.0 (2024-03-18)

### ⚠️ Breaking changes

Wasp 0.13.0 switches away from using Passport for our OAuth providers in favor of [Arctic](https://arctic.js.org/) from the [Lucia](https://lucia-auth.com/) ecosystem. This change simplifies the codebase and makes it easier to add new OAuth providers in the future.

This however, means that there are breaking changes in the way you define OAuth providers in your Wasp project.

Read the migration guide at https://wasp.sh/docs/migrate-from-0-12-to-0-13 for more details.

### 🎉 New features

- Wasp adds support for Keycloak as an OAuth provider.
- Wasp now supports defining the `WASP_SERVER_URL` environment variable and exposes it as `serverUrl` in the server config which can be imported from `wasp/server`.

### 🐞 Bug fixes

- Projects that import `wasp/auth/types` no longer fail when building the web app.
- Wasp now displays OAuth related errors in the browser instead of redirecting to the login page.

### 🔧 Small improvements

- Wasp uses Oslo for handling JWTs.

## 0.12.3 (2024-03-01)

### 🎉 New features

- Wasp AI switched from GPT 3.5 Turbo 0613 to GPT 3.5 Turbo 0125, which gives it bigger context, ensuring generation doesn't fail for bigger apps, while also being cheaper.

## 0.12.2 (2024-02-29)

### 🐞 Bug fixes

- We were adding Crypto polyfill even when not needed (when node > 18), which was then causing an error. Now polyfill is added only if needed.

## 0.12.1 (2024-02-27)

### 🐞 Bug fixes

- Reverted Wasp AI to using GPT3.5-Turbo-0613 instead of new GPT3.5-Turbo-0125 since 0125 would often return code that is missing newlines.

## 0.12.0 (2024-02-27)

This is a big update, introducing major changes that span the entirety of Wasp, specifically the new project structure and new Auth.

### ⚠️ Breaking changes

If your project is using an older version of Wasp, you will want to check out the detailed migration instructions at https://wasp.sh/docs/migrate-from-0-11-to-0-12 .

#### New project structure

The output of `wasp new myProject` before 0.12.0:

```
.
├── .gitignore
├── main.wasp
├── src
│   ├── client
│   │   ├── Main.css
│   │   ├── MainPage.jsx
│   │   ├── react-app-env.d.ts
│   │   ├── tsconfig.json
│   │   └── waspLogo.png
│   ├── server
│   │   └── tsconfig.json
│   ├── shared
│   │   └── tsconfig.json
│   └── .waspignore
└── .wasproot
```

The output of `wasp new myProject` with 0.12.0:

```
.
├── .gitignore
├── main.wasp
├── package.json
├── public
│   └── .gitkeep
├── src
│   ├── Main.css
│   ├── MainPage.jsx
│   ├── queries.ts
│   ├── vite-env.d.ts
│   ├── .waspignore
│   └── waspLogo.png
├── tsconfig.json
├── vite.config.ts
└── .wasproot
```

The main differences are:

- Your project now has a `package.json` file.
- `tsconfig.json`, `vite.config.ts`, and `public/` moved to the top dir.
- The server/client code separation is no longer necessary. You can now organize your code however you want, as long as it's inside the `src/` directory.
- All external imports in your Wasp file now must have paths starting with `@src` (e.g., `import foo from '@src/MainPage.jsx'`). The paths can no longer start with `@server` or `@client`.

#### New Auth

Before 0.12.0, authentication in Wasp was based on the `User` model which the developer needed to set up properly and take care of the auth fields like `email` or `password`.

With 0.12.0, authentication is based on the auth models which are automatically set up by Wasp. You don't need to take care of the auth fields anymore, be it by adding them to the `User` model or by adding whole new entities like `SocialLogin`.

The `User` model is now just a business logic model and you use it for storing the data that is relevant for your app.

In the background, Wasp is now using [Lucia](https://github.com/lucia-auth/lucia) as the core auth library.

#### Naming requirements

Operation (i.e., Queries and Actions) and Job names in `.wasp` files must now begin with a lowercase letter: `query getTasks {...}`, `job sendReport {...}`.

Entity names in `.wasp` files must now begin with an uppercase letter: `entity Foo {...}`.

##### Regression Notes

- Multiple auth methods per single user are not allowed anymore (while before a user could first sign up with a social account and then add email/pass to it).
- Auth field customization is no longer possible using the `_waspCustomValidations` on the `User` entity.
  These are both temporary regressions and will be replaced with better mechanisms in the future.

### 🎉 [New Feature] Wasp now works with any Node version >= 18

So far, Wasp required a specific Node version that is compatible with the latest LTS Node (lately that was 18).

We relaxed that constraint so it now works with any Node version equal to or newer than the oldest LTS version that Wasp supports, meaning that now Wasp works with any Node version >= 18.

### 🎉 [New Feature] Wasp AI in the CLI (`wasp new:ai`)

While so far it was available only through the https://usemage.ai , Wasp AI is now also available via the `wasp` CLI, enabling you to create a new Wasp app from nothing more than a title and a short description.

You can run it by picking AI as an option in the `wasp new` wizard, or via `wasp new:ai` which allows you to provide all the details via the command line (useful for more programmatic usage).

You need to provide your own OpenAI API token, but that also means you can choose which model to use for the code generation: e.g. you can use GPT-4 all the way, instead of the default GPT-4 + GPT-3 combo that https://usemage.ai uses.

### 🎉 [New Feature] New template: Open Saas

Wasp now comes with a new template for kickstarting your apps, specifically SaaS apps: https://opensaas.sh/ .

This is the richest template for Wasp so far, with features like Stripe integration, admin dashboard, file uploading, blog (Astro), ...

You can choose it from the `wasp new`'s wizard.

---

## 0.11.8

### 🎉 [New Feature] Serving the Client From a Subdirectory

You can now serve the client from a subdirectory. This is useful if you want to serve the client from a subdirectory of your domain, e.g. `https://example.com/my-app/`.

To do this, you need to add the `client.baseDir` property to your `.wasp` file:

```wasp
app todoApp {
  // ...
  client: {
    baseDir: "/my-app",
  },
}
```

### 🐞 Bug fixes / 🔧 small improvements

- Changed the minimum number of machines that a server app is using when deployed to Fly.io from 0 to 1. This prevents the server app from shutting down when there are no requests to it. There might be some other work that the server is doing e.g. running periodic Jobs or sending e-mails, so we want to make sure that the server is always running.
- Fixes a bug where copying of migrations dir failed due to a missing `migrations` dir.
- Fixes a regression where a missing DB on the DB server would prevent project from running. Now, Wasp will tolerate the missing DB error and rely on Prisma to create the DB for you (like before).
- Fixes an issue on Linux where running Prisma migration command fails when a project has a path that has spaces in it.

---

## 0.11.7

### 🐞 Bug fixes / 🔧 small improvements

- Fixed a bug with Prisma which prevent connections via SSL with our versions of Alpine and OpenSSL. We upgraded to the latest Prisma 4.X.X which fixes this issue.

---

## 0.11.6

### 🎉 [New Feature] Enable Customising the Vite Config

You can now customise the Vite config for your client app. This allows you to add plugins, change the dev server settings and more.

By adding a `vite.config.ts` or `vite.config.js` to your `client` directory, you can customise the Vite config. For example, you change the dev server behaviour
not to open the browser automatically:

```ts
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: false,
  },
});
```

⚠️ Be careful when changing the dev server port, you'll need to update the `WASP_WEB_CLIENT_URL` env var in your `.env.server` file.

### 🚧 [Experimental Feature] Wasp Studio

Running `wasp studio` in the root of your project starts Wasp Studio which visualises your application and shows you the relationships between pieces of your app. It is an experimental feature which is not yet fully ready, but we are working on it and will be adding more features to it in the future.

## 0.11.5

### 🐞 Bug fixes / 🔧 small improvements

- Fixed a bug in Auth UI imports that prevented users from using the social login buttons.

## 0.11.4

### 🎉 [New Feature] Signup Fields Customization

We added an API for extending the default signup form with custom fields. This allows you to add fields like `age`, `address`, etc. to your signup form.

You first need to define the `auth.signup.additionalFields` property in your `.wasp` file:

```wasp
app crudTesting {
  // ...
  auth: {
    userEntity: User,
    methods: {
      usernameAndPassword: {},
    },
    onAuthFailedRedirectTo: "/login",
    signup: {
      additionalFields: import { fields } from "@server/auth.js",
    },
  },
}
```

Then, you need to define the `fields` object in your `auth.js` file:

```js
import { defineAdditionalSignupFields } from "@wasp/auth/index.js";

export const fields = defineAdditionalSignupFields({
  address: (data) => {
    // Validate the address field
    if (typeof data.address !== "string") {
      throw new Error("Address is required.");
    }
    if (data.address.length < 10) {
      throw new Error("Address must be at least 10 characters long.");
    }
    // Return the address field
    return data.address;
  },
});
```

Finally, you can extend the `SignupForm` component on the client:

```jsx
import { SignupForm } from "@wasp/auth/forms/Signup";

export const SignupPage = () => {
  return (
    <div className="container">
      <main>
        <h1>Signup</h1>
        <SignupForm
          additionalFields={[
            {
              name: "address",
              label: "Address",
              type: "input",
              validations: {
                required: "Address is required",
              },
            },
          ]}
        />
      </main>
    </div>
  );
};
```

### 🎉 [New Feature] Support for PostgreSQL Extensions

Wasp now supports PostgreSQL extensions! You can enable them in your `main.wasp` file:

```wasp
app todoApp {
  // ...
  db: {
    system: PostgreSQL,
    prisma: {
      clientPreviewFeatures: ["postgresqlExtensions"],
      dbExtensions: [{
        name: "pgvector",
        // map: "vector", (optional)
        // schema: "public", (optional)
        // version: "0.1.0", (optiona)
      }]
    }
  }
}
```

This will add the necessary Prisma configuration to your `schema.prisma` file. Keep in mind that your database needs to support the extension you want to use. For example, if you want to use the `pgvector` extension, you need to install it in your database first.

### 🎉 [New Feature] Added Typescript support for Jobs

Now you can type your async jobs better and receive all the benefits of Typescript. When you define a job, Wasp will generate a generic type which you can use to type your job function:

```wasp
job simplePrintJob {
  executor: PgBoss,
  perform: {
    fn: import { simplePrint } from "@server/jobs.js",
  },
  entities: [Task]
}
```

```typescript
import { SimplePrintJob } from "@wasp/jobs/simplePrintJob";
import { Task } from "@wasp/entities";

export const simplePrint: SimplePrintJob<
  { name: string },
  { tasks: Task[] }
> = async (args, context) => {
  //        👆 args are typed e.g. { name: string }
  //                👆 context is typed e.g. { entitites: { Task: ... } }
  const tasks = await context.entities.Task.findMany({});
  return {
    tasks,
  };
};
```

When you use the job, you can pass the arguments and receive the result with the correct types:

```typescript
import { simplePrintJob } from "@wasp/jobs/simplePrintJob.js";

...
const job = await simplePrintJob.submit({ name: "John" })
...
const result = await result.pgBoss.details()
//      👆 result is typed e.g. { tasks: Task[] }
```

## 0.11.3

### 🎉 [New Feature] Type-safe links

Wasp now offers a way to link to pages in your app in a type-safe way. This means that you can't accidentally link to a page that doesn't exist, or pass the wrong arguments to a page.

After you defined your routes:

```wasp
route TaskRoute { path: "/task/:id", to: TaskPage }
```

You can get the benefits of type-safe links by using the `Link` component from `@wasp/router`:

```jsx
import { Link } from '@wasp/router'

export const TaskList = () => {
  // ...

  return (
    <div>
      {tasks.map((task) => (
        <Link
          key={task.id}
          to="/task/:id"
      {/* 👆 You must provide a valid path here */}
          params={{ id: task.id }}>
      {/* 👆 All the params must be correctly passed in */}
          {task.description}
        </Link>
      ))}
    </div>
  )
}
```

You can also get all the pages in your app with the `routes` object:

```jsx
import { routes } from "@wasp/router";

const linkToTask = routes.TaskRoute({ params: { id: 1 } });
```

### 🐞 Bug fixes

- Fixes API types exports for TypeScript users.
- Default .gitignore that comes with new Wasp project (`wasp new`) is now more aggressive when ignoring .env files, ensuring they don't get committed by accident (wrong name, wrong location, ...).

## 0.11.2

### 🎉 [New Feature] waspls Code Scaffolding

When an external import is missing its implementation, waspls now offers a Code Action to quickly scaffold the missing JavaScript or TypeScript function:

```wasp
query getTasks {
  fn: import { getTasks } from "@server/queries.js",
  //  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //  ERROR: `getTasks` is not exported from `src/server/queries.ts`
  entities: [Task],
}
```

Using the code action (pressing <kbd>Ctrl</kbd> + <kbd>.</kbd> or clicking the lightbulb 💡 icon in VSCode) will add the following code to `src/server/queries.ts`:

```ts
import { GetTasks } from '@wasp/queries/types'

import GetTasksInput = void
import GetTasksOutput = void

export const getTasks: GetTasks<GetTasksInput, GetTasksOutput> = async (args, context) => {
  // Implementation goes here
}
```

### 🐞 Bug fixes / 🔧 small improvements

- Wasp copied over the `.env.server` instead of `.env.client` to the client app `.env` file. This prevented using the `.env.client` file in the client app.
- waspls thought that importing `"@client/file.jsx"` could mean `"@client/file.tsx"`, which could hide some missing import diagnostics and cause go-to definition to jump to the wrong file.

## 0.11.1

### 🎉 [New feature] Prisma client preview flags

Wasp now allows you to enable desired `previewFeatures` for the Prisma client:

```
app MyApp {
  title: "My app",
  // ...
  db: {
    // ...
    prisma: {
      clientPreviewFeatures: ["extendedWhereUnique"]
    }
  }
}
```

Read all about Prisma preview features in [the official docs](https://www.prisma.io/docs/concepts/components/preview-features/client-preview-features).

## v0.11.0

### 🎉 Big new features 🎉

- Automatic CRUD backend generation
- Public folder support
- Type safe WebSocket support
- Go to definition for imports in Wasp file

Check below for details on each of them!

### ⚠️ Breaking changes

- Wasp's **signup action** `import signup from '@wasp/auth/signup` now accepts only the user entity fields relevant to the auth process (e.g. `username` and `password`).
  This ensures no unexpected data can be inserted into the database during signup, but it also means you can't any more set any user entity fields via signup action (e.g. `age` or `address`).
  Instead, those should be set in the separate step after signup, or via a custom signup action of your own.
- Wasp now uses **React 18**! Check the following upgrade guide for details: https://react.dev/blog/2022/03/08/react-18-upgrade-guide .
  The most obvious difference you might notice is that your `useEffect` hooks run twice on component mount.
  This is due to the React 18's StrictMode, and it happens only during development, so it doesn't change the behaviour of your app in production.
  For more details on StrictMode, check https://react.dev/reference/react/StrictMode .
- Updated most of the npm dependencies that Wasp app is generated with (e.g. axios), so you will also need to update those that both you and Wasp use.
  Wasp will inform you about this with a warning/error message during compilation so just follow instructions.

### 🎉 [New feature] Public directory support

Wasp now supports a `public` directory in the `client` directory!

```
main.wasp
src/
├── client/
|   ├── public/  # <-- NEW!
|   |   ├── favicon.ico
|   |   └── robots.txt
|   └── ...
└── ...
```

All the files in this directory will be copied as they are to the `public` directory in the build folder.
This is useful for adding static assets to your project, like favicons, robots.txt, etc.

### 🎉 [New feature] Type safe WebSocket support

Wasp now supports WebSockets! This will allow you to have a persistent, realtime connection between your client and server, which is great for chat apps, games, and more.
What's more, Wasp's WebSockets support full-stack type safety, so you can be sure that your client and server are communicating with strongly typed events.

Enable WebSockets in your project by adding the following to your `main.wasp` file:

```
app todoApp {
  // ...

  webSocket: {
    fn: import { webSocketFn } from "@server/webSocket.js",
    autoConnect: true, // optional, default: true
  },
}
```

Then implement it on the server with optional types:

```typescript
import type { WebSocketDefinition } from "@wasp/webSocket";

export const webSocketFn: WebSocketFn = (io, context) => {
  io.on("connection", (socket) => {
    // ...
  });
};

type WebSocketFn = WebSocketDefinition<
  ClientToServerEvents,
  ServerToClientEvents
>;

interface ServerToClientEvents {
  chatMessage: (msg: { id: string; username: string; text: string }) => void;
}

interface ClientToServerEvents {
  chatMessage: (msg: string) => void;
}
```

And use it on the client with automatic type inference:

```typescript
import React, { useState } from "react";
import {
  useSocket,
  useSocketListener,
  ServerToClientPayload,
} from "@wasp/webSocket";

export const ChatPage = () => {
  const [messageText, setMessageText] = useState<
    // We are using a helper type to get the payload type for the "chatMessage" event.
    ClientToServerPayload<"chatMessage">
  >("");
  const [messages, setMessages] = useState<
    ServerToClientPayload<"chatMessage">[]
  >([]);
  // The "socket" instance is typed with the types you defined on the server.
  const { socket, isConnected } = useSocket();

  // This is a type-safe event handler: "chatMessage" event and its payload type
  // are defined on the server.
  useSocketListener("chatMessage", logMessage);

  function logMessage(msg: ServerToClientPayload<"chatMessage">) {
    setMessages((priorMessages) => [msg, ...priorMessages]);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // This is a type-safe event emitter: "chatMessage" event and its payload type
    // are defined on the server.
    socket.emit("chatMessage", messageText);
    // ...
  }

  // ...
};
```

### 🎉 [New feature] Automatic CRUD backend generation

You can tell Wasp to automatically generate server-side logic (Queries and Actions) for creating, reading, updating, and deleting a specific entity. As you change that entity, Wasp automatically regenerates the backend logic.

Example of a `Task` entity with automatic CRUD:

```
crud Tasks {
  entity: Task,
  operations: {
    getAll: {
      isPublic: true, // by default only logged in users can perform operations
    },
    get: {},
    create: {
      overrideFn: import { createTask } from "@server/tasks.js",
    },
    update: {},
    delete: {},
  },
}
```

This gives us the following operations: `getAll`, `get`, `create`, `update` and `delete`, which we can use in our client like this:

```typescript
import { Tasks } from "@wasp/crud/Tasks";
import { useState } from "react";

export const MainPage = () => {
  const { data: tasks, isLoading, error } = Tasks.getAll.useQuery();
  const createTask = Tasks.create.useAction();
  // ...

  function handleCreateTask() {
    createTask({ description: taskDescription, isDone: false });
    setTaskDescription("");
  }

  // ...
};
```

### 🎉 [New feature] IDE tooling improvements

#### Go to definition from wasp file + detection of invalid imports

```
query getRecipes {
  fn: import { getRecipes } from "@server/recipe.js",  // <- You can now click on this import!
  entities: [Recipe],
}
```

Wasp language server just got smarter regarding imports in wasp file!

1. If there is no file to which import points, error is reported.
2. If file doesn't contain symbol that we are importing, error is reported.
3. Clicking on import statement now takes you to the code that is being imported.

We have more ideas in this direction on the way though!
A bit of a sneak peek of what is coming soon: if Wasp recognizes file / symbol is missing, it will offer to scaffold the code for you!

#### Autocompletion for dictionary keys

```
app RecipeApp {
  title: "My Recipes",
  wasp: { version: "^0.10.0" },
  auth: {
    methods: { usernameAndPassword: {} },
    █       // <- your cursor
  }
}
```

As per popular request, Wasp language server now recognizes when you are in dictionary and will offer possible key values for autocompletion!
For instance, in the code example above, it will offer completions such as `onAuthFailedRedirectTo`, `userEntity`, ... .
It will also show their types.

### 🐞 Bug fixes / 🔧 small improvements

- Wasp now uses TypeScript to ensure all payloads sent to or from operations (queries and actions) are serializable.
- Wasp starter templates now show description.
- Wasp CLI now correctly exits with exit code 1 after compiler bug crash.
- Added extra type info to middleware customization fn.
- Upgraded most of the dependencies (with react-router and prisma upgrades coming soon).
- Wasp CLI now always shows a nice error message when database is not accessible.
- We now ensure that User entity's username field must have `unique` attribute.
- Improved how Wasp CLI detects wrong/missing node + the error message it prints.

## v0.10.6

### Bug fixes

- `wasp deploy fly launch` now supports the latest `flyctl launch` toml file for the web client (which changed their default structure and port).

### More `wasp deploy fly` options

`wasp deploy fly` now supports a `--org` option, as well as setting secrets during `launch`.

## v0.10.5

### Bug fixes

- Wasp CLI will now forward error exit codes. This will help when used in scripted contexts.
- Wasp now renders only the first route that matches the current path in the browser.

### Express middleware customization

We now offer the ability to customize Express middleware:

- globally (impacting all actions, queries, and apis by default)
- on a per-api basis
- on a per-path basis (groups of apis)

### Interactive new project creation

We now offer an interactive way to create a new project. You can run `wasp new` and follow the prompts to create a new project. This is the recommended way to create a new project. It will ask you for the project name and to choose one of the starter templates.

## v0.10.4

### Bug fixes

- Adds missing import for HttpError which prevent auth from working properly.

## v0.10.3

- Fixed a bug with circular imports in JS code which prevented database seeding from working properly.

## v0.10.2

### Bug fixes

- Fixed a bug where JS arrays weren't generated properly from Haskell code which caused issues with oAuth, operations and cache invalidation.

## v0.10.1

### Bug fixes

- Fixed several TypeScript errors preventing the frontend build

## v0.10.0

### Breaking changes

- We changed `LoginForm` and `SignupForm` to use a named export instead of a default export, this means you must use them like this:
  - `import { LoginForm } from '@wasp/auth/forms/Login'`
  - `import { SignupForm } from '@wasp/auth/Signup'`
- We changed some of the extensions on Wasp-provided imports from `.js` to `.ts`. For example `useAuth.js` is now `useAuth.ts`. Therefore, you should import them like this: `import useAuth from '@wasp/auth/useAuth'` (without the `.js` extension). Some other affected imports are `@wasp/auth/login.js`, `@wasp/auth/logout.js`, and similar.
- We changed the type arguments for `useQuery` and `useAction` hooks. They now take two arguments (the `Error` type argument was removed):
  - `Input` - This type argument specifies the type for the **request's payload**.
  - `Output` - This type argument specifies the type for the **resposne's payload**.

### Full-stack type safety for Operations

Frontend code can now infer correct payload/response types for Queries and Actions from their definitions on the server.

Define a Query on the server:

```typescript
export const getTask: GetTaskInfo<Pick<Task, "id">, Task> = async (
  { id },
  context,
) => {
  // ...
};
```

Get properly typed functions and data on the frontend:

```typescript
import { useQuery } from "@wasp/queries";
// Wasp knows the type of `getTask` thanks to your backend definition.
import getTask from "@wasp/queries/getTask";

export const TaskInfo = () => {
  const {
    // TypeScript knows `task` is a `Task | undefined` thanks to the
    // backend definition.
    data: task,
    // TypeScript knows `isError` is a `boolean`.
    isError,
    // TypeScript knows `error` is of type `Error`.
    error,
    // TypeScript knows the second argument must be a `Pick<Task, "id">` thanks
    // to the backend definition.
  } = useQuery(getTask, { id: 1 });

  if (isError) {
    return (
      <div> Error during fetching tasks: {error.message || "unknown"}</div>
    );
  }

  // TypeScript forces you to perform this check.
  return taskInfo === undefined ? (
    <div>Waiting for info...</div>
  ) : (
    <div>{taskInfo}</div>
  );
};
```

The same feature is available for Actions.

### Payloads compatible with Superjson

Client and the server can now communicate with richer payloads.

Return a Superjson-compatible object from your Operation:

```typescript
type FooInfo = { foos: Foo[]; message: string; queriedAt: Date };

const getFoos: GetFoo<void, FooInfo> = (_args, context) => {
  const foos = context.entities.Foo.findMany();
  return {
    foos,
    message: "Here are some foos!",
    queriedAt: new Date(),
  };
};
```

And seamlessly use it on the frontend:

```typescript
import getfoos from "@wasp/queries/getTask";

const { data } = useQuery(getfoos);
const { foos, message, queriedAt } = data;
// foos: Foo[]
// message: string
// queriedAt: Date
```

### E-mail authentication

You can now use e-mail authentication in your Wasp app! This means that users can sign up and log in using their e-mail address. You get e-mail verification and password reset out of the box.

```c
app MyApp {
  // ...
  auth: {
    // ...
    email: {
        fromField: {
          name: "ToDO App",
          email: "hello@itsme.com"
        },
        emailVerification: {
          getEmailContentFn: import { getVerificationEmailContent } from "@server/auth/email.js",
          clientRoute: EmailVerificationRoute,
        },
        passwordReset: {
          getEmailContentFn: import { getPasswordResetEmailContent } from "@server/auth/email.js",
          clientRoute: PasswordResetRoute
        },
        allowUnverifiedLogin: false,
      },
  }
}
```

You can only use one of e-mail or username & password authentication in your app. You can't use both at the same time.

### Auth UI components

Wasp now provides a set of UI components for authentication. You can use them to quickly build a login and signup page for your app. The UI changes dynamically based on your Wasp config.

We provide `LoginForm`, `SignupForm`, `ForgotPassworForm`, `ResetPasswordForm` and`VerifyEmailForm` components. You can import them from `@wasp/auth/forms` like:

```js
import { LoginForm } from "@wasp/auth/forms/Login";
import { SignupForm } from "@wasp/auth/forms/Signup";
import { ForgotPasswordForm } from "@wasp/auth/forms/ForgotPassword";
import { ResetPasswordForm } from "@wasp/auth/forms/ResetPassword";
import { VerifyEmailForm } from "@wasp/auth/forms/VerifyEmail";
```

### Database seeding

You can now define JS/TS functions for seeding the database!

```c
app MyApp {
  // ...
  db: {
    seeds: [
      import { devSeedSimple } from "@server/dbSeeds.js",
      import { prodSeed } from "@server/dbSeeds.js",
    ]
  }
}
```

```js
import { createTask } from "./actions.js";

export const devSeedSimple = async (prismaClient) => {
  const { password, ...newUser } = await prismaClient.user.create({
    username: "RiuTheDog",
    password: "bark1234",
  });
  await createTask(
    { description: "Chase the cat" },
    { user: newUser, entities: { Task: prismaClient.task } },
  );
};

//...
```

Run `wasp db seed` to run database seeding. If there is only one seed, it will run that one, or it will interactively ask you to pick one.
You can also do `wasp db seed <name>` to run a seed with specific name: for example, for the case above, you could do `wasp db seed prodSeed`.

### The `api` keyword for defining an arbitrary endpoint and URL

Need a specific endpoint, like `/healthcheck` or `/foo/callback`? Or need complete control of the response? Use an `api` to define one by tying a JS function to any HTTP method and path! For example:

```ts
// main.wasp
api fooBar {
  fn: import { foo } from "@server/apis.js",
  entities: [Task],
  httpRoute: (GET, "/foo/callback")
}

// server/api.ts
import { FooBar } from '@wasp/apis/types'

export const fooBar : FooBar = (req, res, context) => {
  res.set('Access-Control-Allow-Origin', '*') // Example of modifying headers to override Wasp default CORS middleware.
  res.json({ msg: `Hello, ${context.user?.username || "stranger"}!` })
}
```

### E-mail sending support

Wasp now supports sending e-mails! You can use the `emailSender` app property to configure the e-mail provider and optionally the `defaultFrom` address. Then, you can use the `send` function in your backend code to send e-mails.

```ts
// main.wasp
app MyApp {
  emailSender: {
    provider: SendGrid,
    defaultFrom: {
      name: "My App",
      email: "myapp@domain.com"
    },
  },
}

// server/actions.ts
import { emailSender } from '@wasp/email/index.js'

// In some action handler...
const info = await emailSender.send({
    to: 'user@domain.com',
    subject: 'Saying hello',
    text: 'Hello world',
    html: 'Hello <strong>world</strong>'
})
```

### `wasp start db` -> Wasp can now run your dev database for you with a single command

Moving from SQLite to PostgreSQL with Wasp can feel like increase in complexity, because suddenly you have to care about running your PostgreSQL database, providing connection URL for it via env var, and if you checkout somebody's else Wasp project, or your old Wasp project that you have no memory of any more, you also have to figure all that out.

To help with that, we now added `wasp start db`, which runs a development database for you!
That it, all you need to do is run `wasp start db` and you are good to go. No env var setting, no remembering how to run the db.

NOTE: Requires `docker` to be installed and in `PATH`, and docker daemon to be running.

### `wasp test client` -> Wasp can now test your web app code

By leveraging Vitest and some supporting libraries, Wasp now makes it super easy to add unit tests and React component tests to your frontend codebase.

### `pg-boss` upgraded to latest version (8.4.2)

This `pg-boss` release fixes an issue where the node server would exit due to an unhandled exception when the DB connection was lost.

### Bug fixes

- Starts the process of removing the coupling between `usernameAndPassword` and social logins. Now, your `userEntity` no longer requires a `username` or `password` field if you only want to use Google/GitHub for auth.

## v0.9.0

### BREAKING CHANGES

- All client files which use `JSX` need to have either the `.jsx` or the `.tsx` extension. This is because we now use `Vite` under the hood instead of `Create React App`, and `Vite` requires these extensions to be present to process `JSX`` properly.
- The Tailwind and PostCSS config files need to have the `.cjs` extension. These config files are CommonJS modules, and with `Vite` we are using ES modules by default.

### Wasp now uses Vite instead of Create React App

We moved away from using Create React App for the client app. This means that dev startup time will be much faster and we are following the latest best practices for building web apps with React.

### Express `app` and http `server` available in server `setupFn`

Wasp now passes in a context to the server `setupFn` that contains Express `app` and http `server` objects. This can be used as an escape hatch for things like custom routes or WebSocket support.

## v0.8.2

### Non-breaking Changes

- The Dockerfile has been updated to build the server files during the Docker build stage instead of during server startup. This will reduce the memory footprint required for running apps.

### Bug fixes

- Fixes a file lock error that kills CLI when changing entities with `wasp start` running on newer Macs.

### Support for defining the web app's root component

You can now define a root component for your client app. This is useful if you want to wrap your app in a provider or have a common layout. You can define it in `app.client.rootComponent` in your `.wasp` file.

### `wasp deploy` CLI command added

We have made it much easier to deploy your Wasp apps via a new CLI command, `wasp deploy`. 🚀 This release adds support for Fly.io, but we hope to add more hosting providers soon!

### Import Wasp Entity types (on frontend and backend)

You can now import and use the types of Wasp entities anywhere in your code.

Let's assume your Wasp file contains the following entity:

```c
entity Task {=psl
    id          Int     @id @default(autoincrement())
    description String
    isDone      Boolean @default(false)
    user        User    @relation(fields: [userId], references: [id])
    userId      Int
psl=}
```

Here's how you can access and use its type in a backend file:

```typescript
import { Task } from '@wasp/entities/Task'

const getTasks = (args, context) => {
    const tasks: Task[] = // ...
    // ...
}
```

And here's how you can to the same in a frontend file:

```typescript
// ...
import { useQuery } from "@wasp/queries";
import getTasks from "@wasp/queries/getTasks.js";
import { Task } from "@wasp/entities";

type TaskPayload = Pick<Task, "id">;

const Todo = (props: any) => {
  // The variable 'task' will now have the type Task.
  const { data: task } = useQuery<TaskPayload, Task>(getTask, { id: taskId });
  // ...
};
```

### Automatically generated types for Queries and Actions

Wasp now automatically generates appropriate types for the operations specified
in your `.wasp` file. This reduces duplication and eliminates possible errors
(i.e., no way to specify incorrect entities). Assuming your `.wasp` file looks
like this:

```c
query getTasks {
  fn: import { getTasks } from "@server/queries.js",
  entities: [Task]
}
```

You'll get the following feature:

```typescript
import { Task } from "@wasp/entities";
import { GetTasks } from "@wasp/queries";

type Payload = Pick<Task, "isDone">;

// Use the type parameters to specify the Query's argument and return types.
const getTasks: GetTasks<Payload, Task[]> = (args, context) => {
  // Thanks to the definition in your `.wasp` file, the compiler knows the type
  // of `context` (and that it contains the `Task` entity).
  //
  // Thanks to the first type argument in `GetTasks`, the compiler knows `args`
  // is of type `Payload`.
  //
  // Thanks to the second type argument in `GetTasks`, the compiler knows the
  // function must return a value of type `Task[]`.
};
```

### Uninstall command

If you want to uninstall Wasp from your system, you can now do so with:

```bash
wasp uninstall
```

It will remove all of the Wasp binaries and data from your system.

## v0.8.1

### Remove npm version constraint

We are removing the requirement for a specific npm version to enable following the Node.js LTS releases (Node.js LTS releases sometimes bump the major `npm` version).
We are still requiring Node.js to be version 18, but the `npm` version can be anything and for most of Wasp users it will be the version that comes with Node.js.

## v0.8.0

### BREAKING CHANGES

- Social auth had several breaking changes as we added a new provider (GitHub).
  - Buttons and sign in URLs now have a different, standardized import name for each provider.
    - Google exe: `import { SignInButton as GoogleSignInButton, signInUrl, logoUrl } from '@wasp/auth/buttons/Google'`
  - Buttons themselves have been restyled to make them more uniform, and no longer take an optional `height` parameter.
  - Social config object now use a `clientID` property instead of `clientId`.

### GitHub added as a social login

We have added GitHub as another social login option. It is as easy to use as Google, and only requires adding `gitHub` to your `app.auth.methods` plus two environment variables (`GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`)! Check out the docs for more.

## v0.7.3

### MINOR CLI BREAKING CHANGE

- The CLI command for applying a migration with a name has changed from `wasp db migrate-dev foo` to `wasp db migrate-dev --name foo`. This allowed us to add more flags, like `--create-only`.

### Bug fixes

- Again fixed Dockerfile generated with `wasp build` (after fixing it only half-way last time :facepalm) -> Prisma would break due to unsupported version of openssl.

## v0.7.2

### Bug fixes

- Fixed Dockerfile generated with `wasp build` -> Prisma would break due to unsupported version of openssl.
  https://github.com/wasp-lang/wasp/issues/877

## v0.7.1

### Bug fixes

- Fixed a bug that was causing Wasp to forget about compiling backend code before running it in production

## v0.7.0 - Beta Release!

### BREAKING CHANGES

- Updates Create React App from version 4.0.3 to 5.0.1. This brings many improvements as well as downstream library updates. It also has a list of possible breaking changes: https://github.com/facebook/create-react-app/blob/main/CHANGELOG.md
- Updates Prisma from version 3.15.2 to 4.5.0. Please check out their upgrade guide: https://www.prisma.io/docs/guides/upgrade-guides/upgrading-versions/upgrading-to-prisma-4 and release notes: https://github.com/prisma/prisma/releases for any possible breaking changes.
- Removes default `index.css` file that provided basic `body` defaults. Now, there is no default CSS applied.
- Updates required Node LTS version from version 16 to version 18. This Node ecosystem change happened on 2022-10-25: https://github.com/nodejs/Release

#### Significant changes to Wasp project structure

This was the file tree of a newly generated project in the previous version of Wasp
(i.e., this was what you used to get by running `wasp new project`):

```
.
├── ext
│   ├── Main.css
│   ├── MainPage.js
│   ├── .waspignore
│   └── waspLogo.png
├── .gitignore
├── main.wasp
└── .wasproot
```

This is the file tree of a newly generated project in the newest release of Wasp (i.e., this is what you will
get by running `wasp new project` from this point onwards):

```
.
├── .gitignore
├── main.wasp
├── src
│   ├── client
│   │   ├── Main.css
│   │   ├── MainPage.jsx
│   │   ├── react-app-env.d.ts
│   │   ├── tsconfig.json
│   │   └── waspLogo.png
│   ├── server
│   │   └── tsconfig.json
│   ├── shared
│   │   └── tsconfig.json
│   └── .waspignore
└── .wasproot
```

Main differences:

- All server-side code must be located inside the `src/server` directory. Wasp
  declarations must import this code with `import foo from "@server/foo.js"`
  (instead of `import foo from "@ext/foo.js"`)
- All client-side code must be located inside the `src/client` directory. Wasp
  declarations must import this code with `import foo from "@client/bar.js"`
  (instead of `import bar from "@ext/bar.js"`)
- All shared code (i.e., used on both the client and the server) must be
  located inside the `src/shared` and imported where needed through a relative import.
- Each of these subdirectories (i.e., `src/server`, `src/client`, and
  `src/shared`) comes with a pregenerated `tsconfig.json` file. This file helps
  with IDE support (e.g., jumping to definitions, previewing types, etc.) and you
  shouldn't delete it. The same goes for `react-app-env.d.ts`

The new structure is fully reflected in [our docs](https://wasp.sh/docs/language/overview), but we'll also
provide a quick guide for migrating existing projects.

##### Migrating an existing Wasp project to the new structure

You can easily migrate your old Wasp project to the new structure by following a
series of steps. Assuming you have a project called `foo` inside the
directory `foo`, you should:

1. Install the latest version of Wasp
2. Rename your project's root directory to something like `foo_old`
3. Create a new project by running `wasp new foo`
4. Copy all server-side code from `foo_old/ext` to `foo/src/server`
5. Copy all client-side code from `foo_old/ext` to `foo/src/client`
6. Copy all shared code (if any) from `foo_old/ext` to `foo/src/shared` and
   adapt imports in files that reference it:
   - For example, `import bar from './bar.js'` becomes `import bar from "../shared/bar.js"`
7. Copy all lines you might have added to `foo_old/.gitignore` into
   `foo/.gitignore`
8. Finally, copy `foo_old/main.wasp` to `foo/main.wasp` and correct external
   imports: - Queries, Actions, Jobs, and the Server setup function must import their code from `@server` - Pages and the Client setup function must import their code from `@client`

   For example, if you previously had something like:

   ```js
   page LoginPage {
     // This previously resolved to ext/LoginPage.js
     component: import Login from "@ext/LoginPage.js"
   }

   // ...

   query getTasks {
     // This previously resolved to ext/queries.js
     fn: import { getTasks } from "@ext/queries.js",
   }
   ```

   You should change it to:

   ```js
   page LoginPage {
     // This resolves to src/client/LoginPage.js
     component: import Login from "@client/LoginPage"
   }

   // ...

   query getTasks {
     // This resolves to src/server/queries.js
     fn: import { getTasks } from "@server/queries.js",
   }
   ```

   Do this for all external imports in your `.wasp` file. After you're done, there shouldn't be any occurences of the string `"@ext"`.

That's it! You should now have a fully working Wasp project in the `foo` directory.

### [NEW FEATURE] TypeScript support

Wasp now allows you to write TS and TSX files. Some (but not all) Wasp features
come with type definitions. Except more type definitions and even better
integration with TypeScript in future versions!

### [NEW FEATURE] Dockerfile customization

You can now customize the default Wasp Dockerfile by either extending/replacing our build stages or using your own custom logic. To make use of this feature, simply add a Dockerfile to the root of your project and it will be appended to the bottom of the existing Wasp Dockerfile.

### [NEW FEATURE] Tailwind CSS support

You can now use the Tailwind CSS framework in your project by simply adding two config files. Check out the Integrations section of our Docs for more!

## v0.6.0.0 (2022/09/29)

### BREAKING CHANGES

- The `EmailAndPassword` auth method has been renamed `usernameAndPassword` to better reflect the current usage. Email validation will be addressed in the future.

  - This means the `auth.userEntity` model should now have field called `username` (instead of `email`, as before).

    - If you'd like to treat the old `email` field as `username`, you can create a migration file like so:

      ```bash
      $ cd migrations
      $ mkdir "migrations/$(date -n +%Y%m%d%H%M%S)_some_name" && touch $_/migration.sql
      ```

      You can then add contents like the following:

      ```sql
        -- Drop the old index (NOTE: name may vary based on Prisma version)
      DROP INDEX "User_email_key";

      -- Alter the table to rename the column, thus preserving the data
      ALTER TABLE "User"
      RENAME COLUMN "email" TO "username";

      -- Create a new index
      CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
      ```

      - NOTE: If you simply changed `email` to `username` in your .wasp file, Prisma will try to drop the table and recreate it, which is likely not what you want if you have data you want to preserve.

    - If you would like to add a new `username` column and keep `email` as is, be sure to add a calculated value in the migration (perhaps a random string, or something based on the `email`). The `username` column should remain `NOT NULL` and `UNIQUE`.

- `WASP_WEB_CLIENT_URL` is now a required environment variable to improve CORS security. It is set by default in development. In production, this should point to the URL where your frontend app is being hosted.
- The generated Dockerfile has been updated from `node:14-alpine` to `node:16-alpine`.
- Wasp Jobs callback function arguments have been updated to the following: `async function jobHandler(args, context)`. Jobs can now make use of entities, accessed via `context`, like Operations. Additionally, the data passed into the Job handler function are no longer wrapped in a `data` property, and are now instead accessed exactly as they are supplied via `args`.
- React got updated to React 17.

### [NEW FEATURE] Google is now a supported authentication method!

You can now offer your users the ability to sign in with Google! Enabling it is just a few lines and offers a fast, easy, and secure way to get users into your app! We also have a comprehensive setup guide for creating a new app in the Google Developer Console.

Stay tuned, as more external auth methods will be added in the future. Let us know what you'd like to see support for next!

### [NEW FEATURE] Wasp Language Server

Now, your installation of Wasp also brings Wasp language server with it! This means live error reporting in Wasp files in supported IDEs (currently only VSCode).

Make sure to update your Wasp VSCode extension to get the benefits of Wasp Language Server.

### [NEW FEATURE] Optimistic updates via useAction hook

We added `useAction` hook to our JS API, which allows you to specify optimistic update details for an Action.
This means that, if you have a good idea of how an Action will affect the state on the client, you can perform those changes immediately upon its call (instead of waiting for Action to finish), by modifying what specific Queries currently return.
Once Action is actually done, related Queries will be unvalidated as usual and therefore fetch the real result, but in the meantime the changes you specified via optimistic updates will be visible.

This is great for apps where there is a lot of interactivity and you want the UI to update instantly with your changes, even as they are still being saved to the server.

Check out https://wasp.sh/docs/language/features#the-useaction-hook for more details.

### Bug fixes

- Works around a `sodium-native` bug (used by a Wasp dependency, `secure-password`) that caused signup/login runtime issues with Heroku deployments by downgrading it from v3.4.1 to v3.3.0 via a `package.json` override. Ref: https://github.com/sodium-friends/sodium-native/issues/160
- Improved warnings by Wasp to do database migration -> now there are less false positives.

---

## v0.5.2.1 (2022/07/14)

### Bug fixes

- Made wasp CLI more robust regarding encoding used on the machine.
- Worked around the bug in latest npm, so that Wasp now again supports latest LTS npm version.

---

## v0.5.2.0 (2022/06/23)

### Upgraded Prisma to latest version (13.15.2)

Among various other things, this brings support for OpenSSL3. So if you couldn't run Wasp on your operating system due to Prisma not supporting OpenSSL3, those days are over!

---

## v0.5.1.0 (2022/06/17)

### [NEW FEATURES]

- There is now `app.client.setup` function in .wasp that you can use to define custom setup you want to do on client before on its initialization.
- You can now configure the React Query's QueryClient by calling special function exposed by Wasp in your JS (in `app.client.setup`).

### Various improvements and bug fixes

- Limited Wasp node version to <=16.15.0 for now, since there is a problem with later versions and how Wasp uses `npx`.
- Reduced some of the redundant warning messages in Wasp CLI.
- Fixed unresponsive UI on server reload.

---

## v0.5.0.0 (2022/05/18)

### [NEW FEATURE] Wasp now has support for running Jobs!

If you have server tasks that you do not want to handle as part of the normal request-response cycle, now Wasp allows you to make that function a Job and it will gain some "superpowers"!

Jobs will persist between server restarts, can be retried if they fail, and they can even be delayed until the future (or have a recurring schedule)!

Some examples where you may want to use a Job on the server include sending an email, making an HTTP request to some external API, or doing some nightly calculations.

To run Jobs, you don't need any additional infrastructure at the moment, just a Postgre database that you anyway need to deploy Wasp to production.

### BREAKING CHANGES

- Wasp now requires latest LTS version of NodeJS
  - We had a bit of issues with being too relaxed on the version of NodeJS that can be used with Wasp so we tightened it up a bit.
    We also added a more thorough check in Wasp for it, that will warn you very explicitly if you are using the wrong version of Node.
- Updated react-query to v3
  - This brings some new features from react query while also laying the foundation for the further features we are building on top of it in Wasp (coming soon!).
- Updated python to python3 in Dockerfile generated upon `wasp build`.

### Various improvements

- Finally fixed a bug with orphaned processes in development.
- Various other bug fixes, doc improvements, and refactorings.

---

## v0.4.0.0 (2022/02/23)

### [BREAKING CHANGE] Upgrading Prisma to version 3.9.1

We are happy to announce Wasp is now using a much newer version of Prisma! This change does not impact the Wasp DSL support for Prisma, but it does come with some caveats from Prisma based on your usage. Please see this note for any breaking changes: https://www.prisma.io/docs/guides/upgrade-guides/upgrading-versions/upgrading-to-prisma-3

_Note: When you first migrate after upgrading, you will likely see a new migration created for 3.x specific features related to updating foreign keys and indexes._

### Various improvements

- Automatically regenerating your Prisma client, as needed, based on your Prisma schema changes.
- Tracking your NPM project dependency changes and automatically invoking `npm install`, as needed, so you are always up to date.
- and more!

---

## v0.3.0.0 (2022/02/04)

### [BREAKING CHANGE] New Wasp-lang syntax!

Mostly it is very similar to what it was before, with some following bigger changes:

- `auth`, `dependencies`, and couple of other "singleton" delcarations now became part of `app` declaration.
- All declarations now need to have name, including `route`.
- `route` has different syntax.
- `dependencies` have different syntax.

For exact details about new syntax, check https://wasp.sh/docs/language/syntax .

### Various improvements

- Better compiler error messages.
- Nicer CLI output.
- Added delay on recompilation to avoid redundant recompiling.
- Added `onAuthSucceededRedirectTo` field in `app`.
- and more!
