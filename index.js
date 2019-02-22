const net = require('net')

const TWO_SECONDS = 2000

function scanPort ({ port, host, timeout }) {
  return new Promise((resolve) => {
    const s = new net.Socket()

    let result = { port, open: false, data: null }

    s.setTimeout(timeout, function () {
      s.destroy()
      resolve(result)
    })

    s.connect(port, host, function () {
      result.open = true
    })

    s.on('data', function (data) {
      result.data = data
      s.destroy()
      resolve(result)
    })

    s.on('error', function (e) {
      result.error = e
      s.destroy()
      resolve(result)
    })
  })
}

module.exports = function scanPorts ({ host = 'localhost', start = 1, end = 9999, timeout = TWO_SECONDS } = {}) {
  const scans = []

  for (let port = start; port <= end; port++) {
    scans.push(scanPort({ port, host, timeout }))
  }

  return Promise.all(scans)
}
