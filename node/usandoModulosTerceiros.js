const _ = require('lodash'); // procura dentro de node_modules/lodash o arquivo index.js

setInterval(() => console.log(_.random(500, 600)), 2000);
