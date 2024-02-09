import {
  Flex,
  HStack,
  Heading,
  Icon,
  Spacer,
  Box,
  // Button,
  // Avatar,
  // AvatarBadge,
  // Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  CheckIcon,
  DragHandleIcon,
  InfoOutlineIcon,
  RepeatClockIcon,
} from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" gap="10px">
      <Heading as="h1" color={"green"}>
        <NavLink to=""> Ticketing Site </NavLink>
      </Heading>
      <Spacer />
      <HStack spacing="20px" p="10px">
        <Box>
          <Icon as={DragHandleIcon} color="black" marginRight="10px" />
          <NavLink to="gallery"> Events </NavLink>
        </Box>
        <Box>
          <Icon as={RepeatClockIcon} color="black" marginRight="10px" />
          <NavLink to="secondary-market">Secondary Market</NavLink>
        </Box>
        <Box>
          <Icon as={InfoOutlineIcon} color="black" marginRight="10px" />
          <NavLink to="about-us"> About us </NavLink>
        </Box>
        <Box>
          <Icon as={CheckIcon} color="black" marginRight="10px" />
          <NavLink to="verification"> Verification </NavLink>
        </Box>

        {/* <Box>
          <NavLink to="checkout">
            <Button colorScheme="green" variant="solid">
              Checkout
            </Button>
          </NavLink>
        </Box> */}
        {/* 
        <Box>
          <NavLink to="create">
            <Button colorScheme="green" variant="solid">
              Create Event
            </Button>
          </NavLink>
        </Box> */}

        {/* <Box>
          <NavLink to="profile">
            <Avatar name="tester" bg="green" src="/img/IMG_0002.jpg" alt="pea">
              <AvatarBadge width="1.3em" bg="teal.500">
                <Text fontSize="xs" color="white">
                  3
                </Text>
              </AvatarBadge>
            </Avatar>
          </NavLink>
        </Box> */}
      </HStack>
    </Flex>
  );
}
