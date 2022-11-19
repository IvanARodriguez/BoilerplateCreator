import fs = require('fs');
import { cssSkeleton, htmlSkeleton, jsSkeleton } from './filesBoilerplate';

const folderName = process.argv[2] || 'NewWebSite'
const websiteName = process.argv[3] || 'My New Website'

try {
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`, htmlSkeleton(`${websiteName}`))
    fs.writeFileSync(`${folderName}/style.css`, cssSkeleton)
    fs.writeFileSync(`${folderName}/index.js`, jsSkeleton)
    
} catch (error) {
    console.log('Something went wrong, More details below:', error)
}