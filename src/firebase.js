// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "instaclonenext.firebaseapp.com",
  projectId: "instaclonenext",
  storageBucket: "instaclonenext.appspot.com",
  messagingSenderId: "889285930894",
  appId: "1:889285930894:web:cbc1d2c7346f8ae762bedf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// service firebase.storage {
// 7
//   match /b/{bucket}/o {
// 8
//     match /{allPaths=**} {
// 9
//       allow read;
// 10
//       allow write: if
// 11
//       request.resource.size < 2 * 1024 * 1024 &&
// 12
//       request.resource.contentType.matches('image/.*')
// 13
      
// 14
//     }
// 15
//   }
// 16
// }


