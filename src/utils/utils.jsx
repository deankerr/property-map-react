// Reduce form object properties to '/' delemitered string of values
function getParamString(obj) {
  return Object.entries(obj).reduce((prev, [key, value], index) => `${prev}` + (index > 0 ? '/' : '') + `${value}`, '')
}

export { getParamString }
