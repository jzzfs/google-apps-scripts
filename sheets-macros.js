function deleteColumns() {
  var required = ["Name", "Position", "Salary"];

  var sheet = SpreadsheetApp.getActiveSheet();
  var width = sheet.getLastColumn();
  var headers = sheet.getRange(1, 1, 1, width).getValues()[0];
  for (var i = headers.length - 1; i >= 0; i--) {
    if (required.indexOf(headers[i]) == -1) {
      sheet.deleteColumn(i+1);
    }
  }
}
