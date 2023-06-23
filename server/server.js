/**
 * Sample server code.
 * Has simulated long init.
 */

const http = require('http');

setTimeout(() => {
    console.log('init done')
    http.createServer( (req, res) => {
        res.write('I am up');
        res.end();
    }).listen(8080)
}, 20000);
