import { db } from "api/firebase";
import targetPoints from "data/targetPoints";
import { doc, updateDoc } from "firebase/firestore";

const handleAddPoints = async (
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

const checkPoints = (currentPoint: number) => {
  const check = targetPoints.includes(currentPoint);
  if (check) {
    return true;
  } else {
    return false;
  }
};

export { handleAddPoints, handleAddPremium, checkPremium, checkPoints };
