
# set

  Generate setter functions from string paths.

## Installation

    $ component install timoxley/set

## Examples

```js
// Simple Properties
var widget = {
  enabled: false
}

var setEnabled = set(widget, 'enabled')
console.log(widget.enabled) // => false
setEnabled(true)
console.log(widget.enabled) // => true


// Nested Properties

var user = {
  name: {
    first: 'Tim',
    last: 'Oxley'
  }
}

var setFirstName = set(user, 'name.first')
setFirstName('Timothy')
console.log(user.name.first) // =>  'Timothy')

// If intermediate properties do not exist, they are created

var user = {}

var setFirstName = set(user, 'name.first')
setFirstName('Timothy')
console.log(user.name.first) // => 'Timothy'

// context is optional until set() time
var user = {}

var setFirstName = set('name.first')
setFirstName(user, 'Timothy')
console.log(user.name.first) // => 'Timothy'

// context is set to `this` if not supplied

var user = {}

user.setFirstName = set('name.first')
user.setFirstName('Timothy')
console.log(user.name.first) // => 'Timothy'

```

## License

  MIT
