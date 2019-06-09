import { generatePrimes, getPrimesMedian } from './primeslist.util'

describe('#generatePrimes -- Generating a list of prime numbers', () => {

    it('should generate the correct list of prime numbers for n = 10', () => {
        const primes = generatePrimes(10)

        expect(primes).toHaveLength(4)
        expect(primes).toEqual(expect.arrayContaining([2,3,5,7]))
    })

    it('should throw an error if the limit number (n) is less than 2', () => {
        expect(() => generatePrimes(1)).toThrow()
    })

    it('should throw an error if the limit number (n) is less than 10 million', () => {
        expect(() => generatePrimes(10000001)).toThrow()
    })

})

describe('#getPrimesMedian -- Getting the median from a list of numbers', () => {

    it('should validate inserted value for the limit (n)', async () => {
        await expect(getPrimesMedian(1)).rejects.toThrow()
        await expect(getPrimesMedian(10000001)).rejects.toThrow()
        await expect(getPrimesMedian(10001)).resolves.toBeTruthy()
    })

    it('should return correct median for n = 10', async () => {
        await expect(getPrimesMedian(10)).resolves.toEqual(expect.arrayContaining([3,5]))
    })

    it('should return correct median for n = 18', async () => {
        await expect(getPrimesMedian(18)).resolves.toEqual(7)
    })

})