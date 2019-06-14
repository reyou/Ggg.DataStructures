var findDuplicate = function(paths) {
  let hash = {};
  for (let i = 0; i < paths.length; i++) {
    // root/a
    let path = paths[i];
    // root/a, 1.txt(abcd), 2.txt(efgh)
    let pathSections = path.split(" ");
    // root/a
    let folder = pathSections[0];
    // 1.txt(abcd), 2.txt(efgh)
    let files = getFiles(pathSections);
    buildFileHash(hash, folder, files);
  }
  let results = [];
  for (let key in hash) {
    let arr = hash[key];
    if (arr.length > 1) {
      results.push(arr);
    }
  }
  return results;
};
// root/a, 1.txt(abcd), 2.txt(efgh)
function getFiles(pathSections) {
  let files = [];
  for (let i = 1; i < pathSections.length; i++) {
    files.push(pathSections[i]);
  }
  return files;
}
// root/a 1.txt(abcd) =>  root/a/1.txt
function buildPath(folder, fileInfo) {
  let fileName = fileInfo.split("(")[0];
  let builder = folder + "/" + fileName;
  return builder;
}

// 1.txt(abcd)
function getContent(fileInfo) {
  let contents = fileInfo.split("(")[1].split(")")[0];
  return contents;
}

function buildFileHash(hash, folder, files) {
  for (let i = 0; i < files.length; i++) {
    let content = getContent(files[i]);
    let fullPath = buildPath(folder, files[i]);
    if (hash[content] === undefined) {
      hash[content] = [fullPath];
    } else {
      hash[content].push(fullPath);
    }
  }
}
