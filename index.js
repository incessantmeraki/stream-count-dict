var split = require('split')

var dict = {}

module.exports = function (rStream, callback ) {
  rStream.pipe(split(/\s+/))
    .on ('data', function (data) {
      dict[data]  = dict[data] + 1 || 1
    })
    .on('end', function() {
      callback(JSON.stringify(dict))
    })
}


