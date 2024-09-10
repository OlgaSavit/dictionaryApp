const onInputOnlyNumber = value => {
  return value.replace(/[^0-9]/g, '')
}
function extractWordId(message) {
  const match = message.match(/wordId:\s*(\d+)/)
  return match ? parseInt(match[1], 10) : null
}

export {onInputOnlyNumber, extractWordId}
