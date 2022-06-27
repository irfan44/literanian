import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  useToast,
  Image,
  Flex,
  Center,
  Text,
  Link,
} from "@chakra-ui/react";
import { auth, db } from "api/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
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
    <Box as={Center} minH="100vh" bg="#f6f8fd" py="16">
      <Container
        as={Flex}
        maxW="6xl"
        alignItems="center"
        direction={{ base: "column", md: "column", lg: "row" }}
      >
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          pb={{ base: "16", md: "16", lg: "0" }}
        >
          <Image src="images/login.svg" />
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
          <Heading>Masuk</Heading>
          <Text mb="10">
            Halo, Selamat datang! Masuk dengan akun Google dan mulai membaca
            untuk mengoleksi poin!
          </Text>
          <Button
            isLoading={loading}
            onClick={handleLogin}
            bgColor={"#2447F9"}
            mb="6"
          >
            Masuk dengan Google
          </Button>
          <Flex alignItems="center">
            <ChevronLeftIcon />
            <Link as={RouterLink} to="/" display="block">
              Kembali ke beranda
            </Link>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
