import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.firestore = firebase.firestore();
    this.storage = firebase.storage();
  }

  async getData() {
    let allData = [];
    let allBusinesses = [];
    const db = this.firestore
      .collection("phonebook_barbados")
      .doc("aggregated_businesses");

    await db.get().then((doc) => {
      allData.push(doc.data());
    });

    allData.map((data) => {
      data.businesses.map((business) => {
        allBusinesses.push(business);
      });
    });
    return allBusinesses;
  }

  async getBusiness(id) {
    let list = [];
    let db = firebase.firestore().collection("phonebook_barbados").doc(id);

    await db.get().then((doc) => {
      if (doc.exists) {
        list.push(doc.data());
      }
    });
    return list;
  }
}

export default new Firebase();
