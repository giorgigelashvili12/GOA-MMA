import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN
const twilioPhone = process.env.TWILIO_NUM

// console.log('sid', accountSid)
// console.log('token',authToken);
// console.log('phone',twilioPhone)

const client = twilio(accountSid, authToken);

/**
 * SMS Sending service using Twilio.
 * @param {String} to number to send SMS to
 * @param {String} body the text to send to the number
 * @returns {String} SMS SID (id)
 */
const sendSMS = async (to, body) => {
    try {
        const message = await client.messages.create({
            body,
            from: twilioPhone,
            to
        });
        return message.sid;
    } catch(e) {
        console.error(e.message, e);
        throw new Error("ესემესი ვერ გაიგზავნა.");
    }
};

export default sendSMS;