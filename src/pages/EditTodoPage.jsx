import { useEffect, useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

const EditTodoPage = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodo();
  }, [id]);

  const fetchTodo = async () => {
    const { data } = await supabase.from("todos").select("*").eq("id", id).single();
    setDescription(data.description);
  };

  const updateTodo = async () => {
    await supabase.from("todos").update({ description }).eq("id", id);
    navigate("/");
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={updateTodo}>Update Todo</Button>
      </VStack>
    </Box>
  );
};

export default EditTodoPage;