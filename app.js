require("dotenv").config()
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT

app.get("/api/classify-number?number=371", (req, res) => {

    const searchQuery = Number(req.query.number);

    const result = {}

    if(isNaN(searchQuery)) {
        resError = {
            "number": "alphabet",
            "error": true
        }
        return res.status(400).json(resError);
    }

    // checks if a number is an integer
    if(searchQuery % 1 === 0) {
        result.number = searchQuery;

        // checks if a number is prime
        let is_prime = true;
        if(searchQuery <= 1){
            is_prime = false;
        } else {
            for(let i = 2; i < searchQuery; i++){
                if(searchQuery % i === 0) {
                    is_prime = false;
                    break
                }
            }
        }
        result.is_prime = is_prime;

        // checks if a number is perfect
        let is_perfect = false;
        if(searchQuery < 1) {
            is_perfect = false
        } else {
            totalNum = 0
            for(let i = 1; i < searchQuery; i++){
                if (searchQuery % i === 0){
                    
                    totalNum += i
                    
                }
            }
            if(searchQuery === totalNum){
                is_perfect = true;
            }
        }
        result.is_perfect = is_perfect;

        
        let temp = Math.abs(searchQuery);
        let sumTemp = 0
        let digitSum = 0
        let funFact = ""
        
        // Converts the number to a string. splits with a space, 
        // returns the number as an array and counts the length of the array
        const numString = temp.toString().split("").map(Number);
        const count = numString.length;

        // Properties of a Number and Sum of digits
        let newProperties = []
        let numArray = []

        numString.forEach(digit => {
            sumTemp += Math.pow(digit, count);
            digitSum += digit;
            numArray.push(`${digit}^${count}`)
        });
        
        // Checks if Number is an Amstrong, Odd or Even.
        if (sumTemp === Math.abs(searchQuery)){
            newProperties.push("amstrong")
            funFact = `${searchQuery}  is an Armstrong number because ${numArray.join(" + ")} = ${temp}`
        } else{
            newProperties.push("notAmstrong")
            funFact = `${searchQuery}  is Not an Armstrong number because ${numArray.join(" + ")} != ${temp}`
        }
        if(searchQuery % 2 === 0){
            newProperties.push("even");
        } else{
            newProperties.push("odd")
        }
        result.properties = newProperties
        result.digit_sum = digitSum
        result.fun_fact = funFact
    }

    return res.status(200).json(result);

});

app.listen(PORT, () => {
    // console.log(`App Listenning on ${PORT}`)
})