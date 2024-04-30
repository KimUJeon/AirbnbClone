import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import React from "react";
import SignupModal from "./SignUpModal";

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();

  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();

  return (
    <HStack
      justifyContent="space-between"
      py={"5"}
      px={"10"}
      borderBottomWidth={1}
    >
      <Box color="red.500">
        <FaAirbnb size={"48"} />
      </Box>
      <HStack spacing={2}>
        <IconButton
          variant={"ghost"}
          aria-label="Toggle Dark Mode"
          icon={<FaMoon />}
        />
        <Button onClick={onLoginOpen}> Log In </Button>
        <Button onClick={onSignUpOpen} colorScheme={"red"}>
          {" "}
          Sign Up
        </Button>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignupModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
