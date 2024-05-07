import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoom } from "../api";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: [`rooms`, roomPk],
    queryFn: getRoom,
  });
  console.log(data);
  return <h1> HeLL!</h1>;
}
