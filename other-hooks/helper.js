function isPrime(num) {
    if (num < 2) return false;
    if ( num == 2 ) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findNthPrime(n) {
    if (n === 1) return 2; // 2 is the first prime number

    let count = 1;
    let candidate = 3; // Start checking from the first odd prime after 2

    while (count < n) {
        if (isPrime(candidate)) {
            count++;
        }

        if (count < n) {
            candidate += 2; // Move to the next odd number
        }
    }

    return candidate;
}


export { findNthPrime };