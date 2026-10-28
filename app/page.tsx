import { Suspense } from "react";
import { TodoApp } from "@/components/todos/todo-app";
import { fetchTodos } from "@/lib/todos";

async function TodosContent() {
  const todos = await fetchTodos();
  return <TodoApp initialTodos={todos} />;
}

export default function Home() {
  return (
    <Suspense fallback={<p>Loading todos...</p>}>
      <TodosContent />
    </Suspense>
  );
}
