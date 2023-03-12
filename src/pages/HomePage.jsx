import { Box, Heading, Image } from "@chakra-ui/react"
import noteImage from '../assets/Images/noteImg.png'

const HomePage = () => {
    return (
        <Box padding={8}>
            {/* <img src={noteImage} alt="Note Image"  /> */}
            <Image src={noteImage} position={"absolute"} right={0} w={350} />
            <Heading size={"2xl"} mt={12} textAlign={"start"}> Note App</Heading>
        </Box>
    )
}
export default HomePage;