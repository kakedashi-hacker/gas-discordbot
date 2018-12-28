import moment from 'moment'
import { getProperty } from './props'

function pad(num, size) {
  let s = `${num}`
  while (s.length < size) s = `0${s}`
  return s
}

global.hackerank = () => {
  const startDate = moment('2018-12-26')
  const today = moment()
  let eulerNum = today.diff(startDate, 'days') + 1
  if (eulerNum > 255) {
    eulerNum -= 255
  }
  const url = `https://www.hackerrank.com/contests/projecteuler/challenges/euler${pad(eulerNum, 3)}`
  UrlFetchApp.fetch(getProperty('DISCORD_WEB_HOOK_URL'), {
    method: 'post',
    payload: {
      content: `Today's Hackerrank Project Euler\n${url}`
    }
  })
}
