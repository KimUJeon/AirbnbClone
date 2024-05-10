import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoom, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../type";
import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>({
    queryKey: [`rooms`, roomPk],
    queryFn: getRoom,
  });
  const { data: reviewsData, isLoading: isReviewsLoading } = useQuery<
    IReview[]
  >({
    queryKey: [`rooms`, roomPk, `reviews`],
    queryFn: getRoomReviews,
  });

  return (
    <Box
      mt={10}
      px={{
        sm: 10,
        lg: 40,
      }}
    >
      <Skeleton height={"43px"} width={"50%"} isLoaded={!isLoading}>
        <Heading> {data?.name} </Heading>
      </Skeleton>
      <Grid
        marginTop={8}
        rounded={"xl"}
        overflow={"hidden"}
        gap={2}
        height={"60vh"}
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 1fr)"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h={"100%"} w={"100%"}>
              <Image
                objectFit={"cover"}
                w={"100%"}
                h={"100%"}
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack justifyContent={"space-between"} mt={"10"} width={"40%"}>
        <VStack alignItems={"flex-start"}>
          <Skeleton isLoaded={!isLoading} height={"30px"}>
            <Heading fontSize={"2xl"}>
              House hosted by {data?.owner.name}
            </Heading>
            <HStack justifyContent={"flex-start"} w={"100%"}>
              <Text>
                {data?.toilets} toilet{data?.toilets === 1 ? "" : "s"}
              </Text>
              <Text> · </Text>
              <Text>
                {data?.rooms} room{data?.rooms === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar name={data?.owner.name} size={"xl"} src={data?.owner.avatar} />
      </HStack>
      <Box mt={"10"}>
        <Heading mb={5} fontSize={"2xl"}>
          <HStack>
            <FaStar /> <Text> {data?.rating} </Text>·
            <Text>
              {reviewsData?.length} review{reviewsData?.length === 1 ? "" : "s"}
            </Text>
          </HStack>
        </Heading>
        <Container mt={15} maxW={"container.lg"} marginX={"none"}>
          <Grid gap={10} templateColumns={"1fr 1fr"}>
            {reviewsData?.map((review, index) => (
              <VStack alignItems={"flex-start"} key={index}>
                <HStack spacing={1}>
                  <Avatar
                    name={review.user.name}
                    src={review.user.avatar}
                    size={"md"}
                  />
                  <VStack spacing={0.5} alignItems={"flex-start"}>
                    <Heading fontSize={"md"}>{review.user.name}</Heading>
                    <HStack>
                      {" "}
                      <FaStar size={"12px"} /> {review.rating}
                    </HStack>
                  </VStack>
                </HStack>
                <Text>{review.payload}</Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}