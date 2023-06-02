function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    const f = function (orb) {
        const a3 = Math.pow(earthRadius + orb.avgAlt, 3);
        const op = 2 * Math.PI * Math.sqrt(a3 / GM);
        return { name: orb.name, orbitalPeriod: Math.round(op) }
    }

    return arr.map(o => f(o));
}

const r = orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);

console.log(r)