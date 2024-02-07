import { Box, Divider, Heading, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Box p="10">
      <Heading as="h1">About You</Heading>
      <Divider my="5" bg="black" />
      <Text>
        You believe in tickets. Useful tickets. Tickets like: Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        And even more: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </Text>
      <Box>
        <Box p="10" rounded="lg" bg="white">
          <Heading as="h2" size="md">
            No Upcoming Events
          </Heading>
        </Box>
      </Box>
    </Box>
  );
}
