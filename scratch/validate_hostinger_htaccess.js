import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
  console.log('Validating build with Hostinger .htaccess configuration...');
  const output = execSync('npm run build', { encoding: 'utf-8' });
  console.log('BUILD SUCCESS!\n', output);

  const htaccessPath = path.join(process.cwd(), 'dist', '.htaccess');
  if (fs.existsSync(htaccessPath)) {
    console.log('✅ Hostinger .htaccess file successfully bundled into dist/.htaccess!');
  } else {
    console.error('❌ dist/.htaccess missing!');
    process.exit(1);
  }
} catch (err) {
  console.error('BUILD FAILED!\n', err.stdout || err.message);
  process.exit(1);
}
