
# set

  Generate setter functions from string paths.

## Installation

    $ component install timoxley/set

## Examples

### Simple Properties

```js
var widget = {
  enabled: false
}

var setEnabled = set(widget, 'enabled')
console.log(widget.enabled) // => false
setEnabled(true)
console.log(widget.enabled) // => true
```

### Nested Properties

```js
var user = {
  name: {
    first: 'Tim',
    last: 'Oxley'
  }
}

var setFirstName = set(user, 'name.first')
setFirstName('Timothy')
console.log(user.name.first) // =>  'Timothy')
```

### Intermediate properties are created if they do not exist

```js
var user = {}

var setFirstName = set(user, 'name.first')
setFirstName('Timothy')
console.log(user.name.first) // => 'Timothy'
```

### Context is optional until `set()` time
```js
var user = {}

var setFirstName = set('name.first')
setFirstName(user, 'Timothy')
console.log(user.name.first) // => 'Timothy'
```


### context is set to `this` if not supplied
```js
var user = {}

user.setFirstName = set('name.first')
user.setFirstName('Timothy')
console.log(user.name.first) // => 'Timothy'
```

## License

  MIT
