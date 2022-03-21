'use strict'
import moment from 'moment'

const locale = {
  relativeTime: {
    future : '%s',
    past : '%s',
    s: number => `${number}s`,
    m: number => `${number}m`,
    h: number => `${number}h`,
    d: number => `${number}d`,
    dd: number => `${number}d`,
    M: number => `${number} ago`
  }
}

moment.updateLocale('en', locale)

function formatDate(format = 'DD MMM, YYYY') {
  return moment(this).format(format)
}

Number.prototype.formatDate = formatDate
String.prototype.formatDate = formatDate

Array.prototype.last = function() {
  return this[this.length - 1]
}

Array.prototype.first = function() {
  return this.length ? this[0] : undefined
}

Array.prototype.deepCopy = function(obj) {
  try {
    return JSON.parse(JSON.stringify(obj))
  } catch(err) {
    console.log({ err })
  }
}

window.onload = function() {}

window.onbeforeunload = function() {}

window.ls = {
  get(key) {
    return window.localStorage.getItem(key)
  },
  set(key, value) {
    return window.localStorage.setItem(key, value)
  },
  delete(key) {
    return window.localStorage.removeItem(key)
  }
}
