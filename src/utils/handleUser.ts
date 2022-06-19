// Membuat function berikut
// menambah poin user dan update ke firestore

import { db } from "api/firebase";
import { doc, updateDoc } from "firebase/firestore";

const handleAddPoint = async (
  uid: string,
  currentPoint: number,
  addedPoint: number
) => {
  const newPoints = currentPoint + addedPoint;
  await updateDoc(doc(db, "userStatus", uid), {
    points: newPoints,
  });
  return newPoints;
};

export { handleAddPoint };
