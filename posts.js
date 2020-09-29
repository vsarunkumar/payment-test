const express = require("express");
const sha512 = require('js-sha512');
const request = require('request')

const router = express.Router();





router.post("/payment", (req, res, next) => {
  console.log('rewwwwwwwwwwwwwwww  ========================================================================  ')
  console.log('rewwwwwwwwwwwwwwww    ', req)
  res.send('POST request to the homepage');
});

router.post("", (req, response, next) => {

    console.log('req.body      ', req.body)
    
    const value = `45d3e30c7b244ce6f496293d6d3dbd963922c060|charvila veedu|pulipra|10|01113598-0efc-49a1-853e-183fb39c7861|KOllam|India|INR|description|arunkumar@aabasoft.in|TEST|Arunkumar|${req.body.order_id}|8943639627|http://localhost:3000/payment|Kerala|udf1|udf2|udf3|udf4|udf5|989898`;
        const data = {
            address_line_1: 'charvila veedu',
            address_line_2: 'pulipra',
            amount: '10',
            api_key: '01113598-0efc-49a1-853e-183fb39c7861',
            city: 'KOllam',
            country: 'India',   
            currency: 'INR',
            description: 'description',
            email: 'arunkumar@aabasoft.in',
            hash: sha512.sha512(value).toUpperCase(),
            mode: 'TEST',
            name: 'Arunkumar',
            order_id: req.body.order_id,
            phone: '8943639627',
            return_url: 'http://localhost:3000/payment',
            state: 'Kerala',
            zip_code: '989898',
            udf1: 'udf1',
            udf2: 'udf2',
            udf3: 'udf3',
            udf4: 'udf4',
            udf5: 'udf5'
        };


        request.post(
            'https://api.empay.in/v2/getpaymentrequesturl',
            {
                json: { ...data },
            },
            (error, res, body) => {
                if (error) {
                console.error(error)
                return
                }

                console.log(`statusCode: ${res.statusCode}`)
                console.log(body)
                return response.status(200).json({data: body.data});
            }
            )
   
});

module.exports = router;
