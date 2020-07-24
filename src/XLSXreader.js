 var xlsx = require("xlsx");

 var wb = xlsx.readFile("Surname.xlsx");
 var ws = wb.Sheets["Sheet1"];
 var data = xlsx.utils.sheet_to_json(ws);

 module.exports = data;