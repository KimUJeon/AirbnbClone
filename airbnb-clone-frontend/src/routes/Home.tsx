import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={40}
      columnGap={4}
      rowGap={8}
      templateColumns={"repeat(5, 1fr)"}
    >
      <Box>
        <VStack spacing={"0.5"} alignItems={"flex-start"}>
          <Box overflow={"hidden"} mb={"3"} rounded={"3xl"}>
            <Image
              h={"300"}
              src={
                "https://www.freecodecamp.org/korean/news/content/images/size/w2000/2023/03/image-45-1.png"
              }
            />
          </Box>
          <Box>
            <Grid gap={"2"} templateColumns={"4fr 1fr"}>
              <Text as={"b"} noOfLines={1} fontSize={"md"}>
                abcdefghijklmnopqrstuvwxyzabcdefghijklmnopasdf
                sdfsdfasdfasfsdafadsfasdfasdfasfs
              </Text>
              <HStack spacing={1}>
                <FaStar size={"12"} />
                <Text>5.0</Text>
              </HStack>
            </Grid>
            <Text fontSize={"xs"} color={"gray.600"}>
              Seoul, S. Korea
            </Text>
          </Box>
          <Text fontSize={"xs"} color={"gray.600"}>
            <Text as={"b"}> $72 </Text> / night
          </Text>
        </VStack>
      </Box>
    </Grid>
  );
}
