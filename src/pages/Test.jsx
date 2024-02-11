import {
  Container,
  Heading,
  Text,
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

export default function Test() {
  const boxStyles = {
    p: "10px",
    bg: "purple.200",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ":hover": {
      color: "black",
      bg: "blue.300",
    },
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  //email input
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <Container as="section" maxWidth="5xl" py="20px">
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text marginLeft="30px"> Lorem ipsum dolor s </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        Lorem ipsum dolor 32423423r
      </Text>
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">In a box</Text>
      </Box>

      <Image src="img/monalisa.png" />

      <Box sx={boxStyles}>Hello</Box>
      <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
        <Box w="150px" h="50px" flexGrow="1" bg="red">
          1
        </Box>
        <Box w="150px" h="50px" flexGrow="1" bg="blue">
          2
        </Box>
        <Box w="150px" h="50px" flexGrow="1" bg="green">
          3
        </Box>
        <Box w="150px" h="50px" flexGrow="1" bg="yellow">
          4
        </Box>
      </Flex>

      <Tabs mt="40px" p="20px">
        <TabList>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Tab 1</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Tab 2</Tab>
          <Tab _selected={{ color: "white", bg: "green.400" }}>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>Tab 1 Content</Text>
          </TabPanel>
          <TabPanel>
            <Text>Tab 2 Content</Text>
          </TabPanel>
          <TabPanel>
            <Text>Tab 3 Content</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box>
        <Button onClick={onOpen}>Trigger modal</Button>

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
            <ModalCloseButton />
            <ModalBody>Select number of tickets</ModalBody>
            <Form method="post" action="/test">
              <FormLabel>Ticket Amount</FormLabel>
              <NumberInput max={50} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>

              <FormControl isInvalid={isError}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={input}
                  onChange={handleInputChange}
                />
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
    </Container>
  );
}
