{{={= =}=}}
import {
  type {= userEntityName =},
  type {= authEntityName =},
  type {= authIdentityEntityName =},
} from '../../entities/index.js'
import {
  type PossibleProviderData,
  getProviderData,
} from '../../auth/utils.js'
import { type ProviderName } from '../_types/index.js'
import { Expand } from '../../universal/types.js'

// PUBLIC API
export type AuthUser = AuthUserData & {
  getFirstProviderUserId: () => string | null,
}

// PRIVATE API
/*
 * Ideally, we'd do something like this:
 * ```
 * export type AuthUserData = ReturnType<typeof createAuthUserData>
 * ```
 * to get the benefits of the createAuthUser and the AuthUserData type being in sync.
 * 
 * But since we are not using strict mode, the inferred return type of createAuthUser
 * is not correct. So we have to define the AuthUserData type manually.
 * 
 * TODO: Change this once/if we switch to strict mode. https://github.com/wasp-lang/wasp/issues/1938
 */
export type AuthUserData = Omit<CompleteUserEntityWithAuth, '{= authFieldOnUserEntityName =}'> & {
  identities: {
    {=# enabledProviders.isEmailAuthEnabled =}
    email: Expand<UserFacingProviderData<'email'>> | null
    {=/ enabledProviders.isEmailAuthEnabled =}
    {=# enabledProviders.isUsernameAndPasswordAuthEnabled =}
    username: Expand<UserFacingProviderData<'username'>> | null
    {=/ enabledProviders.isUsernameAndPasswordAuthEnabled =}
    {=# enabledProviders.isSlackAuthEnabled =}
    slack: Expand<UserFacingProviderData<'slack'>> | null
    {=/ enabledProviders.isSlackAuthEnabled =}
    {=# enabledProviders.isDiscordAuthEnabled =}
    discord: Expand<UserFacingProviderData<'discord'>> | null
    {=/ enabledProviders.isDiscordAuthEnabled =}
    {=# enabledProviders.isGoogleAuthEnabled =}
    google: Expand<UserFacingProviderData<'google'>> | null
    {=/ enabledProviders.isGoogleAuthEnabled =}
    {=# enabledProviders.isKeycloakAuthEnabled =}
    keycloak: Expand<UserFacingProviderData<'keycloak'>> | null
    {=/ enabledProviders.isKeycloakAuthEnabled =}
    {=# enabledProviders.isGitHubAuthEnabled =}
    github: Expand<UserFacingProviderData<'github'>> | null
    {=/ enabledProviders.isGitHubAuthEnabled =}
  },
}

type UserFacingProviderData<PN extends ProviderName> = {
  id: string
} & Omit<PossibleProviderData[PN], 'hashedPassword'>

// PRIVATE API
export type CompleteUserEntityWithAuth =
  MakeUserEntityWithAuth<CompleteAuthEntityWithIdentities>

// PRIVATE API
export type CompleteAuthEntityWithIdentities =
  MakeAuthEntityWithIdentities<{= authIdentityEntityName =}>

// PRIVATE API
/**
 * User entity with all of the auth related data that's needed for the user facing
 * helper functions like `getUsername` and `getEmail`.
 */
export type UserEntityWithAuth = MakeUserEntityWithAuth<
  MakeAuthEntityWithIdentities<
    // It's constructed like the Complete* types, but only with the fields needed
    // for the user facing functions.
    Pick<{= authIdentityEntityName =}, 'providerName' | 'providerUserId'>
  >
>

type MakeUserEntityWithAuth<AuthType> = {= userEntityName =} & {
  {= authFieldOnUserEntityName =}: AuthType | null
}

type MakeAuthEntityWithIdentities<IdentityType> = {= authEntityName =} & {
  {= identitiesFieldOnAuthEntityName =}: IdentityType[]
}

// PRIVATE API
export function createAuthUserData(user: CompleteUserEntityWithAuth): AuthUserData {
  const { {= authFieldOnUserEntityName =}, ...rest } = user
  if (!{= authFieldOnUserEntityName =}) {
    throw new Error(`🐝 Error: trying to create a user without auth data.
This should never happen, but it did which means there is a bug in the code.`)
  }
  const identities = {
    {=# enabledProviders.isEmailAuthEnabled =}
    email: getProviderInfo<'email'>({= authFieldOnUserEntityName =}, 'email'),
    {=/ enabledProviders.isEmailAuthEnabled =}
    {=# enabledProviders.isUsernameAndPasswordAuthEnabled =}
    username: getProviderInfo<'username'>({= authFieldOnUserEntityName =}, 'username'),
    {=/ enabledProviders.isUsernameAndPasswordAuthEnabled =}
    {=# enabledProviders.isSlackAuthEnabled =}
    slack: getProviderInfo<'slack'>({= authFieldOnUserEntityName =}, 'slack'),
    {=/ enabledProviders.isSlackAuthEnabled =}
    {=# enabledProviders.isDiscordAuthEnabled =}
    discord: getProviderInfo<'discord'>({= authFieldOnUserEntityName =}, 'discord'),
    {=/ enabledProviders.isDiscordAuthEnabled =}
    {=# enabledProviders.isGoogleAuthEnabled =}
    google: getProviderInfo<'google'>({= authFieldOnUserEntityName =}, 'google'),
    {=/ enabledProviders.isGoogleAuthEnabled =}
    {=# enabledProviders.isKeycloakAuthEnabled =}
    keycloak: getProviderInfo<'keycloak'>({= authFieldOnUserEntityName =}, 'keycloak'),
    {=/ enabledProviders.isKeycloakAuthEnabled =}
    {=# enabledProviders.isGitHubAuthEnabled =}
    github: getProviderInfo<'github'>({= authFieldOnUserEntityName =}, 'github'),
    {=/ enabledProviders.isGitHubAuthEnabled =}
  }
  return {
    ...rest,
    identities,
  }
}

function getProviderInfo<PN extends ProviderName>(
  auth: CompleteAuthEntityWithIdentities,
  providerName: PN
):
  | UserFacingProviderData<PN>
  | null {
  const identity = getIdentity(auth, providerName)
  if (!identity) {
    return null
  }
  return {
    ...getProviderData<PN>(identity.providerData),
    id: identity.providerUserId,
  }
}

function getIdentity(
  auth: CompleteAuthEntityWithIdentities,
  providerName: ProviderName
): {= authIdentityEntityName =} | null {
  return auth.{= identitiesFieldOnAuthEntityName =}.find((i) => i.providerName === providerName) ?? null
}
