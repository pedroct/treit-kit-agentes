#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function printHelp() {
  const text = `\
@treit/kit-agentes

Usage:
  kit-agentes init [dir] [--force]

Examples:
  kit-agentes init my-kit
  kit-agentes init . --force

Run with npx:
  npx @treit/kit-agentes init my-kit
`;
  console.log(text);
}

function isDirectoryEmpty(dir) {
  const entries = fs.readdirSync(dir);
  return entries.length === 0;
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
      continue;
    }

    fs.copyFileSync(srcPath, destPath);
  }
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

const args = process.argv.slice(2);
const cmd = args[0];
const flags = new Set(args.filter((arg) => arg.startsWith('-')));

if (!cmd || cmd === '--help' || cmd === '-h' || cmd === 'help') {
  printHelp();
  process.exit(0);
}

if (cmd !== 'init') {
  printHelp();
  fail(`unknown command "${cmd}"`);
}

const targetArg = args.find((arg, index) => index > 0 && !arg.startsWith('-')) || '.';
const targetDir = path.resolve(process.cwd(), targetArg);
const force = flags.has('--force');
const templateDir = path.resolve(__dirname, '..', 'templates', 'base');

if (!fs.existsSync(templateDir)) {
  fail(`template directory not found: ${templateDir}`);
}

if (fs.existsSync(targetDir)) {
  if (!force && !isDirectoryEmpty(targetDir)) {
    fail(`target directory is not empty: ${targetDir}. Use --force to overwrite.`);
  }
} else {
  fs.mkdirSync(targetDir, { recursive: true });
}

copyDir(templateDir, targetDir);

console.log(`Scaffold created at ${targetDir}`);
