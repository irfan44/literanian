import {
  Avatar,
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
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";
import Navlink from "./Navlink";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const { displayName, photoURL, uid } = useAppSelector(
    (state) => state.userProfile
  );
  const { points } = useAppSelector((state) => state.userStatus);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const profileButton = () => {
    return (
      <Menu>
        <MenuButton>
          <Flex alignItems="center">
            <Avatar
              name={displayName ? displayName : "Default"}
              size="sm"
              src={photoURL !== null ? photoURL : ""}
            />
            <Text fontSize="sm">{displayName}</Text>
            <Text>{points}</Text>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>Hello</MenuItem>
        </MenuList>
      </Menu>
    );
  };

  return (
    <>
      <Container maxW="6xl" py="4">
        <Flex alignItems={"center"}>
          <Text>Logo</Text>
          <Spacer />
          <Hide below="sm">
            <Navlink />
            <Spacer />
            {uid ? (
              profileButton()
            ) : (
              <Button onClick={handleLogin}>Login</Button>
            )}
          </Hide>
          <Show below="sm">
            <IconButton ref={btnRef} aria-label="Open menu" onClick={onOpen} />
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
            <Button onClick={handleLogin} mt="4">
              Login
            </Button>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
