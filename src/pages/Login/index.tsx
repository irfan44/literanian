import { Button } from "@chakra-ui/react";
import { auth } from "api/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAppDispatch } from "redux/hooks";
import { setUser } from "redux/reducer/userReducer";

const Login = () => {
  const dispatch = useAppDispatch();
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((response) => {
        const { uid, displayName, photoURL } = response.user;
        dispatch(setUser({ uid, displayName, photoURL }));
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
