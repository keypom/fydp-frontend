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
} from "@chakra-ui/react";

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

  return (
    <Container as="section" maxWidth="5xl" py="20px">
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text marginLeft="30px"> Lorem ipsum dolor s </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        {" "}
        Lorem ipsum dolor 324234234{" "}
      </Text>
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">In a box</Text>
      </Box>

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
    </Container>
  );
}
