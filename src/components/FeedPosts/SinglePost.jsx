
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Text } from '@chakra-ui/react'; // Import other necessary Chakra UI components as needed

const SinglePost = () => {
  // Access the postId parameter from the URL
  const { postId } = useParams();

  // Fetch the data for the specific post using the postId
  // Replace this with your actual logic for fetching a single post
  const post = {}; // Fetch the post data using postId

  if (!post) {
    return (
      <Container maxW="container.sm" py={10}>
        <Text fontSize="lg" fontWeight="bold" color="red.400">
          Post not found!
        </Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.sm" py={10}>
      {/* Render the content of the single post */}
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {post.title}
      </Text>
      <Text fontSize="md" mb={4}>
        {post.description}
      </Text>
      {/* Add other post details as needed */}
    </Container>
  );
};

export default SinglePost;
