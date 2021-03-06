'use strict'

const print = require('../../utils').print

module.exports = {
  command: 'ls <key>',

  describe: 'List directory contents for Unix filesystem objects.',

  builder: {},

  handler (argv) {
    argv.resolve((async () => {
      const path = argv.key
      // `ipfs file ls` is deprecated. See https://ipfs.io/docs/commands/#ipfs-file-ls
      print(`This functionality is deprecated, and will be removed in future versions. If possible, please use 'ipfs ls' instead.`)

      let links = await argv.ipfs.ls(path)

      // Single file? Then print its hash
      if (links.length === 0) {
        links = [{ hash: path }]
      }

      links.forEach((file) => print(file.hash))
    })())
  }
}
