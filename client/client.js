/**
 * Brittle client that must have a server up to continue
 */

const axios = require('axios');
const process = require('process')

const REPORTING_INTERVAL = 10_000;

let start = process.hrtime();
let count = 0;

function getNext() {
    axios.get('http://localhost:8080')
        .then(() => {
            setImmediate(() => {
                getNext();
            });
            count++;
            if (count % REPORTING_INTERVAL == 0) {
                console.log('count:', count)
            }
        })
        .catch((err) => {
            console.log('failed:', err.code);
        })
}

getNext();

process.on('exit', () => {
    end = process.hrtime(start);
    console.log('exiting', end);
});
