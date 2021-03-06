*This repository is a mirror of the [component](http://component.io) module [timoxley/setter](http://github.com/timoxley/setter). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/timoxley-setter`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# setter

  Generate setter functions from string paths.

## Installation

    $ component install timoxley/setter

## Examples

### Simple Properties

```js
var setter = require('setter')

var widget = {
  enabled: false
}

var setEnabled = setter(widget, 'enabled')
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

var setFirstName = setter(user, 'name.first')
setFirstName('Timothy')
console.log(user.name.first) // =>  'Timothy')
```

### Intermediate properties are created if they do not exist

```js
var user = {}

var setFirstName = setter(user, 'name.first')
setFirstName('Timothy')
console.log(user.name.first) // => 'Timothy'
```

### Context is optional until `setter()` time
```js
var user = {}

var setFirstName = setter('name.first')
setFirstName(user, 'Timothy')
console.log(user.name.first) // => 'Timothy'
```


### context is set to `this` if not supplied
```js
var user = {}

user.setFirstName = setter('name.first')
user.setFirstName('Timothy')
console.log(user.name.first) // => 'Timothy'
```

## License

  MIT
