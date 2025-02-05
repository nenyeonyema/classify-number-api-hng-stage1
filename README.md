# A Number Classfiying API for HNG Backend/DevOps Stage 1

## Project Description
This project is an API that takes a number and classifies them by returning its Mathematical Properties.
* The Number Value of the Query.
* Checks if number is a Prime Number.
* Checks if number is a Perfect Number.
* Classify its properties if it is an amstrong, odd or even.
* The Sum of the Digits.
* Fun fact about the Number.

# API ENDPOINT
`GET** <your-domain.com>/api/classify-number?number=371`

**RESPONSE**
```
    {
        "number": 371,
        "is_prime": false,
        "is_perfect": false,
        "properties": ["armstrong", "odd"],
        "digit_sum": 11,  // sum of its digits
        "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
    }
```
## Set Up Instructions
Clone the repository 
`git clone https://github.com/nenyeonyema/classify-number-api-hng-stage1`

Navigate to the project directory `cd classify-number-api-hng-stage1`

Install dependencies `npm install`

Run the project locally `node app.js` or `npm run start` or `nodemon app.js`

**Access the API endpoint**
https://classify-number-api-hng-stage1-git-main-chinenyes-projects.vercel.app/api/classify-number

**Hire A Backend NodeJS Developers** https://hng.tech/hire/nodejs-developers

**Hire A DevOps Engineer** https://hng.tech/hire/devops-engineers
