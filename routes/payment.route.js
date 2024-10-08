const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); 

const router = express.Router();
router.use(express.json());
router.use(cors());

router.post('/', async (req, res) => {
    console.log('Stripe Secret Key:', process.env.stripe); 

    try {
        const { paymentMethodId } = req.body;
        console.log('paymentMethodId:', paymentMethodId);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: 1000,  
            currency: 'usd',
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
            return_url: 'http://localhost:5173/',
        });
        console.log('paymentIntent:', paymentIntent);

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Error:', error); 
        res.status(500).json({ error: error.message });
    }
});

router.get('/pay', (req, res) => {
    res.status(200).json({ message: 'Hello from Payment Page' });
});

module.exports = router;
