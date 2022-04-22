<template>
  <div class="max-w-7xl mx-auto px-2">
    <AddTodo />
    <FilterTodos />
    <TodoComponent />
  </div>
</template>

<script>
import TodoComponent from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";
export default {
  name: "App",
  components: { TodoComponent, AddTodo, FilterTodos },
};
</script>
