import { Button, Heading, Text, useToast } from "@chakra-ui/react";
import { auth, db } from "api/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";
import { setUserProfile } from "redux/reducer/userProfileReducer";
import { setUserStatus } from "redux/reducer/userStatusReducer";
import { checkPremium } from "utils/handleUser";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

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
      const premiumStatus = await checkPremium(uid, status.premiumExpiry);
      if (premiumStatus) {
        dispatch(setUserStatus(userStatus));
      } else {
        dispatch(
          setUserStatus({
            premium: false,
            premiumExpiry: "",
            points: status.points,
          })
        );
      }
    } else {
      await addDefaultUserStatus(uid);
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    await signInWithPopup(auth, provider)
      .then(async (response) => {
        const { uid, displayName, photoURL } = response.user;
        await handleUserStatus(uid);
        dispatch(setUserProfile({ uid, displayName, photoURL }));
      })
      .catch((error) => {
        console.log(error);
        toast({ title: error.message, status: "error" });
      })
      .finally(() => {
        setLoading(false);
        navigate("/explore");
      });
  };

  return (
    <>
      <Heading>Masuk</Heading>
      <Text>Masuk dengan google guys</Text>
      <Button isLoading={loading} onClick={handleLogin}>
        Masuk dengan Google
      </Button>
    </>
  );
};

export default Login;