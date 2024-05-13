import { Heading, Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { githubLogin } from "../api";
import { useQueryClient } from "@tanstack/react-query";

export default function GithubConfirm() {
  const { search } = useLocation();
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      const status = await githubLogin(code);
      if (status === 200) {
        toast({
          status: "success",
          title: "Welcome!",
          description: "Happy Happy Happy",
        });
        queryClient.refetchQueries({ queryKey: ["me"] });
        navigate("/");
      }
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <VStack justifyContent={"center"} mt={40}>
      <Heading> Processing Log In...</Heading>
      <Text> Wait for a second :) </Text>
      <Spinner mt={5} size={"lg"} />
    </VStack>
  );
}
