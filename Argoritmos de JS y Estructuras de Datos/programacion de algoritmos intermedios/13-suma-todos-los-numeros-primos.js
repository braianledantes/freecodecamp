function sumPrimes(num) {
    let primes = [];

    for (let i = 2; i <= num; i++) {
        if (primes.every(p => i % p !== 0)) {
            primes.push(i);
        }
    }

    return primes.reduce((acc, p) => acc += p, 0);
}

sumPrimes(10);