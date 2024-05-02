import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
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
      {[1, 2, 3, 4, 5, 6, 7, 8, 2, 2, 3, 3, 3, 4, 5, 6, 6, 7].map((index) => (
        <Room key={index} />
      ))}
      <Box>
        <Skeleton mb={"7"} rounded={"2xl"} height={"280"} />
        <SkeletonText w={"50%"} noOfLines={3} />
      </Box>
    </Grid>
  );
}
