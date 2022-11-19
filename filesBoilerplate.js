"use strict";
exports.__esModule = true;
exports.jsSkeleton = exports.htmlSkeleton = exports.cssSkeleton = void 0;
var cssSkeleton = "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\n*{\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-width: 100vw;\n  min-height: 100vh;\n  color: #f4f4f4;\n  background-color: #090909\n}\n";
exports.cssSkeleton = cssSkeleton;
var htmlSkeleton = function (WebsiteName) { return "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>HTML 5 Boilerplate</title>\n    <link rel=\"stylesheet\" href=\"style.css\">\n  </head>\n  <body>\n  <h1>Welcome to ".concat(WebsiteName, "</h1>\n\t  <script src=\"index.js\"></script>\n  </body>\n</html>\n"); };
exports.htmlSkeleton = htmlSkeleton;
var jsSkeleton = "const test = 'hello from your new website'\n  console.log(test)\n";
exports.jsSkeleton = jsSkeleton;
