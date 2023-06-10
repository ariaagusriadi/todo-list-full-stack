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

const Login = () => {
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
          Login
        </Heading>
        <form>
          <VStack spacing={3}>
            <Input placeholder="username" type="text" variant="filled" />
            <Input placeholder="*******" type="password" variant="filled" />
            <Button width="full" colorScheme="teal" mt={2}>
              Login
            </Button>
            <Text mb={8}>
              Dont have an account? <Link href="/register">Register</Link>
            </Text>
          </VStack>
        </form>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb={0}>
            Enable Dark Mode ?
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

export default Login;
