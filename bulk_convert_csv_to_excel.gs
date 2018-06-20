function convert() {
  var folder = DriveApp.getFolderById('<folder-id>');
  
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    Logger.log(file)
    Drive.Files.copy({}, file.getId(), {convert: true});
  }
} 
