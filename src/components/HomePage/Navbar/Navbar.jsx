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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const nav = useNavigate();
    return (
        <>
            <Box 
                position={"fixed"}
                zIndex={1000}
                w={"100%"}
                boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"}
                bg={useColorModeValue('gray.100', 'gray.900')}
                px={4}
            >

                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <Box
                        fontWeight={"bold"}
                        cursor={"pointer"}
                        onClick={() => {
                            nav("/")
                        }}
                    >
                        Note App
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack alignItems={"center"} direction={'row'} spacing={7}>

                            <Button backgroundColor={"#dfaf53"} onClick={() => {
                                nav("/login")
                            }}>
                                Login
                            </Button>

                            <Button backgroundColor={"#dfaf53"} onClick={() => {
                                nav("/register")
                            }} >
                                SignUp
                            </Button>

                            <Button backgroundColor={"#dfaf53"} onClick={() => {
                                nav("/notes")
                            }}>
                                All Notes
                            </Button>

                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    border={"2px solid #dfaf53"}
                                    padding={2}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}