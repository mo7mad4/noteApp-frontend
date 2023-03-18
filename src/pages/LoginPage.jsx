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

const LoginPage = () => {
  const nav = useNavigate()
    const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    if(auth){
      nav("/notes")
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const handleLogin = () => {
      dispatch(getUser({email,password}))
    }
    // if(loading) return <h1 style={{marginTop:"80px"}}>loading...</h1>
    // if(error) return <h1 style={{marginTop:"80px"}}>error</h1>
  return (
    <Flex  padding={4}  w="50%">
      <Image   src={loginImg}></Image>
      <VStack w={"100%"} >

      <Flex
      minH={'100%'}
      // minW={'50%'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.60', 'gray.800')}> 
  

      <Stack spacing={4} mx={'auto'}  px={50} >
        <Stack align={'center'} >
          <Heading fontSize={'3xl'}>Login with Notes App</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={10}
          width={"lg"}
          >
          <Stack spacing={4} >

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input  onChange={(e)=>setEmail(e.target.value)} type="email"  />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input  onChange={(e)=>setPassword(e.target.value)} type="password" />
            </FormControl>

            <Stack spacing={4}>

              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>

              <Button
              onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
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
export default LoginPage;
