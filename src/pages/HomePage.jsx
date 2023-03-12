import { Box, Heading, Image, Text } from "@chakra-ui/react";
import noteImage from "../assets/Images/noteImg.png";

const HomePage = () => {
  return (
    <Box padding={8}>
      <Image src={noteImage} mt={10} position={"absolute"} right={0} w={500} />
      <Heading size={"2xl"} mt={10} textAlign={"start"}>
        Note App
      </Heading>
      <Text textAlign={"justify"} maxW={"50%"} mt={8}>
        A note application is an essential tool for anyone who needs to take
        notes, organize their thoughts, and keep track of their daily tasks. It
        is a software application that allows users to create, store, and manage
        digital notes. Whether you're a student, professional, or just someone
        who needs to jot down a quick reminder, a note application can be an
        incredibly useful tool. One of the key features of a note application is
        its ability to organize information. Users can create multiple notes,
        categorize them by topic, and search for specific notes using keywords.
        This makes it easy to keep track of important information and retrieve
        it quickly when needed. Another important feature of a note application
        is its ability to sync data across multiple devices. This means that you
        can access your notes from your computer, tablet, or smartphone, no
        matter where you are. This is especially useful for people who need to
        work on the go or who switch between devices frequently. Many note
        applications also offer additional features like reminders, to-do lists,
        and collaboration tools. Reminders allow users to set alerts for
        specific notes or tasks, while to-do lists help keep track of tasks and
        deadlines. Collaboration tools allow users to share notes with others,
        making it easy to work on projects with colleagues or classmates.
        Overall, a note application is an incredibly useful tool for anyone who
        needs to take notes, stay organized, and manage their daily tasks. With
        its ability to organize information, sync data across multiple devices,
        and offer additional features like reminders and collaboration tools, a
        note application can help users be more productive and efficient in
        their work and personal lives.
      </Text>
    </Box>
  );
};
export default HomePage;
