import { promises } from 'fs';

interface CopyRecord {
  source: string;
  dest: string;
}

const sharedFiles: CopyRecord[] = [{ source: 'src/util/theme.ts', dest: 'ng/src/util/theme.ts' }];

async function copyFile(record: CopyRecord) {
  await promises.copyFile(record.source, record.dest);
}

function main() {
  sharedFiles.forEach(copyRecord => {
    copyFile(copyRecord);
  });
}

main();
