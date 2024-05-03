import { Grid } from "@chakra-ui/react";
import RoomSkeletion from "../components/RoomSkeleton";
import Room from "../components/Room";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";

interface IPhotos {
  pk: string;
  file: string;
  description: string;
}

interface IRoom {
  pk: number;
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
  is_owner: boolean;
  photos: IPhotos[];
}

export default function Home() {
  const { isLoading, data } = useQuery<IRoom[]>({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  return (
    <Grid
      mt={10}
      px={{
        sm: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr, 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      {isLoading ? (
        <>
          <RoomSkeletion />
          <RoomSkeletion />
          <RoomSkeletion />
        </>
      ) : null}
      {data?.map((room) => (
        <Room
          key={room.pk}
          imageUrl={room.photos[0].file}
          name={room.name}
          rating={room.rating}
          city={room.city}
          country={room.country}
          price={room.price}
        />
      ))}
    </Grid>
  );
}
