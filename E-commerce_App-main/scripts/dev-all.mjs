import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const frontend = spawn('npm', ['run', 'dev:frontend'], { cwd: root, shell: true, stdio: 'inherit' });
const backend = spawn('npm', ['run', 'dev:backend'], { cwd: root, shell: true, stdio: 'inherit' });

frontend.on('exit', (code) => {
  if (code !== 0) process.exit(code ?? 1);
});

backend.on('exit', (code) => {
  if (code !== 0) process.exit(code ?? 1);
});

process.on('SIGINT', () => {
  frontend.kill('SIGINT');
  backend.kill('SIGINT');
  process.exit(0);
});
