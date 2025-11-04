const fs = require('fs');
const path = require('path');

// Simple minification function
function minify(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/;\s*}/g, ';}') // Remove space before closing brace
    .replace(/{\s*/g, '{') // Remove space after opening brace
    .replace(/}\s*/g, '}') // Remove space after closing brace
    .trim();
}

// Read source file
const srcPath = path.join(__dirname, 'src', 'paste-me-not.js');
const source = fs.readFileSync(srcPath, 'utf8');

// Create minified version
const minified = minify(source);

// Write distribution files
const distDir = path.join(__dirname, 'dist');

// Regular version
fs.writeFileSync(path.join(distDir, 'paste-me-not.js'), source);

// Minified version
fs.writeFileSync(path.join(distDir, 'paste-me-not.min.js'), minified);

// Version info
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const versionInfo = `/* paste-me-not v${packageJson.version} | MIT License */\n`;

// Add version headers
fs.writeFileSync(
  path.join(distDir, 'paste-me-not.js'), 
  versionInfo + source
);

fs.writeFileSync(
  path.join(distDir, 'paste-me-not.min.js'), 
  versionInfo + minified
);

console.log('✓ Distribution files created:');
console.log('  - dist/paste-me-not.js');
console.log('  - dist/paste-me-not.min.js');
console.log(`  - Version: ${packageJson.version}`);