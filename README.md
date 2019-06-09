
## TouchBistro

**Description**

This repo has a simple React webpage which allows users to enter a number between 2 and 10 million.

This number represents the upper limit for generating a list of prime numbers.

Once the list of prime numbers are generated, the median of that list is then calculated and shown to the user.



**Setup**

To run the application, follow the steps below:

1. Install dependencies: `yarn install`
2. Run the UI: `yarn start`

> _Note:_ the API portion of this repository is entirely optional but was created for completeness and usage in future projects.
To run the repository along with the API, simply use `yarn up` or to run the API independantly, use `yarn api:dev`.


**Testing & Linting**

To run the tests (Jest), simply use `yarn test`.

To run the linter (ESlint), use `yarn lint`.

Linting and testing rules can be found in `package.json`.


**Implementation**

If you are interested in inspecting how prime numbers are generated, see `./src/util/primeslist.util.js`.

The implementation is based on Sieve of Eratosthenes's algorithm, see [this link](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) for more details.

The UI framework used is called [AntDesign](https://ant.design/).