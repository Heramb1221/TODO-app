import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodo = useMutation(api.todos.clearAllTodos)

  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}><Text>Toggle the mode</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },

  content: {
    fontSize: 52,
  }
})