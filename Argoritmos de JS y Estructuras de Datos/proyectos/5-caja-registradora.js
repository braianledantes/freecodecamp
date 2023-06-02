function checkCashRegister(price, cash, cid) {
    let rest = cash - price;
    const totalChange = cid.reduce((total, current) => total += current[1], 0);

    if (totalChange == rest) return { status: "CLOSED", change: cid };

    const currentyUnits = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];
    const cidv = cid.reverse().map(item =>
        [
            item[0],
            item[1],
            currentyUnits.find(unit => unit[0] == item[0])[1]
        ]);

    let change = [];

    cidv.forEach(([unit, amount, value]) => {
        if (rest >= value) {

            let unitImport;
            if (rest <= amount) {
                let cant = Math.floor(rest / value);
                unitImport = value * cant;
            } else {
                unitImport = amount;
            }

            rest = Number.parseFloat(rest - unitImport).toFixed(2);
            change.push([unit, unitImport]);
        }
    });

    if (rest > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
    return { status: "OPEN", change: change };
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

console.log(96.74 - 60)