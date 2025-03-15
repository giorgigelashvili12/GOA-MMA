import express from 'express';
import sendSMS from '../service/twilio.js';
import limiter from '../middlewares/rateLimiter.js';

const router = express.Router();

router.post('/send-sms', limiter, async (req, res) => {
    let { name, phone } = req.body;

    if(!name || !phone) {
        return res.status(400).json({ message: "სახელი და ნომერი აუცილებელია!" });
    }

    if(!/^\+?[0-9\s]{9,15}$/.test(phone)) {
        return res.status(400).json({ message: "ნომერი არასწორია! გამოიყენეთ მხოლოდ ციფრები" });
    }

    try {
        const messageBody = `მოგესალმებით ${name}, გვიხარია რომ დაინტერესდით ჩვენი სერვისებით! უფრო მეტი ინფორმაციისთვის გაეცანით ჩვენ ფეისბუქ გევრდს: https://www.facebook.com/nika1keshelava`;
        const smsResult = await sendSMS(phone, messageBody);
        res.json({ message: "SMS წარმატებით გაიგზავნა!", smsId: smsResult });

    } catch(e) {
        console.error('error sending sms', e.message, e);
        if(e.response && e.response.status === 401) {
            res.status(401).json({msg: 'authentication failed'});
        } else {
            res.status(500).json({msg: 'sms gagzavnashi shecdona moxad'})
        }
    }
});

export default router;