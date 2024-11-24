import os
from typing import Annotated
from fastapi import APIRouter, Depends, status
from pydantic import BaseModel

from utils.responses import PaymentRequiredResponse, StandardResponse

PaymentRouter = APIRouter(prefix='/payment')

class GeneratePaymentResponse(BaseModel):
    msg: str = ""
    paymentURL: str
@PaymentRouter.get('/{serverId}')
def generate_payment_session(serverId: str) -> GeneratePaymentResponse:
    # TODO: StripeClient as dependency
    import stripe
    stripe.api_key = os.environ["STRIPE_SECRET_KEY"]
    BASE_URL = os.environ["BASE_URL"]

    session = stripe.checkout.Session.create(
      success_url=f"{BASE_URL}/",
      cancel_url=f"{BASE_URL}/",
      currency='pln',
      line_items=[{"price": "price_1QNfT2DY0D7JFcFXZQPMzYGx", "quantity": 1}],
      mode="payment"
    )

    return {
        'msg': 'Payment session created',
        'paymentURL': session.url
    }


@PaymentRouter.get('/redirect/{orderId}', responses={
    status.HTTP_402_PAYMENT_REQUIRED: {'model': PaymentRequiredResponse}
})
def confirm_payment_url(orderId: str) -> StandardResponse:
    return {
        'msg': 'Payment confirmed'
    }


# JS CODE

# import { onCall, onRequest } from 'firebase-functions/v2/https';
# import { defineSecret } from 'firebase-functions/params';
# import express from 'express';
# import Stripe from 'stripe';
# import { initializeApp, cert } from 'firebase-admin/app';
# import { getFirestore, initializeFirestore } from 'firebase-admin/firestore';

# var serviceAccount = require('../matura-infinity-firebase-adminsdk-h6slk-b67b5aca6b.json');

# const API_KEY = defineSecret('API_KEY');
# const STRIPE_PUBLIC_KEY = defineSecret('STRIPE_PUBLIC_KEY');
# const STRIPE_SECRET_KEY = defineSecret('STRIPE_SECRET_KEY');
# const STRIPE_WEBHOOK_SECRET_PAYMENTS = defineSecret(
# 	'STRIPE_WEBHOOK_SECRET_PAYMENTS'
# );

# const app = initializeApp({ credential: cert(serviceAccount) });
# initializeFirestore(app, {});

# type Course = 'kursPython' | 'kursExcel' | 'kursAccess' | 'kursAlgo';

# const paymentsWebhookApp = express();
# paymentsWebhookApp.post('/', async (req: express.Request, res) => {
# 	const firestore = getFirestore();
# 	const stripe = new Stripe(STRIPE_PUBLIC_KEY.value(), {
# 		apiVersion: '2023-08-16',
# 	});
# 	let event;

# 	const webhookSecret = STRIPE_WEBHOOK_SECRET_PAYMENTS.value();
# 	const sig = req.headers['stripe-signature'];

# 	try {
# 		event = stripe.webhooks.constructEvent(
# 			req.rawBody as string,
# 			sig as string,
# 			webhookSecret as string
# 		);
# 	} catch (e) {
# 		const err = e as Error;
# 		console.log(`❌ Error message: ${err.message}`);
# 		res.status(400).send(`Webhook Error: ${err.message}`);
# 		return;
# 	}

# 	console.log('✅ Success:', event.id);

# 	if (event.type === 'payment_intent.succeeded') {
# 		const stripeObject: Stripe.PaymentIntent = event.data
# 			.object as Stripe.PaymentIntent;

# 		//*SUCCESS

# 		//? sprawdzenie danych
# 		console.log('✅ Success:', event.id);
# 		console.log('METADATA:', stripeObject.metadata);

# 		const { user, products } = stripeObject.metadata;
# 		console.log('PRODUCTS:', products);
# 		const courses = JSON.parse(products) as Course[];

# 		const currentUserDocRef = firestore.collection('users').doc(user);
# 		const userDoc = await currentUserDocRef.get();

# 		if (userDoc.exists) {
# 			//USER DOC IS CREATED -> ADD COURSES TO ARR.
# 			const data = userDoc.data();
# 			if (!data) return;
# 			const newCourses = new Set(data.courses);
# 			courses.forEach((course) => newCourses.add(course));
# 			const newCoursesArr = [...newCourses.values()];
# 			await currentUserDocRef.set({ courses: newCoursesArr });
# 		} else {
# 			//USER DOC IS NOT CREATED -> ADD DOC WITH COURSES ARR.
# 			await currentUserDocRef.set({ courses });
# 			return res.json({ received: true });
# 		}
# 	}

# 	return res.json({ received: true });
# });

# export const paymentsWebhook = onRequest(
# 	{
# 		region: 'europe-west2',
# 		secrets: [API_KEY, STRIPE_WEBHOOK_SECRET_PAYMENTS, STRIPE_PUBLIC_KEY],
# 	},
# 	paymentsWebhookApp
# );

# export interface IPaymentsSession {
# 	userID: string;
# 	products: { name: Course; price: string }[];
# 	baseUrl: string;
# }
# export interface IPaymentsSessionResponse {
# 	sessionId: string;
# }

# export const paymentsSession = onCall<IPaymentsSession>(
# 	{ region: 'europe-west2', secrets: [STRIPE_SECRET_KEY] },
# 	async ({ data: { userID, products, baseUrl } }) => {
# 		const stripe = new Stripe(STRIPE_SECRET_KEY.value(), {
# 			apiVersion: '2023-08-16',
# 		});
# 		const courses = products.map((prod) => prod.name);
# 		const metadata = { user: userID, products: JSON.stringify(courses) };
# 		const session = await stripe.checkout.sessions.create({
# 			success_url: `${baseUrl}/checkoutSuccess`,
# 			cancel_url: `${baseUrl}`,
# 			mode: 'payment',
# 			currency: 'pln',
# 			line_items: products.map(({ price }) => {
# 				return { quantity: 1, price: price };
# 			}),
# 			metadata,
# 			payment_intent_data: {
# 				metadata,
# 			},
# 		});
# 		const res: IPaymentsSessionResponse = { sessionId: session.id };
# 		return res;
# 	}
# );

# /**
 
# stripe trigger payment_intent.succeeded --add payment_intent:metadata[user]=userID --add payment_intent:metadata[products]=[\"kursPython\",\"kursAlgo\"]
# stripe trigger payment_intent.succeeded --add payment_intent:metadata[user]=userID --add payment_intent:metadata[products]=[\"kursExcel\"]

#  */
