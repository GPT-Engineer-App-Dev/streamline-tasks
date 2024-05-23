import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const CreateTodoPage = () => {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const createTodo = async () => {
    await supabase.from("todos").insert([{ description }]);
    navigate("/");
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={createTodo}>Create Todo</Button>
      </VStack>
    </Box>
  );
};

export default CreateTodoPage;