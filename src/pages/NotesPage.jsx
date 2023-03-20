import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteCard from "../components/NotesPage/NotesCard/NoteCard";
import { getNotes } from "../Redux/notes/note.actions";
import { BsPlusLg } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const NotesPage = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  console.log(data);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure()

const createNote = () =>{
  dispatch(createNote({title,body}))
}
  useEffect(() => {
    dispatch(getNotes());
  }, []);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  return (
    <Box mt={20} padding={8}>
      <Grid
        gap={10}
        w={"90%"}
        margin={"auto"}
        gridTemplateColumns="repeat(4, 1fr)"
      >
        {notes?.map((el) => (
          <NoteCard {...el} />
        ))}
      </Grid>
      
<>
<IconButton
          position={"fixed"}
          bottom={0}
          right={0}
          margin={16}
          w={"80px"}
          h={"80px"}
          borderRadius={50}
          boxShadow={
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
          }
          onClick={() => onOpen(onOpen)}

          icon={<BsPlusLg />}
        ></IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input value={title} placeholder={"Please enter title"} onChange={(e)=>{setTitle(e.target.value)}}></Input>
            <Textarea value={body} mt={8} placeholder={"Please Enter Description"} onChange={(e)=>{setBody(e.target.value)}}></Textarea>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={createNote}>
              Create
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>


    </Box>
  );
};
export default NotesPage;
