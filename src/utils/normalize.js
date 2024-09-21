const onInputOnlyNumber = value => {
  return value.replace(/[^0-9]/g, '')
}
function extractWordId(message) {
  const match = message.match(/wordId:\s*(\d+)/)
  return match ? parseInt(match[1], 10) : null
}
function getRandomElements(arr, num) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, num)
}
export {onInputOnlyNumber, extractWordId, getRandomElements}
