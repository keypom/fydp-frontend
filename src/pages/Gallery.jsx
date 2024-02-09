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
import { NavLink, useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

//props validation
Gallery.propTypes = {
  isSecondary: PropTypes.bool,
};

export default function Gallery(props) {
  const isSecondary = props.isSecondary || false;
  const events = useLoaderData();

  return (
    <Box p="10">
      {isSecondary ? (
        <Heading as="h1"> Secondary Market</Heading>
      ) : (
        <Heading as="h1"> Gallery</Heading>
      )}
      <Divider my="5" bg="black" />
      <SimpleGrid spacing={10} minChildWidth="300px">
        {events &&
          events.map((event) => (
            <Card key={event.id} bg="white">
              <NavLink to={event.id}>
                <CardHeader>
                  <Image src={event.img} alt={event.title} />
                </CardHeader>
                <CardBody color="black">
                  <Heading as="h2" size="sm">
                    {event.title}
                  </Heading>
                  <Text color="green">${event.price}</Text>
                  <Text>Event on {event.date}</Text>
                </CardBody>
                <CardFooter>
                  <Text>Event in {event.location}</Text>
                </CardFooter>
              </NavLink>
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
