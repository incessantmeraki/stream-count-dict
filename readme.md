# stream-count-dict

takes readable stream as a parameter and returns an dictionary(object) which represents word count. 

## Usage

### Installation

```sh
  $ git clone https://github.com/incessantmeraki/stream-count-dict
  $ npm install
```

### Example

```js
  var fs = require('fs')
  var sdict = require('index.js')
  
  var file = fs.createReadStream(__filename)
  var result = sdict (file, function(dict) {
    console.log(dict)
  })
```

## License

MIT

