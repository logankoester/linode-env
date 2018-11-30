# linode-env
> Easily switch configs for the [Linode CLI](https://github.com/linode/cli)

[![Dependency Status](https://david-dm.org/logankoester/linode-env.png)](https://david-dm.org/logankoester/linode-env)
[![devDependency Status](https://david-dm.org/logankoester/linode-env/dev-status.png)](https://david-dm.org/logankoester/linode-env#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/logankoester.png)](https://www.gittip.com/logankoester/)

[![NPM](https://nodei.co/npm/linode-env.png?downloads=true)](https://nodei.co/npm/linode-env/)

## Getting Started

If you have a file called `~/.linode-cli`, rename it - or it will be clobbered by the symlink.
Create a directory called `~/.linode-cli-env`.

```shell
npm install linode-env -g
```

```shell
$ linode-env -h
  Usage: linode-env[options]

  Options:

    -h, --help        output usage information
    -V, --version     output the version number
    -u, --use [name]  Activate a given Linode config
    -l, --list        List the available Linode configs
```

This script will simply set the file symlinked to `~/.linode-cli` so you
can use the `linode-cli` commands without specifying this as an argument each time.

## Release History

### 1.0.0

* Updates for linode-cli v2

### 0.1.1

* Fixes shebang line

### 0.1.0

* First release
