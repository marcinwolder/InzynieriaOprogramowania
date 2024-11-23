def handler(event, context):
    return {
        "message": "Hello from the AWS!"
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
