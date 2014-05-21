# linode-env
> Easily switch configs for the [Linode CLI](https://github.com/linode/cli)

[![Dependency Status](https://david-dm.org/logankoester/linode-env.png)](https://david-dm.org/logankoester/linode-env)
[![devDependency Status](https://david-dm.org/logankoester/linode-env/dev-status.png)](https://david-dm.org/logankoester/linode-env#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/logankoester.png)](https://www.gittip.com/logankoester/)

[![NPM](https://nodei.co/npm/linode-env.png?downloads=true)](https://nodei.co/npm/linode-env/)

## Getting Started

If you have a file called "config" under `~/.linodecli`, rename it - or it will be clobbered by the symlink.

You can create additional named configurations using `$ linode configure -u [username]`

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

This script will simply set the file symlinked to `~/.linodecli/config` so you
can use the `linode` commands without specifying this as an argument each time.

## Release History

### 0.1.1

* Fixes shebang line

### 0.1.0

* First release
