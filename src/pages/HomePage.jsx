import { useEffect, useState } from "react";
import { Box, Button, Checkbox, Flex, Heading, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data } = await supabase.from("todos").select("*").order("created_at", { ascending: false });
    setTodos(data);
  };

  const deleteTodo = async (id) => {
    await supabase.from("todos").delete().eq("id", id);
    fetchTodos();
  };

  const toggleComplete = async (id, isCompleted) => {
    await supabase.from("todos").update({ is_completed: !isCompleted }).eq("id", id);
    fetchTodos();
  };

  return (
    <Box p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading as="h1" size="xl">Todo List</Heading>
        <Button as={Link} to="/create" colorScheme="teal">Create Todo</Button>
      </Flex>
      <VStack spacing={4} align="stretch">
        {todos.map((todo) => (
          <Flex key={todo.id} p={4} borderWidth={1} borderRadius="md" align="center" justify="space-between">
            <Checkbox isChecked={todo.is_completed} onChange={() => toggleComplete(todo.id, todo.is_completed)}>
              <Text as={todo.is_completed ? "del" : ""}>{todo.description}</Text>
            </Checkbox>
            <Flex>
              <IconButton as={Link} to={`/edit/${todo.id}`} icon={<FaEdit />} mr={2} />
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(todo.id)} />
            </Flex>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default HomePage;