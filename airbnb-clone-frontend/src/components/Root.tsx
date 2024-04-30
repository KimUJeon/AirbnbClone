import { Outlet } from "react-router-dom";
import { FaAirbnb, FaLock, FaMoon, FaUserNinja } from "react-icons/fa";
import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
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
          <Button onClick={onOpen}> Log In </Button>
          <Button colorScheme={"red"}> Sign Up</Button>
        </HStack>
        <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color={"gray.500"}>
                        <FaUserNinja />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder={"Username"} />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color={"gray.500"}>
                        <FaLock />
                      </Box>
                    }
                  />
                  <Input
                    type={"password"}
                    variant={"filled"}
                    placeholder={"Password"}
                  />
                </InputGroup>
              </VStack>
              <Button mt={4} colorScheme={"red"} w={"100%"}>
                Log in
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet />
    </Box>
  );
}
