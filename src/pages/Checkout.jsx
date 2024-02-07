import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

import { ArrowForwardIcon, EditIcon } from "@chakra-ui/icons";

export default function Checkout() {
  const events = useLoaderData();

  return (
    <Box p="10">
      <Heading as="h1">Checkout</Heading>
      <Divider my="5" bg="black" />
      <Flex>
        <SimpleGrid colums={1} spacing={10}>
          {events &&
            events.map((event) => (
              <Card
                key={event.id}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={event.img}
                  alt={event.title}
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{event.title}</Heading>

                    <Text py="2">Event in {event.location}</Text>
                  </CardBody>

                  <CardFooter>
                    <Button
                      leftIcon={<EditIcon />}
                      variant="solid"
                      colorScheme="blue"
                    >
                      2 Tickets
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            ))}
        </SimpleGrid>
        <Spacer />
        <Box>
          <Box p="10" rounded="lg" bg="white">
            <Heading as="h2" size="md">
              Order Summary
            </Heading>
            <Box my="10">
              <Text my="5">Subtotal: $100</Text>
              <Text my="5">Tax: $20</Text>
              <Text my="5">Total: $120</Text>
            </Box>
            <Button rightIcon={<ArrowForwardIcon />} colorScheme="green">
              Continue To Payment
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

{
  /* <Card key={event.id} bg="gray.200" w="400px">
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
</Card>; */
}
