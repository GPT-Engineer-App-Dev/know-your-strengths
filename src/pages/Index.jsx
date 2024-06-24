import { Container, Text, VStack, Button, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="pink.50">
      <VStack spacing={4}>
        <Image src="/images/heart.png" alt="Heart Illustration" boxSize="150px" />
        <Text fontSize="2xl" color="red.500">Welcome to the Heart-Inspired Page</Text>
        <Text color="gray.700">This is a placeholder text that describes the purpose of the page. Feel the love and enjoy the vibrant colors!</Text>
        <Button colorScheme="red" size="lg">Call to Action</Button>
      </VStack>
    </Container>
  );
};

export default Index;