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
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const profileButton = () => {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
              <Button onClick={handleLogin}>Masuk</Button>
            )}
          </Hide>
          <Show below="sm">
            <IconButton
              icon={<HamburgerIcon />}
              ref={btnRef}
              aria-label="Open menu"
              onClick={onOpen}
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
                <Button onClick={handleLogin}>Masuk</Button>
              )}
            </Box>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
