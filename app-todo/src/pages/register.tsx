import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const Register = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        width="2xl"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading
          alignItems="center"
          display="flex"
          justifyContent="center"
          mb={6}
        >
          Register
        </Heading>
        <form>
          <VStack spacing={3}>
            <Input placeholder="username" type="text" variant="filled" />
            <Input
              placeholder="email"
              type="email"
              variant="filled"
            />
            <Input placeholder="********" type="password" variant="filled" />
            <Button width="full" colorScheme="teal" mt={2}>
              Log In
            </Button>
            <Text mb={8}>
              have an account? <Link href="/login">Login</Link>
            </Text>
          </VStack>
        </form>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb={0}>
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Register;
