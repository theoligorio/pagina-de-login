import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { UserFocus } from "phosphor-react"

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="#464D6A"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDirection="column"
        margin-bottom="8px"
        justifyContent="center"
        alignItems="center"
      >
        <UserFocus size={70} color="#f0f0f0" weight="light" />
        <Heading color="#E2E8F0">Bem Vindo</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              padding="40px"
              backgroundColor="#353B51"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="#DEE2E6" />}
                  />
                  <Input type="email" placeholder="Insira seu E-mail" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="#CED4DA"
                    children={<CFaLock color="#CED4DA" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Insira sua Senha"
                  />
                  <InputRightElement width="72px">
                    <Button height="40px" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Esconder" : "Mostrar"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right" color="white">
                  <Link>Esqueceu a Senha?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="gray"
                width="full"
              >
                Entrar
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box color="#E2E8F0">
        Não possui uma conta?{" "}
        <Link color="#E2E8F0" href="#">
          Cadastre-se
        </Link>
      </Box>
    </Flex>
  );
};

export default App;