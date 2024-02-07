import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Container as="section" maxWidth="5xl" py="20px">
      <Box maxW="480px">
        <Form method="post" action="/test">
          <FormControl isRequired mb="40px">
            <FormLabel>Event name:</FormLabel>
            <Input type="text" name="title" />
            <FormHelperText>Enter the name of the Event</FormHelperText>
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Event description:</FormLabel>
            <Textarea placeholder="enter a description" name="description" />
          </FormControl>

          <FormControl isRequired mb="40px">
            <FormLabel>Event price:</FormLabel>
            <Textarea placeholder="enter a price" name="price" />
          </FormControl>

          <Button type="submit" colorScheme="green">
            Create Event
          </Button>
        </Form>
      </Box>
    </Container>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };
  console.log(task);

  return redirect("/gallery");
};
