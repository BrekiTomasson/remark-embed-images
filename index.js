const path = require('path')
const datauri = require('datauri').sync
const visit = require('unist-util-visit')

function attacher () {
  return function transformer (tree, file) {
    function visitor (node) {
      const url = String(path.resolve(node.url))

      const imageFileUrl = path.resolve(file.dirname, url)
      node.url = datauri(imageFileUrl)
    }
    visit(tree, 'image', visitor)
  }
}

module.exports = attacher
