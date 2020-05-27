dpm-cli
=======

Docker package manager

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dpm-cli.svg)](https://npmjs.org/package/dpm-cli)
[![Downloads/week](https://img.shields.io/npm/dw/dpm-cli.svg)](https://npmjs.org/package/dpm-cli)
[![License](https://img.shields.io/npm/l/dpm-cli.svg)](https://github.com/callistino/dpm-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dpm-cli
$ dpm COMMAND
running command...
$ dpm (-v|--version|version)
dpm-cli/0.0.0 linux-x64 node-v14.3.0
$ dpm --help [COMMAND]
USAGE
  $ dpm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dpm help [COMMAND]`](#dpm-help-command)
* [`dpm install PACKAGE`](#dpm-install-package)

## `dpm help [COMMAND]`

display help for dpm

```
USAGE
  $ dpm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `dpm install PACKAGE`

Install a package

```
USAGE
  $ dpm install PACKAGE

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ dpm install
```

_See code: [src/commands/install.ts](https://github.com/callistino/dpm-cli/blob/v0.0.0/src/commands/install.ts)_
<!-- commandsstop -->
