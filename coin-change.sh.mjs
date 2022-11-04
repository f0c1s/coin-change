import makeChange from "./index"

/**
 * Values of coins that are available to us for
 * making the change.
 * @type {number[]}
 */
const denominations = [50, 25, 10, 5, 1];

/**
 * We are initialising it via `node coin-change.js 1 2 5 6 10 11 25 26 49 50 51 99 100 101`
 * @type {number[]}
 */
const targets = process.argv.slice(2)
    .map(i => Number(i));

/**
 * @type {{target: number, change: string}[]}
 */
const out = makeChange(targets, denominations);

console.log(out);

