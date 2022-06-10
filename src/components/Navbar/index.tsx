import {
  Box,
  Button,
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
  Show,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Navlink from "./Navlink";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Box>
        <Flex alignItems={"center"}>
          <Text>Logo</Text>
          <Spacer />
          <Hide below="sm">
            <Navlink />
            <Spacer />
            <Button>Login</Button>
          </Hide>
          <Show below="sm">
            <IconButton ref={btnRef} aria-label="Open menu" onClick={onOpen} />
          </Show>
        </Flex>
      </Box>
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
            <Button mt={4}>Login</Button>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
