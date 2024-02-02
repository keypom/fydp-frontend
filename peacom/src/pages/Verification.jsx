import { Box, Button, Heading, useToast } from "@chakra-ui/react";

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
    <Box>
      <Heading as="h1">Verification</Heading>

      <Button colorScheme="green" variant="solid" onClick={showToast}>
        Verify
      </Button>
    </Box>
  );
}
