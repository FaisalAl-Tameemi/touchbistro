
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

Also if you are using __docker-compose__ then use the following steps instead:

1. From within the repository, run `chmod +x setup.sh`
2. run `./setup.sh` to install all dependencies
3. run `docker-compose up web` to run the react app


**Testing & Linting**

To run the tests (Jest), simply use `yarn test`.

To run the linter (ESlint), use `yarn lint`.

Linting and testing rules can be found in `package.json`.

> _Note:_ This repo does not used semi-colons but that is a stylistic choice. Can be easily changed using ESLint.


**Implementation**

If you are interested in inspecting how prime numbers are generated, see `./src/util/primeslist.util.js`.

The implementation is based on Sieve of Eratosthenes's algorithm, see [this link](https://www.geeksforgeeks.org/sieve-of-eratosthenes/) for more details.

The UI framework used is called [AntDesign](https://ant.design/).
