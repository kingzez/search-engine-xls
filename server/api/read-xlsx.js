/* eslint-disable require-await */
/* eslint-disable no-console */
const path = require('path')
const XLSX = require('xlsx')
// ToDo Redis

async function readXlsx() {
  const filePath = path.join(__dirname, '../../data/city-code.xlsx')
  // console.log('file path is ', filePath)
  const table = XLSX.readFile(filePath)
  const sheetName = table.SheetNames[0]
  const jsons = XLSX.utils.sheet_to_json(table.Sheets[sheetName])
  // console.log(jsons)
  return jsons
}

module.exports = readXlsx
