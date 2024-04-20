# oxlint-rs-npm

Linter for the JavaScript Oxidation Compiler

> **npm** integration for [oxlint-rs](https://github.com/oxc-project/oxc) without any overhead so using full power of `oxlint` CLI performance and feature

## Documentations

Look at [official documentation](https://github.com/oxc-project/oxc)

## Motivation

The tools are itself fast but `npm` `bin.js` for **Rust** projects adds overhead which makes startup time slower than expected. This solution solves that overhead and makes **Rust** projects run as excepted.
See [oxc#2920](https://github.com/oxc-project/oxc/pull/2920) for more information

## Installation

```sh
npm install dalisoft/oxlint-rs-npm -D
# or
yarn install dalisoft/oxlint-rs-npm -D
# or
bun add dalisoft/oxlint-rs-npm -D
```

## Environment variables

| Name           | Description                                                                                     | Required |
| -------------- | ----------------------------------------------------------------------------------------------- | -------- |
| `GITHUB_TOKEN` | For [GitHub API](https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting) | Yes      |

## Usage

See [Documentations](#documentations), requires [Environment variables](#environment-variables)

## License

Apache-2.0
