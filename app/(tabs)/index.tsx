import { createHomeStyles } from "@/assets/images/styles/home.styles";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodo = useMutation(api.todos.clearAllTodos)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView
        style={homeStyles.safeArea}
      >
        <Header />
        <TodoInput />

        <TouchableOpacity onPress={toggleDarkMode}><Text>Toggle the mode</Text></TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}