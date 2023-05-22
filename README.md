# UXUY-JSSDK

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![npm](https://img.shields.io/npm/dw/@uxuy-js-sdk)

## 💡 Features
- <input type="checkbox" checked>  Web2 user information as a unique DID (Decentralized Identifier)

- [ x ] More web2 social platforms, such as Twitter, WhatsApp, Facebook, and Discord
- [ x ] Login with email
- [ x ] Transfers between DIDs.
- [ x ] MPC (Multi-Party Computation) functionality.

## ⚡ Quick Start

```shell
npm install --save @uxuy-js-sdk
```

### install with vite and ts

Add `declare module "uxuy-js-sdk"` in the `env.d.ts` file.

```shell
/// <reference types="vite/client" />

declare interface Window {

}

declare module "uxuy-js-sdk";

```

### Initialize UXUYSDK for your preferred Dapp 
```js
import UXUYClient from "uxuy-js-sdk"

const token = await UXUYClient.register("ApiKey");

const instance = new UXUYClient();

const { profile, MPC, DID } = instance.init(UXUYToken.value);
```

## 🌐 Demo
Get started
```js
cd example/vue/
npm install --save
npm run dev
```

## 💬 Troubleshooting and Support




