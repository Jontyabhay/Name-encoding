 var xlsx = require("xlsx");

 var wb = xlsx.readFile("Surname.xlsx");
 var ws = wb.Sheets["Sheet1"];
 var data = xlsx.utils.sheet_to_json(ws);

 var wb1 = xlsx.readFile("FirstNamesIndex.xlsx");
 var ws1 = wb1.Sheets["Sheet1"];
 var data1 = xlsx.utils.sheet_to_json(ws1);

 module.exports = {data,data1};