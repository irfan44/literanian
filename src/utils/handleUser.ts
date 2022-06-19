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

const handleAddPremium = async (
  uid: string,
  premiumExpiry: string,
  premiumDuration: number
) => {
  if (premiumExpiry === "") {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + premiumDuration);
    const newExpiry = currentDate.toISOString();
    await updateDoc(doc(db, "userStatus", uid), {
      premiumExpiry: newExpiry,
      premium: true,
    });
    return newExpiry;
  } else {
    const currentDate = new Date(premiumExpiry);
    currentDate.setDate(currentDate.getDate() + premiumDuration);
    const newExpiry = currentDate.toISOString();
    await updateDoc(doc(db, "userStatus", uid), {
      premiumExpiry: newExpiry,
      premium: true,
    });
    return newExpiry;
  }
};

const checkPremium = async (uid: string, premiumExpiry: string) => {
  const currentDate = new Date();
  const premiumExpiryDate = new Date(premiumExpiry);

  if (currentDate > premiumExpiryDate) {
    await updateDoc(doc(db, "userStatus", uid), {
      premium: false,
      premiumExpiry: "",
    });
    return false;
  } else {
    return true;
  }
};

export { handleAddPoint, handleAddPremium, checkPremium };
