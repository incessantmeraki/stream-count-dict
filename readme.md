## stream-count-dict

takes readable stream as a parameter and returns an object dictionary which represents word count. 

## Usage

### Installation

```sh
  $git clone https://github.com/incessantmeraki/stream-count-dict
```

### Example

```js
  var fs = require('fs')
  var sdict = require('index.js')
  
  var file = fs.createReadStream(__filename)
  var result = sdict (file, function(dict) {
    console.log(JSON.parse(dict))
  })
```

## License

MIT

