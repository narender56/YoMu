export const registerGesture = (element, callback) => {
  let touchstartX = 0
  element.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })

  element.addEventListener('touchend', e => {
    const end = e.changedTouches[0].screenX
    handleGesture(touchstartX, end, callback)
  })
}

export const handleGesture = (start, end, callback) => {
  if (end < start) {
    // swiped left!
    callback('left')
  }
  if (end > start) {
    // swiped right!
    callback('right')
  }
}
