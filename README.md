# multi-cli-starter

A starter project for multi command CLI using nodejs

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/multi-cli-starter.svg)](https://npmjs.org/package/multi-cli-starter)
[![Downloads/week](https://img.shields.io/npm/dw/multi-cli-starter.svg)](https://npmjs.org/package/multi-cli-starter)
[![License](https://img.shields.io/npm/l/multi-cli-starter.svg)](https://github.com/kedarkolhatkar/multi-cli-starter/blob/master/package.json)

<!-- toc -->

-   [Usage](#usage)
-   [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g multi-cli-starter
$ multi-cli-starter COMMAND
running command...
$ multi-cli-starter (-v|--version|version)
multi-cli-starter/0.0.0 darwin-x64 node-v12.9.0
$ multi-cli-starter --help [COMMAND]
USAGE
  $ multi-cli-starter COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

-   [multi-cli-starter](#multi-cli-starter)
-   [Usage](#usage)
-   [Commands](#commands)
    -   [`multi-cli-starter hello`](#multi-cli-starter-hello)
    -   [`multi-cli-starter help [COMMAND]`](#multi-cli-starter-help-command)

## `multi-cli-starter hello`

Describe the command here

```
USAGE
  $ multi-cli-starter hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/hello.js](https://github.com/kedarkolhatkar/multi-cli-starter/blob/v0.0.0/src/commands/hello.js)_

## `multi-cli-starter help [COMMAND]`

display help for multi-cli-starter

```
USAGE
  $ multi-cli-starter help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

<!-- commandsstop -->
