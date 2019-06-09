import Axios from 'axios'

const BASE_URL = '/api'

// A method to delay by a number of milliseconds
// Used to throttle speed of API requests
export const waitPromise = time => 
    new Promise((resolve) => setTimeout(resolve, time)) // eslint-disable-line no-undef

// Example request to send to the API
export const apiTest = async (throttle = 0) => {
    // throttle option
    await waitPromise(throttle)
    // make API request
    const resp = await Axios.get(BASE_URL)
    
    return resp.data
}

export const getPrimesMedian = async (n, throttle = 0) => {
    // throttle option
    await waitPromise(throttle)
    
    try {
        // make API request
        const resp = await Axios.get(`${BASE_URL}/primes-median?limit=${n}`)
        return resp.data.median
    }
    catch (err) {
        throw new Error('Failed to get primes median')
    }
}

export default {
    waitPromise,
    apiTest,
    getPrimesMedian,
}