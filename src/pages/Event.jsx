import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

import { Form, useLoaderData, useParams } from "react-router-dom";
import PropTypes from "prop-types";

//props validation
Event.propTypes = {
  isSecondary: PropTypes.bool,
};

export default function Event(props) {
  const isSecondary = props.isSecondary || false;
  const events = useLoaderData();

  const params = useParams();
  const eventID = params.eventID;

  //check if the eventID is valid
  const event = events.find((event) => event.id === eventID);

  //modal information
  const { isOpen, onOpen, onClose } = useDisclosure();

  //email input
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  if (!event) {
    return (
      <Box p="10">
        <Heading as="h1">Event not found</Heading>
        <Divider my="5" bg="black" />
        <Text>Sorry, the event you are looking for does not exist.</Text>
      </Box>
    );
  }

  return (
    <Box p="10">
      {isSecondary ? (
        <Heading as="h1"> Secondary event ticket</Heading>
      ) : (
        <Heading as="h1"> Primary event listing</Heading>
      )}
      <Divider my="5" bg="black" />
      <Text>Details about the Event:</Text>
      <Text>Event ID: {eventID}</Text>
      <Card key={event.id} bg="white">
        <CardHeader>
          <Image src={event.img} alt={event.title} />
        </CardHeader>

        <CardBody color="black">
          <Heading as="h2" size="sm">
            {event.title}
          </Heading>
          <Text color="green">${event.price}</Text>
          <Text>Event on {event.date}</Text>
          {!isSecondary ? (
            <Text>{event.tickets} Tickets available</Text>
          ) : (
            <> </>
          )}
          <Text> {event.description} </Text>
        </CardBody>

        <CardFooter>
          <Text>Event in {event.location}</Text>
        </CardFooter>

        <Button onClick={onOpen} colorScheme="green" variant="solid">
          Buy Now!
        </Button>
      </Card>
      <Modal
        onClose={onClose}
        closeOnOverlayClick={false}
        size={"xl"}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Purchase Modal </ModalHeader>
          <Text>Event on {event.date}</Text>
          <Text>Event in {event.location}</Text>
          <ModalCloseButton />
          <Form method="post" action="/test">
            {!isSecondary ? (
              <>
                <ModalBody>Select number of tickets</ModalBody>
                <FormLabel>Ticket Amount</FormLabel>
                <NumberInput max={50} min={1}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </>
            ) : (
              <> </>
            )}

            <FormControl isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
              {!isError ? (
                <FormHelperText>
                  No account will be created, ensure your email is correct
                </FormHelperText>
              ) : (
                <FormErrorMessage> Email is required. </FormErrorMessage>
              )}
            </FormControl>

            <Button type="submit" colorScheme="green">
              Proceed to checkout
            </Button>
          </Form>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
