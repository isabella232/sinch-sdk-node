## Version 0.0.2

 - [Feat.] Add interface `CallbackProcessor` to be implemented by each API defining webhooks for callbacks.
 - [Feat.] Add `validateSignatureHeader` function to check whether a callback event with a `X-Sinch-Signature` header has been tampered with or not

## Version 0.0.1

 - [Feat.] Add method `formatQueryParameter` that take an optional boolean parameter `repeatParamArray` to decide how to represent parameters arrays in the URL as all the APIs are not consistent
 - [Tech.] Refactor `imports` and `exports` to break the circular dependencies introduced by the automatic refresh token mechanism
 - [Feat.] Add `TimezoneResponse` plugin to the list of default plugins to patch responses where the server doesn't send a timezone in a timestamp property
 - [Feat.] Add `validateAuthenticationHeader` function to check whether a callback event has been tampered with or not

# Version 0.0.0

- Initial version