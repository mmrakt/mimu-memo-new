#!/usr/bin/env tsx

import { type ChildProcess, spawn } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import chokidar from 'chokidar';

let devServer: ChildProcess | null = null;

function startDevServer(): void {
  if (devServer) {
    devServer.kill();
  }

  console.log('🚀 Starting Next.js dev server...');
  devServer = spawn('bun', ['run', 'dev'], {
    stdio: 'inherit',
    cwd: process.cwd(),
  });
}

function clearCacheAndRestart(): void {
  console.log('🧹 Clearing .next cache...');
  if (existsSync('.next')) {
    rmSync('.next', { recursive: true });
  }
  startDevServer();
}

// 監視対象: ページファイルの追加/削除/移動
const watcher = chokidar.watch(
  [
    'app/**/page.tsx',
    'app/**/layout.tsx',
    'app/**/not-found.tsx',
    'next.config.ts',
    'next.config.js',
    'tsconfig.json',
  ],
  {
    ignored: ['node_modules', '.next'],
    ignoreInitial: true,
  },
);

watcher
  .on('add', (path: string) => {
    console.log(`📄 Page added: ${path}`);
    clearCacheAndRestart();
  })
  .on('unlink', (path: string) => {
    console.log(`🗑️  Page removed: ${path}`);
    clearCacheAndRestart();
  })
  .on('change', (path: string) => {
    if (
      path.includes('next.config.ts') ||
      path.includes('next.config.js') ||
      path.includes('tsconfig.json')
    ) {
      console.log(`⚙️  Config changed: ${path}`);
      clearCacheAndRestart();
    }
  });

// 初回起動
clearCacheAndRestart();

// 終了処理
process.on('SIGINT', () => {
  if (devServer) {
    devServer.kill();
  }
  process.exit();
});
