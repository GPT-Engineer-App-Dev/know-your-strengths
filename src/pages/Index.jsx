import { Container, Text, VStack, Button, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, teal.300, blue.500, purple.600)">
      <VStack spacing={4}>
        <Image src="/images/terminal.png" alt="Terminal Illustration" boxSize="150px" />
        <Text fontSize="2xl" color="white">Welcome to the Terminal-Inspired Page</Text>
        <Text color="gray.200">This is a placeholder text that describes the purpose of the page. Feel the tech vibe and enjoy the gradient colors!</Text>
        <Button colorScheme="teal" size="lg">Call to Action</Button>
      </VStack>
    </Container>
  );
};

export default Index;