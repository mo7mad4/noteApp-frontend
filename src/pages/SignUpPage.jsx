import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import loginImg from "../assets/Images/loginPageImage.png";
import { getUser } from "../Redux/users/user.actions";
import axios from "axios";

const SignUpPage = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async() => {
      let data = await axios.post("http://localhost:4000/user/register",{
        name,email,password
      })
      let {message,status} = data.data
      if(status == 1){
        alert(message)
        nav("/login")
      }else{
        alert(message)
      }
  }

  return (
    <Flex padding={0} w="50%">
      <Image src={loginImg}></Image>
      <VStack w={"100%"}>
        <Flex
          minH={"100%"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.60", "gray.800")}
        >
          <Stack spacing={4} mx={"auto"} px={50}>
            <Stack align={"center"}>
              <Heading fontSize={"3xl"}>Sign UP with Notes App</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>

            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={10}
              width={"lg"}
            >
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input onClick={(e) => setName(e.target.value)} type="text" />
                </FormControl>

                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onClick={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                </FormControl>

                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    onClick={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </FormControl>

                <Stack spacing={4}>
                  {/*   
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack> */}

                  <Button
                    onClick={handleSignUp}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
};
export default SignUpPage;
