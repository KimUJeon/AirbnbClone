import ProtectedPage from "../components/ProtectedPage";
import HostOnlyPage from "../components/HostOnlyPage";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FaBed, FaDollarSign, FaToilet } from "react-icons/fa";

export default function UploadRoom() {
  HostOnlyPage();
  return (
    <ProtectedPage>
      <Box
        pb={40}
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
      >
        <Container>
          <Heading textAlign={"center"}>Upload Room</Heading>
          <VStack spacing={5} as={"form"} mt={5}></VStack>
          <FormControl>
            <FormLabel> Name </FormLabel>
            <Input required type={"text"}></Input>
            <FormHelperText> Write the name of your room</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel> Country </FormLabel>
            <Input required type={"text"}></Input>
          </FormControl>
          <FormControl>
            <FormLabel> City </FormLabel>
            <Input required type={"text"}></Input>
          </FormControl>
          <FormControl>
            <FormLabel> Address </FormLabel>
            <Input required type={"text"}></Input>
          </FormControl>
          <FormControl>
            <FormLabel> Price </FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaDollarSign />} />
              <Input type={"number"} min={0} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel> Rooms </FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaBed />} />
              <Input type={"number"} min={0} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel> Toilets </FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaToilet />} />
              <Input type={"number"} min={0} />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel> Description </FormLabel>
            <Textarea />
          </FormControl>
          <FormControl>
            <Checkbox> Pet Friendy? </Checkbox>
          </FormControl>
          <FormControl>
            <FormLabel>Kind of room</FormLabel>
            <Select placeholder={"Choose a kind"}>
              <option value={"entire_place"}>Entire Place</option>
              <option value={"private_room"}>Private Room</option>
              <option value={"shared_room"}>Shared Room</option>
            </Select>
            <FormHelperText> What kind of room?</FormHelperText>
          </FormControl>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
