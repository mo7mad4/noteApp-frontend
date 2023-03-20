const { Card, CardBody, VStack, Heading, Text, Flex, Button } = require("@chakra-ui/react");

const NoteCard = ({ title, body, user,_id }) => {
  return (
    <Card>
      <CardBody>
        <VStack>
            <Heading>{title}</Heading>
            <Text>{body}</Text>

            <Flex gap={2}>
                <Button>Update</Button>
                <Button>Delete</Button>
            </Flex>            
        </VStack>
      </CardBody>
    </Card>
  );
};

export default NoteCard;