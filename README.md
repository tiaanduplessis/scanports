
# @tiaanduplessis/scanports
[![package version](https://img.shields.io/npm/v/@tiaanduplessis/scanports.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/scanports)
[![package downloads](https://img.shields.io/npm/dm/@tiaanduplessis/scanports.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/scanports)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@tiaanduplessis/scanports.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/scanports)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/scanports.svg)](https://greenkeeper.io/)

> Modest port scanner

## Table of Contents

- [@tiaanduplessis/scanports](#tiaanduplessis-scanports)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install @tiaanduplessis/scanports
$ # OR
$ yarn add @tiaanduplessis/scanports
```

## Usage

```js
const scanPorts = require('@tiaanduplessis/scanports')

scanPorts({ host: 'github.com', timeout: 5000 })
  .then(data => {
    const openPorts = data.filter(current => current.open)
    console.log('Open Ports', openPorts)
    // Open Ports [ { port: 22,
    //     open: true,
    //     data:
    //      <Buffer 53 53 48 2d 32 2e 30 2d 62 61 62 65 6c 64 2d 37 39 32 63 33 66 34 31 0d 0a> },
    //   { port: 80, open: true, data: null },
    //   { port: 443, open: true, data: null } ]
  })
  .catch(console.error)

```

Using the CLI:

```sh
$ scanports --host=localhost --start=1 --end=1000 --timeout=5000
```


## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    