// import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
// import { firestore } from "firebaseConfig";

// const db = firebase.firestore();
// const data = await db.collection("contact").get();
// console.log(data.docs.map((doc) => doc.data()));

// export const sendContactForm = async ({ name, email, phone }) => {
// 	try {
// 		const ref = collection(firestore, "contact");
// 		await addDoc(ref, {
// 			name,
// 			email,
// 			phone,
// 			sentAt: Timestamp.now().toDate(),
// 		});
// 		return 0;
// 	} catch (err) {
// 		console.log(err);
// 		return -1;
// 	}
// };
