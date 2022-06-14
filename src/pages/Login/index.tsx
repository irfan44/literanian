import { Button } from "@chakra-ui/react";
import { auth, db } from "api/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { useAppDispatch } from "redux/hooks";
import { setUserProfile } from "redux/reducer/userProfileReducer";
import { setUserStatus } from "redux/reducer/userStatusReducer";

const Login = () => {
  const dispatch = useAppDispatch();
  const provider = new GoogleAuthProvider();

  const getUserStatusDocument = async (uid: string) => {
    const document = await getDoc(doc(db, "userStatus", uid));
    return document;
  };

  const addDefaultUserStatus = async (uid: string) => {
    const defaultUserStatus = {
      premium: false,
      premiumExpiry: "",
      points: 0,
    };
    await setDoc(doc(db, "userStatus", uid), defaultUserStatus);
    dispatch(setUserStatus(defaultUserStatus));
  };

  const handleUserStatus = async (uid: string) => {
    const document = await getUserStatusDocument(uid);
    if (document.exists()) {
      const status = document.data();
      const userStatus = {
        premium: status.premium,
        premiumExpiry: status.premiumExpiry,
        points: status.points,
      };
      dispatch(setUserStatus(userStatus));
    } else {
      await addDefaultUserStatus(uid);
    }
  };

  const handleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then(async (response) => {
        const { uid, displayName, photoURL } = response.user;
        await handleUserStatus(uid);
        dispatch(setUserProfile({ uid, displayName, photoURL }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};

export default Login;
