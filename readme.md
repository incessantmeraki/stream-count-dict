## stream-count-dict

takes readable stream as a parameter and returns an object dictionary which represents word count. 

## Usage

### Installation
```sh
  $ npm install stream-count-dict
```

### Example

```js
  var fs = require('fs')
  var sdict = require('stream-count-dict)
  
  console.log(sdict(fs.createReadStream(__filename)))
```

##License
MIT

