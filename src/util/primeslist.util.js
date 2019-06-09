/**
 * Checks that the limit `n` for the prime numbers list is valid.
 * @param {Integer} n: The limit number when generating the list of primes
 */
const checkLimitValidity = (n) => {
    if (n < 2) {
        throw new Error('The Minimum value is 2')
    } else if (n > 10000000) {
        throw new Error('Generating a list of prime numbers this large can crash your browser. Use a number less than 10 million please.')
    }
}

/**
 * For a given upper limit, generating a list of all prime numbers
 * leading upto the upper limit value.
 * @param {Integer} upperLimit
 * @returns {Array} The list of prime numbers 
 */
export const generatePrimes = (upperLimit) => {
    // validations
    checkLimitValidity(upperLimit)

    // where to start counting primes
    let current = 2
    // a placeholder list which will denote which
    // numbers are prime and which aren't
    // initially assume all numbers are prime
    let primes = new Array(upperLimit).fill(true)

    primes[0] = false

    while (current * current <= upperLimit) {
        if (primes[current - 1] === true) {
            // go through all multiples of 'current', set them to non-prime
            for (let i = current * current; i < upperLimit + 1; i += current) {
                primes[i - 1] = false
            }
        }

        current += 1
    }

    // convert the true-false array into an array of positions
    // also filter out any non-prime values
    primes = primes
        .map((value, index) => value === true ? index + 1 : false)
        .filter(value => value)

    return primes
}

/**
 * Gets the median value from the list of prime numbers
 * upto the the number `n`.
 * @param {Integer} n: The limit number to calculate primes to
 * @returns {Array} A response array containing either 1 or 2 numbers
 *                  depending on the size of the prime numbers list
 */
export const getPrimesMedian = async (n) => {
    const primes = generatePrimes(n)

    // if the list of primes is even
    if (primes.length % 2 === 0) {
        // return the 2 numers in the middle
        return [
            primes[Math.floor((primes.length - 1) / 2)],
            primes[primes.length / 2]
        ]
    }
    // else if the list of primes has an odd length
    else {
        // return the middle number
        return primes[Math.floor(primes.length / 2)]
    }
}

export default {
    generatePrimes,
    getPrimesMedian,
}