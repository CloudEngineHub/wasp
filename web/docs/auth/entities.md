---
title: Auth Entities
---

import ImgWithCaption from '../../blog/components/ImgWithCaption'
import { Internal } from '@site/src/components/Internal'
import MultipleIdentitiesWarning from './\_multiple-identities-warning.md';

Wasp supports multiple different authentication methods and for each method, we need to store different information about the user. For example, if you are using the [Username & password](/docs/auth/username-and-pass) authentication method, we need to store the user's username and password. On the other hand, if you are using the [Email](/docs/auth/email) authentication method, you will need to store the user's email, password and for example, their email verification status.

## Entities Explained

To store user information, Wasp creates a few entities behind the scenes. In this section, we will explain what entities are created and how they are connected.

### User Entity

When you want to add authentication to your app, you need to specify the user entity e.g. `User` in your Wasp file. This entity is a "business logic user" which represents a user of your app. 

You can use this entity to store any information about the user that you want to store. For example, you might want to store the user's name or address. You can also use the user entity to define the relations between users and other entities in your app. For example, you might want to define a relation between a user and the tasks that they have created.

```wasp
entity User {=psl
  id Int @id @default(autoincrement())
  // Any other fields you want to store about the user
psl=}
```

You **own** the user entity and you can modify it as you wish. You can add new fields to it, remove fields from it, or change the type of the fields. You can also add new relations to it or remove existing relations from it.

<ImgWithCaption alt="Auth Entities in a Wasp App" source="img/auth-entities/model.png" caption="Auth Entities in a Wasp App"/>

On the other hand, the `Auth` and `AuthIdentity` entities are created behind the scenes and are used to store the user's login credentials. You as the developer don't need to care about this entity most of the time. Wasp **owns** these entities.

In the case you want to create custom login or signup actions, you will need to use the `Auth` and `AuthIdentity` entities directly.

### Example App Model
Let's imagine we created a simple tasks management app:

 - The app has email and Google-based auth.
 - Users can create tasks and see the tasks that they have created.

Let's look at how would that look in the database:

<ImgWithCaption alt="Example of Auth Entities" source="img/auth-entities/model-example.png" caption="Example of Auth Entities"/>

If we take a look at an example user in the database, we can see:
- The business logic user, `User` is connected to multiple `Task` entities.
  - In this example, "Example User" has two tasks.
- The `User` is connected to exactly one `Auth` entity.
- Each `Auth` entity can have multiple `AuthIdentity` entities.
  - In this example, the `Auth` entity has two `AuthIdentity` entities: one for the email-based auth and one for the Google-based auth.

<MultipleIdentitiesWarning />

### `Auth` Entity <Internal />

Wasp's internal `Auth` entity is used to connect the business logic user, `User` with the user's login credentials.

```wasp
entity Auth {=psl
  id         String         @id @default(uuid())
  userId     Int?           @unique
  // Wasp injects this relation on the User entity as well
  user       User?          @relation(fields: [userId], references: [id], onDelete: Cascade) 
  identities AuthIdentity[]
psl=}
```

The `Auth` fields:

- `id` is a unique identifier of the `Auth` entity.
- `userId` is a foreign key to the `User` entity.
  - It is used to connect the `Auth` entity with the business logic user.
- `user` is a relation to the `User` entity.
  - This relation is injected on the `User` entity as well.
- `identities` is a relation to the `AuthIdentity` entity.

### `AuthIdentity` Entity <Internal />

The `AuthIdentity` entity is used to store the user's login credentials for various authentication methods.

```wasp
entity AuthIdentity {=psl
  providerName   String
  providerUserId String
  providerData   String @default("{}")
  authId         String
  auth           Auth   @relation(fields: [authId], references: [id], onDelete: Cascade)

  @@id([providerName, providerUserId])  
psl=}
```

The `AuthIdentity` fields:
- `providerName` is the name of the authentication provider.
  - For example, `email` or `google`.
- `providerUserId` is the user's ID in the authentication provider.
  - For example, the user's email or Google ID.
