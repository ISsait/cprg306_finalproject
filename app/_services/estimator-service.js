import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export async function dbAddItem(
  user,
  projectName,
  footingObject,
  wallObject,
  concreteObject,
  rebarObject
) {
  try {
    const docRef = await addDoc(collection(db, "users", user.uid, "projectName", projectName, "footingObject"), footingObject);
    const docRef2 = await addDoc(collection(db, "users", user.uid, "projectName", projectName, "wallObject"), wallObject);
    const docRef3 = await addDoc(collection(db, "users", user.uid, "projectName", projectName, "concreteObject"), concreteObject);
    const docRef4 = await addDoc(collection(db, "users", user.uid, "projectName", projectName, "rebarObject"), rebarObject);
    console.log("Item added to db", docRef.id);
    alert("Item added to database");
  } catch (error) {
    console.error("Error adding item: ", error);
    alert("Error adding item to database");
  }
}

// export async function dbGetItems(user, setItemsList) {
//   try {
//     const q = query(collection(db, "users", user, "items"));
//     const querySnapshot = await getDocs(q);
//     const items = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     setItemsList(items);
//   } catch (error) {
//     console.error("Error getting items: ", error);
//   }
// }
