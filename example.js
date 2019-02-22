const scanPorts = require('./')

scanPorts({ host: 'github.com', timeout: 5000 })
  .then(data => {
    const openPorts = data.filter(current => current.open)
    console.log('Open Ports', openPorts)
    // Open Ports [ { port: 22,
    //     open: true,
    //     data:
    //      <Buffer 53 53 48 2d 32 2e 30 2d 62 61 62 65 6c 64 2d 37 39 32 63 33 66 34 31 0d 0a> },
    //   { port: 80, open: true, data: null },
    //   { port: 443, open: true, data: null } ]
  })
  .catch(console.error)