- `providerData` is a JSON string that contains additional data about the user from the authentication provider.
  - For example, for password based auth, this field contains the user's hashed password.
  - This field is a `String` and not a `Json` type because [Prisma doesn't support the `Json` type for SQLite](https://github.com/prisma/prisma/issues/3786).
- `authId` is a foreign key to the `Auth` entity.
  - It is used to connect the `AuthIdentity` entity with the `Auth` entity.
- `auth` is a relation to the `Auth` entity.

## Accessing the Auth Fields 

If you are looking to access the user's email or username in your code, you can do that by accessing the info about the user that is stored in the `AuthIdentity` entity.

Everywhere where Wasp gives you the `user` object, it also includes the `auth` relation with the `identities` relation. This means that you can access the auth identity info by using the `user.auth.identities` array.

To make things a bit easier for you, Wasp offers a few helper functions that you can use to access the auth identity info.

### `getEmail`

Returns the user's email or `null` if the user doesn't have an email-based auth identity.

<Tabs groupId="js-ts">
<TabItem value="js" label="JavaScript">

```jsx title="src/client/MainPage.jsx"
import { getEmail } from '@wasp/auth/user'

const MainPage = ({ user }) => {
  const email = getEmail(user)
  // ...
}
```

```js title=src/server/tasks.js
import { getEmail } from '@wasp/auth/user.js'

export const createTask = async (args, context) => {
  const email = getEmail(context.user)
  // ...
}
```


</TabItem>
<TabItem value="ts" label="TypeScript">

```tsx title="src/client/MainPage.tsx"
import { getEmail } from '@wasp/auth/user'
import { User } from '@wasp/auth/types'

const MainPage = ({ user }: { user: User }) => {
  const email = getEmail(user)
  // ...
}
```

```ts title=src/server/tasks.ts
import { getEmail } from '@wasp/auth/user.js'

export const createTask: CreateTask<...>  = async (args, context) => {
  const email = getEmail(context.user)
  // ...
}
```

</TabItem>
</Tabs>

### `getUsername`

Returns the user's username or `null` if the user doesn't have a username-based auth identity.

<Tabs groupId="js-ts">
<TabItem value="js" label="JavaScript">

```jsx title="src/client/MainPage.jsx"
import { getUsername } from '@wasp/auth/user'

const MainPage = ({ user }) => {
  const username = getUsername(user)
  // ...
}
```

```js title=src/server/tasks.js
import { getUsername } from '@wasp/auth/user.js'

export const createTask = async (args, context) => {
  const username = getUsername(context.user)
  // ...
}
```


</TabItem>
<TabItem value="ts" label="TypeScript">

```tsx title="src/client/MainPage.tsx"
import { getUsername } from '@wasp/auth/user'
import { User } from '@wasp/auth/types'

const MainPage = ({ user }: { user: User }) => {
  const username = getUsername(user)
  // ...
}
```

```ts title=src/server/tasks.ts
import { getUsername } from '@wasp/auth/user.js'

export const createTask: CreateTask<...>  = async (args, context) => {
  const username = getUsername(context.user)
  // ...
}
```

</TabItem>
</Tabs>

### `getFirstProviderUserId`

[As mentioned before](#authidentity-entity), the `providerUserId` field is the user's ID in the authentication provider. For example, the user's `username` in the case of the username-based or the user's `email` in the case of the email-based auth. This can be useful if you support multiple authentication methods and you need *any* ID that identifies the user in your app.

This helper function returns the user's first auth identity's provider user ID or `null` if the user doesn't have any auth identities.

<Tabs groupId="js-ts">
<TabItem value="js" label="JavaScript">

```jsx title="src/client/MainPage.jsx"
import { getFirstProviderUserId } from '@wasp/auth/user'

const MainPage = ({ user }) => {
  const userId = getFirstProviderUserId(user)
  // ...
}
```

```js title=src/server/tasks.js
import { getFirstProviderUserId } from '@wasp/auth/user.js'

export const createTask = async (args, context) => {
  const userId = getFirstProviderUserId(context.user)
  // ...
}
```


</TabItem>
<TabItem value="ts" label="TypeScript">

```tsx title="src/client/MainPage.tsx"
import { getFirstProviderUserId } from '@wasp/auth/user'
import { User } from '@wasp/auth/types'

const MainPage = ({ user }: { user: User }) => {
  const userId = getFirstProviderUserId(user)
  // ...
}
```

```ts title=src/server/tasks.ts
import { getFirstProviderUserId } from '@wasp/auth/user.js'

export const createTask: CreateTask<...>  = async (args, context) => {
  const userId = getFirstProviderUserId(context.user)
  // ...
}
```

</TabItem>
</Tabs>

### `findUserIdentity`

You can find a specific auth identity by using the `findUserIdentity` helper function. This function takes a `user` and a `providerName` and returns the first auth identity that matches the `providerName` or `null` if no auth identity matches the `providerName`.

This can be useful if you want to check if the user has a specific auth identity. For example, you might want to check if the user has an email-based auth identity.

<Tabs groupId="js-ts">
<TabItem value="js" label="JavaScript">

```jsx title="src/client/MainPage.jsx"
import { findUserIdentity } from '@wasp/auth/user'

const MainPage = ({ user }) => {
  const emailIdentity = findUserIdentity(user, 'email')
  const googleIdentity = findUserIdentity(user, 'google')
  if (emailIdentity) {
    // ...
  } else if (googleIdentity) {
    // ...
  }
  // ...
}
```

```js title=src/server/tasks.js
import { findUserIdentity } from '@wasp/auth/user.js'

export const createTask = async (args, context) => {
  const emailIdentity = findUserIdentity(context.user, 'email')
  const googleIdentity = findUserIdentity(context.user, 'google')
  if (emailIdentity) {
    // ...
  } else if (googleIdentity) {
    // ...
  }
  // ...
}
```


</TabItem>
<TabItem value="ts" label="TypeScript">

```tsx title="src/client/MainPage.tsx"
import { findUserIdentity } from '@wasp/auth/user'
import { User } from '@wasp/auth/types'

const MainPage = ({ user }: { user: User }) => {
  const emailIdentity = findUserIdentity(user, 'email')
  const googleIdentity = findUserIdentity(user, 'google')
  if (emailIdentity) {
    // ...
  } else if (googleIdentity) {
    // ...
  }
  // ...
}
```

```ts title=src/server/tasks.ts
import { findUserIdentity } from '@wasp/auth/user.js'

export const createTask: CreateTask<...>  = async (args, context) => {
  const emailIdentity = findUserIdentity(context.user, 'email')
  const googleIdentity = findUserIdentity(context.user, 'google')
  if (emailIdentity) {
    // ...
  } else if (googleIdentity) {
    // ...
  }
  // ...
}
```

</TabItem>
</Tabs>

## Custom Login and Signup Actions

Let's take a look how you can use the `Auth` and `AuthIdentity` entities to create custom login and signup actions. For example, you might want to create a custom signup action that creates a user in your app and also creates a user in a third-party service.

:::note Custom Login and Signup Examples

In the [Email](/docs/auth/email#creating-a-custom-sign-up-action) section of the docs we give you an example for custom email signup and in the [Username & password](/docs/auth/username-and-pass#2-creating-your-custom-sign-up-action) section of the docs we give you an example for custom username & password signup.
:::

<Tabs groupId="js-ts">
<TabItem value="js" label="JavaScript">

```wasp title="main.wasp"
// ...

action customSignup {
  fn: import { signup } from "@server/auth/signup.js",
  entities: [User]
}
```


```js title="src/server/auth/signup.js"
import {
  createProviderId,
  sanitizeAndSerializeProviderData,
  createUser,
} from '@wasp/auth/utils.js'

export const signup = async (args, { entities: { User } }) => {
  try {
    // Provider ID is a combination of the provider name and the provider user ID
    // And it is used to uniquely identify the user in your app
    const providerId = createProviderId('username', args.username)
    // sanitizeAndSerializeProviderData hashes the password and returns a JSON string
    const providerData = await sanitizeAndSerializeProviderData({
      hashedPassword: args.password,
    })

    await createUser(
      providerId,
      providerData,
      // Any additional data you want to store on the User entity
      {},
    )

    // This is equivalent to:
    // await prisma.user.create({
    //   data: {
    //     auth: {
    //       create: {
    //         identities: {
    //             create: {
    //                 providerName: 'username',
    //                 providerUserId: args.username
    //                 providerData,
    //             },
    //         },
    //       }
    //     },
    //   }
    // })
  } catch (e) {
    return {
      success: false,
      message: e.message,
    }
  }

  // Your custom code after sign-up.
  // ...

  return {
    success: true,
    message: 'User created successfully',
  }
}
```
</TabItem>
<TabItem value="ts" label="TypeScript">

```wasp title="main.wasp"
// ...

action customSignup {
  fn: import { signup } from "@server/auth/signup.js",
  entities: [User]
}
```

```ts title="src/server/auth/signup.ts"
import {
  createProviderId,
  sanitizeAndSerializeProviderData,
  createUser,
} from '@wasp/auth/utils.js'
import type { CustomSignup } from '@wasp/actions/types'

type CustomSignupInput = {
  username: string
  password: string
}
type CustomSignupOutput = {
  success: boolean
  message: string
}

export const signup: CustomSignup<
  CustomSignupInput,
  CustomSignupOutput
> = async (args, { entities: { User } }) => {
  try {
    // Provider ID is a combination of the provider name and the provider user ID
    // And it is used to uniquely identify the user in your app
    const providerId = createProviderId('username', args.username)
    // sanitizeAndSerializeProviderData hashes the password and returns a JSON string
    const providerData = await sanitizeAndSerializeProviderData<'username'>({
      hashedPassword: args.password,
    })

    await createUser(
      providerId,
      providerData,
      // Any additional data you want to store on the User entity
      {},
    )

    // This is equivalent to:
    // await prisma.user.create({
    //   data: {
    //     auth: {
    //       create: {
    //         identities: {
    //             create: {
    //                 providerName: 'username',
    //                 providerUserId: args.username
    //                 providerData,
    //             },
    //         },
    //       }
    //     },
    //   }
    // })
  } catch (e) {
    return {
      success: false,
      message: e.message,
    }
  }

  // Your custom code after sign-up.
  // ...

  return {
    success: true,
    message: 'User created successfully',
  }
}
```
</TabItem>
</Tabs>

You can use whichever method suits your needs better: either the `createUser` function or Prisma's `user.create` method. The `createUser` function is a bit more convenient to use because it hides some of the complexity. On the other hand, the `user.create` method gives you more control over the data that is stored in the `Auth` and `AuthIdentity` entities.