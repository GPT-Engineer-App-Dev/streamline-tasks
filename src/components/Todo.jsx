import { Checkbox, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <Flex p={4} borderWidth={1} borderRadius="md" align="center" justify="space-between">
      <Checkbox isChecked={todo.is_completed} onChange={() => toggleComplete(todo.id, todo.is_completed)}>
        <Text as={todo.is_completed ? "del" : ""}>{todo.description}</Text>
      </Checkbox>
      <Flex>
        <IconButton as={Link} to={`/edit/${todo.id}`} icon={<FaEdit />} mr={2} />
        <IconButton icon={<FaTrash />} onClick={() => deleteTodo(todo.id)} />
      </Flex>
    </Flex>
  );
};

export default Todo;