import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import React from "react";
import { useForm } from "react-hook-form";
import { ISignup } from "../type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupUser } from "../api";
import { AxiosError } from "axios";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignUpModalProps) {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignup>();

  const toast = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: signupUser,
    onMutate: () => {
      console.log("start mutate");
    },
    onError: (error: AxiosError) => {
      console.log("error ocuured");
      console.log(error.response?.data);
      const error_message = Object.values(error.response?.data as Object)[0];
      console.log(error_message);

      toast({
        status: "error",
        title: "Sign Up Failed",
        description: error_message,
      });
    },
    onSuccess: () => {
      toast({
        status: "success",
        title: "Sign Up Successed!",
        description: "Nice to meet you! 😎",
      });
      queryClient.refetchQueries({ queryKey: ["me"] });
      onClose();
    },
  });

  function onSignUpSubmit({ name, username, email, password }: ISignup) {
    mutation.mutate({ name, username, email, password });
    reset();
  }

  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleSubmit(onSignUpSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.500"}>
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input
                variant={"filled"}
                placeholder={"Email"}
                required
                isInvalid={Boolean(errors.email?.message)}
                {...register("email", {
                  required: "email is necesasry!",
                  minLength: {
                    value: 5,
                    message: "email must be at least 5 characters",
                  },
                  pattern: {
                    value: /\w+@\w+\.\w+(\.\w+)?$/,
                    message: "please enter a valid email address",
                  },
                })}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.500"}>
                    <FaUserSecret />
                  </Box>
                }
              />
              <Input
                variant={"filled"}
                placeholder={"Name"}
                required
                isInvalid={Boolean(errors.name?.message)}
                {...register("name", {
                  required: "MUST!",
                  minLength: {
                    value: 3,
                    message: "name must be at least 4 characters.",
                  },
                  pattern: {
                    value: /^[A-za-z0-9가-힣]{3,20}$/,
                    message: "only possible to english, korean, number",
                  },
                })}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.500"}>
                    <FaUserNinja />
                  </Box>
                }
              />
              <Input
                variant={"filled"}
                placeholder={"Username"}
                required
                isInvalid={Boolean(errors.username?.message)}
                {...register("username", {
                  required: "Need Username!",
                  minLength: {
                    value: 3,
                    message: "username must be at least 4 characters",
                  },
                  pattern: {
                    value: /^[A-za-z0-9]{3,20}$/,
                    message: "only possible to english, korean, number",
                  },
                })}
              />
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
                required
                isInvalid={Boolean(errors.password?.message)}
                {...register("password", {
                  required: "password is necessary!",
                  minLength: {
                    value: 8,
                    message: "password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "password must be less than 16 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                    message:
                      "please enter a valid password, min 8 max 8 english+number+characters",
                  },
                })}
              />
            </InputGroup>
          </VStack>
          <Text fontSize={"sm"} color={"red.500"}>
            {errors.name?.message}
            {errors.username?.message}
            {errors.email?.message}
            {errors.password?.message}
          </Text>

          <Button
            mt={4}
            w="100%"
            colorScheme="red"
            type={"submit"}
            isLoading={mutation.isPending}
          >
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
