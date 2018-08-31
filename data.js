const fs = require('fs');

const rdf = (i) => {
    return `_:x${i} <price> "1.5${i}" . #`;
}

const rdfs = (n) => {
    for (var i = 0; i < n; i++) {
        console.log(rdf(i))
    }
}

rdfs(process.argv[2])

// node data.js 1 > 1.rdf
// node data.js 1000 > 1000.rdf