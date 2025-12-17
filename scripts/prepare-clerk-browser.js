const fs = require('fs')
const path = require('path')

const source = path.join(
  __dirname,
  '..',
  'node_modules',
  '@clerk',
  'clerk-js',
  'dist',
  'clerk.browser.js',
)

const destinationDir = path.join(__dirname, '..', 'public', 'js')
const destination = path.join(destinationDir, 'clerk.browser.js')

if (!fs.existsSync(source)) {
  console.error(
    'Unable to locate clerk.browser.js in node_modules. Did you install dependencies?',
  )
  process.exit(1)
}

fs.mkdirSync(destinationDir, { recursive: true })
fs.copyFileSync(source, destination)

const { size } = fs.statSync(destination)
const kbSize = Math.round(size / 1024)

console.log(
  `Copied Clerk browser bundle (${kbSize} kB) to public/js/clerk.browser.js`,
)
