'use client';

import { useAuth } from "@/hooks/useAuth";
import { deletePost } from "@/utils/firebase";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

const DetailsButtons = ({ userId, postId }) => {
  const { user } = useAuth();

  return (
    (user && user.uid === userId) &&
    <Box textAlign='right'>
      <Button as={Link} href={`/edit/${postId}`} colorScheme='yellow' minW='95px' mr='4'>Edit</Button>
      <Button onClick={() => deletePost(postId)} colorScheme='red' minW='95px'>Delete</Button>
    </Box>

  )
}

export default DetailsButtons