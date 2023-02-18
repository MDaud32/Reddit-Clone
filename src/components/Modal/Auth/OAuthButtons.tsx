import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" gap={2} width="100%" mb={4}>
      <Button
        variant="oauth"
        gap={2}
        isLoading={loading}
        onClick={() => signInWithGoogle()}>
        <Image
          src="/images/googlelogo.png"
          alt="google logo"
          width="20px"
          height="20px"
        />
        Continue with Google
      </Button>
      <Button variant="oauth">Some Other Provider</Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
