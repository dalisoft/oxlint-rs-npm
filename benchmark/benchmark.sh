#!/bin/sh
set -eu

# Exports for binaries access
export PATH="./node_modules/.bin:$PATH"

setup() {
  # install nodejs dependencies
  npm ci --no-audit

  # copy test js
  cp ../prepare.js ./prepare.js
}

# shellcheck disable=SC3045
export -f setup

hyperfine --warmup 3 --runs 10 'oxlint' './node_modules/oxlint-rs-npm/oxlint' --setup 'setup' --export-markdown "result.md"
