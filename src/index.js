const { resolve } = require("path");
const { readdir, writeFile } = require("fs").promises;

const readFrom = process.argv[2];
const infoFileName = "info.json";

async function getFiles(path) {
  const currentPath = resolve(path);

  const dirents = await readdir(currentPath, { withFileTypes: true });

  const dirs = dirents.filter((x) => x.isDirectory());
  const fileCount = dirents.filter((x) => x.isFile() && x.name !== infoFileName).length;
  const dirCount = dirs.length;

  const data = {
    path: currentPath,
    files: fileCount,
    folders: dirCount,
  };

  const stringData = JSON.stringify(data, null, 2);

  const infoFilePath = resolve(currentPath, infoFileName);

  writeFile(infoFilePath, stringData);
  console.log(stringData);

  if (dirs.length === 0) {
    return;
  }

  dirs.forEach(async (x) => {
    await getFiles(resolve(path, x.name));
  });
}

getFiles(readFrom)
  .then()
  .catch((err) => console.error(err));
