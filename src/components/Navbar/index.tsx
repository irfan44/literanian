import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Hide,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { auth } from "api/firebase";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { clearUserProfile } from "redux/reducer/userProfileReducer";
import { clearUserStatus } from "redux/reducer/userStatusReducer";
import Navlink from "./Navlink";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const { displayName, photoURL, uid } = useAppSelector(
    (state) => state.userProfile
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUserProfile());
        dispatch(clearUserStatus());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const profileButton = () => {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          colorScheme="gray"
        >
          <HStack>
            <Avatar
              name={displayName ? displayName : "Default"}
              size="xs"
              src={photoURL !== null ? photoURL : ""}
            />
            <Text>Profil</Text>
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleLogout}>Keluar</MenuItem>
        </MenuList>
      </Menu>
    );
  };

  return (
    <Box bg="#f6f8fd">
      <Container
        maxW="7xl"
        py="6"
        fontWeight={600}
        color={"gray.700"}
        letterSpacing={"normal"}
      >
        <Flex alignItems={"center"}>
          <Text>Logo</Text>
          <Spacer />
          <Hide below="sm">
            <Navlink />
            <Spacer />
            {uid ? (
              profileButton()
            ) : (
              <Button onClick={handleLogin} bgColor={"#2447F9"}>
                Masuk
              </Button>
            )}
          </Hide>
          <Show below="sm">
            <IconButton
              icon={<HamburgerIcon />}
              ref={btnRef}
              aria-label="Open menu"
              onClick={onOpen}
              bgColor={"#2447F9"}
            />
          </Show>
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text>Logo</Text>
          </DrawerHeader>
          <DrawerBody>
            <Navlink />
            <Box mt="4">
              {uid ? (
                profileButton()
              ) : (
                <Button onClick={handleLogin} bgColor={"#2447F9"}>
                  Masuk
                </Button>
              )}
            </Box>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
