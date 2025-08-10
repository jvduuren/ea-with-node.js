# ea-with-node.js
Simple Node.js Script to use Sparx Systems Enterprise Architect

Starts EA with Node.js on a server in the background allowing to use the API of EA.

## Advantages:
- you can use any NPM package together with EA
- run EA batch jobs during the night like exports or publications

## Usage:
**`node .\simple-example.js`**

- it will start EA in the background
- opens EA database
- loads the package 'ea-with-node'
- displays some properties of the package
- closes the database
- closes EA from the background

## Requirements
- Windows Computer
- Sparx Systems Enterprise Architect installed
- Node.js installed
- **`git clone https://github.com/jvduuren/ea-with-node.js.git`**
- npm 'winax' installed 
  **`npm install winax`**


