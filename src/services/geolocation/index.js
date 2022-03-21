export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    if ('navigator' in window) {
      return navigator.geolocation.getCurrentPosition(resolve, reject)
    }

    reject('Geo location is not supported')
  })
}
