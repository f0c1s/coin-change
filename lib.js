/**
 * makeChange generates change info based on tragets and denominations.
 * @param targets {number[]} List of positive numbers.
 * @param denominations {number[]}
 * @return {{target: number, change: string}[]}
 */
const makeChange = (targets, denominations) => targets
    .map(t => {
        let change = denominations.map(_ => 0);
        let sum = 0;
        for (let i = 0; i < change.length;) {
            if (sum + denominations[i] <= t) {
                sum += denominations[i];
                change[i]++;
            } else {
                i++;
            }
        }
        return change;
    })
    .map(arr => arr
        .map((v, i) => v > 0 ? `${denominations[i]}*${v}` : "")
        .filter(i => !!i)
        .join(" + "))
    .map((str, i) => ({target: targets[i], change: str}));

module.exports = makeChange;
