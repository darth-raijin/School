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
    const enteredCoupon = JSON.stringify(req.body)
    const parsedCoupon = JSON.parse(enteredCoupon)

    console.log("Winning Codes: " + winnerCodes)
    console.log("User entered: " + enteredCoupon)
    

    if (winnerCodes.includes(parsedCoupon.couponcode)) {
        console.log(`Congratulations to ${parsedCoupon.name} \nwith code ${parsedCoupon.couponcode}!`);
        res.json({status: true})
    } else {
        console.log(`Lost with ${enteredCoupon}!`);
        res.json({status: false});
    }
    
}) 

app.listen(8080, () => console.log('Listening...'))
