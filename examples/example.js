  var fs = require('fs')
  var sdict = require('../index.js')
  
  var file = fs.createReadStream(__filename)
  var result = sdict (file, function(dict) {
    console.log(JSON.parse(dict))
  })

