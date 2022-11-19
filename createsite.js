"use strict";
exports.__esModule = true;
var fs = require("fs");
var filesBoilerplate_1 = require("./filesBoilerplate");
var folderName = process.argv[2] || 'NewWebSite';
var websiteName = process.argv[3] || 'My New Website';
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync("".concat(folderName, "/index.html"), (0, filesBoilerplate_1.htmlSkeleton)("".concat(websiteName)));
    fs.writeFileSync("".concat(folderName, "/style.css"), filesBoilerplate_1.cssSkeleton);
    fs.writeFileSync("".concat(folderName, "/index.js"), filesBoilerplate_1.jsSkeleton);
}
catch (error) {
    console.log('Something went wrong, More details below:', error);
}
