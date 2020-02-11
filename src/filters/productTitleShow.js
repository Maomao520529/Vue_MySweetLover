export default function (name) {
  var str = ''
  var len = name.length
  if (len > 10) {
    str = name.substring(0, 7) + ' ...'
  } else {
    return name
  }
  return str
}
