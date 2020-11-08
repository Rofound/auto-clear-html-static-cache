const { compile } = require('nexe')
 
compile({
  input: './auto-clear-html-static-cache.js'
}).then(() => {
  console.log('success')
})