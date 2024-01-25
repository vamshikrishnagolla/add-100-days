const express = require('express')
const adddays = require('date-fns/addDays')
const app = express()

app.get('/', (request, response) => {
  const todaydate = new Date()
  const result = adddays(new Date(todaydate.getFullYear(),todaydate.getMonth(), todaydate.getDate()),100)
  response.send(
    `${result.getDate()}/${
      result.getMonth() + 1
    }/${result.getFullYear()}`,
  )
})

module.exports = app
