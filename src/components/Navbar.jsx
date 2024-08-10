"use client";
import React, { useEffect, useState } from 'react';
import { Flex, Spacer, Link as ChakraLink, Button, Heading } from '@chakra-ui/react';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

const Navbar = () => {
  const { user, signout } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Flex my={10} minWidth='max-content' alignItems='center'>
      <Heading size='md' as={Link} href='/'>
        Blogs
      </Heading>
      <Spacer />

      {isMounted && !user && (
        <>
          <Button as={Link} href='/signin' passHref mr={4} colorScheme="teal" >Sign in</Button>
          <Button as={Link} href='/signup' passHref mr={4} colorScheme="teal" >Sign up</Button>
        </>
      )}

      {isMounted && user &&
        <>
          <Button as={Link} href='/create-post' passHref mr={4} colorScheme="teal" >Create Post</Button>
          <Button colorScheme="teal" onClick={signout}>Sign out</Button>
        </>
      }
    </Flex>
  );
};

export default Navbar;