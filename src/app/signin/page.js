"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link';
import useFirebaseErrorHandler from '@/hooks/useFirebaseErrorHandler';


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const router = useRouter();
  const errorMessage = useFirebaseErrorHandler();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signin(email, password);
      router.push('/');
    } catch (error) {
      errorMessage(error);
    }
  };
  return (
    <Container as='form' onSubmit={handleSubmit} maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={{ base: 'xl', xl: 'md' }}>Log in to your account</Heading>
            <Text color="fg.muted">
              Don't have an account? <Link href="/signup" ><ChakraLink color='#319795'>Sign up</ChakraLink></Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg.surface' }}
          boxShadow={{ base: 'none', sm: 'xs' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} id="email" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input onChange={(e) => setPassword(e.target.value)} id="password" type="password" />
                <Text fontSize="sm" color="fg.muted">*Must be at least 6 characters long</Text>
              </FormControl>
            </Stack>
            <Button background='#319795' color='white' _hover='none' type='submit'>Sign in</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default Signin;