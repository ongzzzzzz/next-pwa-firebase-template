// client-side firebase config

import { firebase } from "@firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/analytics";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// add these in .env.local file for no epic errors
// when deploying, add these in environment variables in vercel GUI
const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

if (!firebase.apps.length){
	
	firebase.initializeApp(config)
	console.log("Firebase Initialized 🎉")

	if(typeof window !== 'undefined'){
		//enable analytics
		firebase.analytics();
		console.log("Firebase Analytics Initialized 📈")

		import("firebase/performance").then(() => {
			firebase.performance();
			console.log("Firebase Performance Initialized 🎩")
		});
	}
}

export default firebase