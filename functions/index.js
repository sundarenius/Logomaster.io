const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();
const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)

exports.notificationsMail = functions.database.ref('/orders/{pushId}')
    .onCreate(event => {
    const order = event.val()
    if (order.hasOwnProperty('logosLink') && order.hasOwnProperty('email') && order.email.lenght > 2 && order.email.includes('@')) {
        const msg = {
            to: order.email,
            from: 'noreply@logomaster.io',
            subject: 'Congratulations, here is your logos',
            substitutionWrappers: ['{{', '}}'],
            dynamicTemplateData: {
                logo1 : order.logosLink.x0,
                logo2 : order.logosLink.x1,
                logo3 : order.logosLink.x2,
                price : order.price
            },
            templateId: 'd-64507859984e43f4a7606932bc788ef3'
        }
        return sgMail.send(msg)
    }
    return null
    })

// TODO: Remember to set token using >> firebase functions:config:set stripe.token="SECRET_STRIPE_TOKEN_HERE"
const stripe = require('stripe')(functions.config().stripe.token);

function charge(req, res) {
    const body = JSON.parse(req.body);
    const token = body.token.id;
    const amount = body.charge.amount;
    const currency = body.charge.currency;

    // Charge card
    stripe.charges.create({
        amount,
        currency,
        description: 'Firebase Example',
        source: token,
    }).then(charge => {
        return send(res, 200, {
            message: 'Success',
            charge,
        });
    }).catch(err => {
        console.log(err);
        send(res, 500, {
            error: err.message,
        });
    });
}

function send(res, code, body) {
    res.send({
        statusCode: code,
        headers: {'Access-Control-Allow-Origin': '*'},
        body: JSON.stringify(body),
    });
}

app.use(cors);
app.post('/', (req, res) => {

    // Catch any unexpected errors to prevent crashing
    try {
        charge(req, res);
    } catch(e) {
        console.log(e);
        send(res, 500, {
            error: `The server received an unexpected error. Please try again and contact the site admin if the error persists.`,
        });
    }
});

exports.charge = functions.https.onRequest(app);