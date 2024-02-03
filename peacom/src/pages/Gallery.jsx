import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Gallery() {
  const events = useLoaderData();

  return (
    <Box p="10">
      <Heading as="h1">Gallery</Heading>
      <Divider my="5" bg="black" />
      <SimpleGrid spacing={10} minChildWidth="300px">
        {events &&
          events.map((event) => (
            <Card key={event.id} bg="white">
              <CardHeader>
                <Image src={event.img} alt={event.title} />
              </CardHeader>

              <CardBody color="black">
                <Heading as="h2" size="sm">
                  {event.title}
                </Heading>
                <Text color="green">${event.price}</Text>
              </CardBody>

              <CardFooter>
                <Text>Event in {event.location}</Text>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </Box>
  );
}

export const eventsLoader = async () => {
  const res = await fetch("http://localhost:3000/events");

  return res.json();
};
