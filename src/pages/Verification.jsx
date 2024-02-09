import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

export default function Verification() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Verified",
      description: "Your ticket has been verified.",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      // icon: "check",
    });
  };

  return (
    <Box p="10">
      <Heading as="h1">Verification</Heading>
      <Divider my="5" bg="black" />
      <Flex>
        <Image src="/img/IMG_0300.png" />
        <Spacer />
        <Box>
          <Box p="10" rounded="lg" bg="white">
            <Heading as="h2" size="md">
              Ticket Details
            </Heading>
            <Box my="10">
              <HStack justify="space-between">
                <Text my="5">Price:</Text>
                <Text my="5">$100</Text>
              </HStack>
              <HStack justify="space-between">
                <Text my="5">Date:</Text>
                <Text my="5">2023-11-21</Text>
              </HStack>
              <HStack justify="space-between">
                <Text as="b" my="5">
                  Event:
                </Text>
                <Text as="b" my="5">
                  Kitchener Club Entry
                </Text>
              </HStack>
            </Box>
            <Button
              rightIcon={<CheckCircleIcon />}
              colorScheme="green"
              onClick={showToast}
            >
              Verify Ticket
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
