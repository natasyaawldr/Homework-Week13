import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
    <Card
      key={id}
      my={4}
      p={4}
      cursor="pointer"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image
        w="full"
        h={40}
        objectFit="cover"
        src={`http://localhost:8000/${image}`}
        alt={title}
        mb={4}
      />
      <VStack spacing={2}>
        <Heading as="h2" size="md">
          {title} ({year})
        </Heading>
        <Text>{author}</Text>
        <Text fontSize="sm" color="gray.600">
          Publisher: {publisher}
        </Text>
      </VStack>
    </Card>
    </Link>
  );
}
