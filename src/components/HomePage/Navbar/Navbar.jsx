import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../Redux/users/user.types";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const { auth, token, loading, error } = useSelector(
    (state) => state.userReducer
  );

  const nav = useNavigate();

  const handleClickButtonLogin = () => {
    nav("/login");
  };
  const handleClickButtonSignUp = () => {
    nav("/register");
  };

  const handleClickButtonAllNotes = () => {
    nav("/notes");
  };
  return (
    <>
      <Box
        position={"fixed"}
        top={0}
        zIndex={1000}
        w={"100%"}
        boxShadow={
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        }
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box
            fontWeight={"bold"}
            cursor={"pointer"}
            onClick={() => {
              nav("/");
            }}
          >
            Notes App
          </Box>

          <Flex alignItems={"center"}>
            <Stack alignItems={"center"} direction={"row"} spacing={7}>
              <Button
                backgroundColor={"#dfaf53"}
                onClick={handleClickButtonLogin}
                display={auth == true? "none" : "block"}
              >
                Login
              </Button>

              <Button
                backgroundColor={"#dfaf53"}
                onClick={handleClickButtonSignUp}
                display={auth == true ? "none" : "block"}
              >
                Sign Up
              </Button>

              <Button
                backgroundColor={"#dfaf53"}
                onClick={handleClickButtonAllNotes}
                display={auth == true ? "block" : "none"}
              >
                All Notes
              </Button>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  border={"2px solid #dfaf53"}
                  padding={2}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://avatars.githubusercontent.com/u/64334421?s=400&u=0b5fc7c1e8dfa22352a1874c39f8c93e4b470e3b&v=4"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.githubusercontent.com/u/64334421?s=400&u=0b5fc7c1e8dfa22352a1874c39f8c93e4b470e3b&v=4"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Mohammed Raida</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{
                      dispatch({type:LOGOUT})
                  }}>
                  Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
