import fs from 'fs';
import path from 'path';

fs.rename(path.join("build","[...404].html"), path.join("build","404.html"), (err) => {
  if (err) {
    console.error('重命名失败:', err);
    return;
  }
  console.log('重命名成功！');
});
