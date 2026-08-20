import { execSync } from 'child_process';

try {
  console.log('Validating build after removing Graphic Designing and Video Editing modules...');
  const output = execSync('npm run build', { encoding: 'utf-8' });
  console.log('BUILD SUCCESS!\n', output);
} catch (err) {
  console.error('BUILD FAILED!\n', err.stdout || err.message);
  process.exit(1);
}
