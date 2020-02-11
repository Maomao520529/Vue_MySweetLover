export default function (name) {
  var str = ''
  var len = name.length
  if (len > 20) {
    str = name.substring(0, 26) + ' …'
  } else {
    return name
  }
  return str
}
