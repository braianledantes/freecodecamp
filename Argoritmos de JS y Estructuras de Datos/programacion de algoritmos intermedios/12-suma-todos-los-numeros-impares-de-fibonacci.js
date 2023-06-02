function sumFibs(num) {
    let fib1 = 0;
    let fib2 = 1;
    let sum = 0;

    while (fib2 <= num) {
        if (fib2 % 2 !== 0) {
            sum += fib2;
        }

        [fib1, fib2] = [fib2, fib1 + fib2];
    }

    return sum;
}

sumFibs(1);