import fs from 'fs';
import path from 'path';

export const getFilesWithKeyword = (keyword: string, folderName: string, files_?: Array<string>) => {
  files_ = (typeof files_ === 'undefined') ? [] : files_;
  
  try {
    const files = fs.readdirSync(folderName);
    for (let i in files) {
      let name = path.join(folderName, files[i]);
      if (fs.statSync(name).isDirectory()) {
        getFilesWithKeyword(keyword, name, files_);
      } else {
        // Buscar archivos .js o .ts que contengan la palabra clave
        if ((name.includes(keyword)) && (name.endsWith('.js') || name.endsWith('.ts'))) {
          files_.push(name);
        }
      }
    }
  } catch (err) {
    console.error(`❌ Error reading folder ${folderName}:`, err);
  }
  
  return files_;
}