import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box overflow={"hidden"} mb={"3"} rounded={"2xl"}>
        <Image
          minHeight={"280"}
          src={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=1440&im_q=highq"
          }
        />
        <Button
          variant={"unstyled"}
          position={"absolute"}
          top={0}
          right={0}
          color={"white"}
        >
          <FaRegHeart size={"20px"} />
        </Button>
      </Box>
      <Box>
        <Grid
          gap={"2"}
          // templateColumns={"6fr 1fr"}
          justifyContent={"space-between"}
        >
          <Text display={"block"} as={"b"} noOfLines={1} fontSize={"md"}>
            abcdefghijklmnopqrstuvwxyzabcdefghijklmnopasdf
            sdfsdfasdfasfsdafadsfasdfasdfasfs
          </Text>
          <HStack spacing={1}>
            <FaStar size={"15"} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"xs"} color={gray}>
          Seoul, S. Korea
        </Text>
      </Box>
      <Text fontSize={"xs"} color={gray}>
        <Text as={"b"}> $72 </Text> / night
      </Text>
    </VStack>
  );
}
