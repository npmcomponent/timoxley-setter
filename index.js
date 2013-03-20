module.exports = function(context, path) {
  if (arguments.length === 1) {
    path = context
    context = null
  }
  function setVal(obj, path, value) {
    var pathSegment = path.shift()
    if (obj[pathSegment] === undefined) obj[pathSegment] = {}
    if (!path.length) return obj[pathSegment] = value
    return setVal(obj[pathSegment], path, value)
  }
  return function set(theContext, value) {
    if (arguments.length === 1) {
      value = theContext
      theContext = context
    }
    if (!theContext) theContext = this
    return setVal(theContext, path.split('.'), value)
  }
}
