const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, './data/personnel.json')
let personnel

const readFile = async (filePath) => {
  await fs.readFile(filePath, (err, data) => {
    personnel = JSON.parse(data)
  })
}

readFile(filePath)

const getData = () => {
  return personnel
}

module.exports = {
  getData
}
