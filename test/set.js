"use strict"

var assert = require('timoxley-assert')
var set = require('set')

it('can set simple properties', function() {
  var widget = {
    enabled: false
  }

  var setEnabled = set(widget, 'enabled')
  assert.ok(!widget.enabled)
  setEnabled(true)
  assert.ok(widget.enabled)
})


it('can set nested properties', function() {
  var user = {
    name: {
      first: 'Tim',
      last: 'Oxley'
    }
  }

  var setFirstName = set(user, 'name.first')
  setFirstName('Timothy')
  assert.equal(user.name.first, 'Timothy')
})

it('can set nested properties if intermediate properties do not exist', function() {
  // note that user.name nor user.name.first do not exist.
  var user = {}

  var setFirstName = set(user, 'name.first')
  setFirstName('Timothy')
  assert.equal(user.name.first, 'Timothy')
})

it('context is optional until set time', function() {
  // note that user.name nor user.name.first do not exist.
  var user = {}

  var setFirstName = set('name.first')
  setFirstName(user, 'Timothy')
  assert.equal(user.name.first, 'Timothy')
})

it('context is set to `this` if not supplied', function() {
  // note that user.name nor user.name.first do not exist.
  var user = {}

  user.setFirstName = set('name.first')
  user.setFirstName('Timothy')
  assert.equal(user.name.first, 'Timothy')
})
