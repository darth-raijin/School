const express = require('express')
const fs = require('fs')
const app = express()

const html = fs.readFileSync('coupon-client.html');
const js = fs.readFileSync('coupon-client.js');

const winnerCodes = ["123", "secret", "abc321"];

app.get('/', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end(html);
 })
app.get('/coupon-client.js', (req, res) => {
    res.writeHead(200, {"Content-Type": "application/javascript"});
    res.end(js);
})
app.post('/winner', express.json(), (req, res) => {//use built-in JSON middle-ware
    let jsonObj = req.body //JSON already parsed: { "name": "my name" }
    let enteredCoupon = JSON.stringify(jsonObj.couponcode)

    console.log(enteredCoupon)
    if (enteredCoupon !== null) {
        console.log(`Congratulations to ${jsonObj.name} \n with ${enteredCoupon}!`);
        res.json({winner: true})
    } else {
        console.log(`Lost with ${enteredCoupon}!`);
        res.json({winner: false});
    }
    
}) 

app.listen(8080, () => console.log('Listening...'))
