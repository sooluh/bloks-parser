<a href="https://donasi.inh.or.id/PulihkanGaza"><img alt="I stand with Palestine" src="https://github.com/Safouene1/support-palestine-banner/blob/master/banner-project.svg" width="100%" /></a>

# bloks-parser

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]
[![JSDocs][jsdocs-src]][jsdocs-href]

Response parser utility for Meta's Bloks Framework.

## 🚀 Quick Start

Install:

```bash
# npm
npm i bloks-parser

# yarn
yarn add bloks-parser
```

Import:

```js
// ESM / TypeScript
import { bloks } from "bloks-parser";

// CommonJS
const { bloks } = require("bloks-parser");
```

Usage:

```js
const data = bloks(bloksResponse);
// { isError: boolean, isTwoFactor: boolean, isAuthenticated: boolean, data?: any, message?: string }

if (data.isTwoFactor) {
  const {
    pk,
    username,
    two_factor_identifier,
    trusted_notification_polling_nonce,
    device_id,
  } = data.data!.two_factor_info!;
}

if (!data.isAuthenticated) {
  throw new Error(data.message!);
}

if (data.isAuthenticated) {
  const token = data.data!.headers?.["IG-Set-Authorization"].replace(
    "Bearer IGT:2:",
    "",
  );

  const {
    pk, // <== number
    pk_id, // <== string
    username,
    full_name,
    is_private,
    is_verified,
    profile_pic_url,
  } = data.data!.login_response!.logged_in_user;
}
```

## 🙌🏻 Contribution

- Clone repository
- Install dependencies with `yarn install`
- Use `yarn dev` to start vitest watcher verifying changes
- Use `yarn test` before pushing to ensure all tests and lint checks passing

## 📄 License

Code licensed under [MIT License](./LICENSE).

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/bloks-parser?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/bloks-parser
[npm-downloads-src]: https://img.shields.io/npm/dm/bloks-parser?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/bloks-parser
[codecov-src]: https://img.shields.io/codecov/c/gh/sooluh/bloks-parser/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/sooluh/bloks-parser
[bundle-src]: https://img.shields.io/bundlephobia/minzip/bloks-parser?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=bloks-parser
[license-src]: https://img.shields.io/github/license/sooluh/bloks-parser.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/sooluh/bloks-parser/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsDocs.io-reference-18181B?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/bloks-parser
