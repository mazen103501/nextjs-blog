import { useToast } from '@chakra-ui/react';
import { FirebaseError } from 'firebase/app';

const useFirebaseErrorHandler = () => {
  const toast = useToast();

  const handleError = (error) => {
    const errorMessage = error instanceof FirebaseError ? error.message : 'An unknown error occurred';

    toast({
      title: 'Error',
      description: errorMessage,
      status: 'error',
      duration: 6000, // 6 seconds
      isClosable: true,
    });
  };

  return handleError;
};

export default useFirebaseErrorHandler;