const parse = require('get-them-args')

const scanports = require('./index')

const TWO_SECONDS = 2000

const { host = 'localhost', start = 1, end = 9999, timeout = TWO_SECONDS } = parse(process.argv)

scanports({ host, start, end, timeout })
  .then(data => {
    const openPorts = data.filter(current => current.open)

    console.log(`PORT:\t\tDATA:`)
    openPorts.forEach(({ port, data }) => {
      console.log(`${port}\t\t`, data ? data.toString() : '-')
    })
  }).catch(console.error)
