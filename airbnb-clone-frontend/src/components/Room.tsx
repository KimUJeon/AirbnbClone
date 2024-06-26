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
import { FaCamera, FaRegHeart, FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
  pk: number;
  isOwner: boolean;
}

export default function Room({
  pk,
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
  isOwner,
}: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  const navigate = useNavigate();
  const onCameraClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/rooms/${pk}/photos`);
  };
  return (
    <Link to={`/rooms/${pk}`}>
      <VStack alignItems={"flex-start"}>
        <Box position={"relative"} overflow={"hidden"} mb={"3"} rounded={"2xl"}>
          <Image objectFit={"cover"} minHeight={"280"} src={imageUrl} />
          <Button
            variant={"unstyled"}
            position={"absolute"}
            top={0}
            right={0}
            onClick={onCameraClick}
            color={"white"}
          >
            {isOwner ? (
              <FaCamera size={"20px"} />
            ) : (
              <FaRegHeart size={"20px"} />
            )}
          </Button>
        </Box>
        <Box>
          <Grid
            gap={"2"}
            templateColumns={"7fr 1fr"}
            justifyContent={"space-between"}
          >
            <Text display={"block"} as={"b"} noOfLines={1} fontSize={"md"}>
              {name}
            </Text>
            <HStack
              _hover={{
                color: "red.500",
              }}
              alignItems={"center"}
              spacing={1}
            >
              <FaStar size={"15"} />
              <Text>{rating}</Text>
            </HStack>
          </Grid>
          <Text fontSize={"xs"} color={gray}>
            {city}, {country}
          </Text>
        </Box>
        <Text fontSize={"xs"} color={gray}>
          <Text as={"b"}> ${price} </Text> / night
        </Text>
      </VStack>
    </Link>
  );
}
