import { Button, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  return (
    <VStack p="10" justify="center">
      <Heading as="h1" justify="center" size="2xl">
        Ticketing Done Right
      </Heading>
      <Divider my="5" bg="black" />
      <NavLink justify="center" to={"/gallery"}>
        <Button colorScheme="green" size="lg">
          Browse Our Events
        </Button>
      </NavLink>
      <Text p="10">
        <NavLink justify="center" to={"/about-us"}>
          <Text colorScheme="green" size="lg">
            About Us
          </Text>
        </NavLink>
      </Text>
    </VStack>
  );
}
