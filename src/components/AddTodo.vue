<template>
  <div class="shadow-lg p-4 rounded-xl mt-10">
    <h3 class="font-bold text-2xl text-gray-500 my-8">Add Todo</h3>
    <div class="mb-8">
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col lg:flex-row w-full gap-3">
          <input type="text" placeholder="Add todo....." v-model="title" class="border shadow-md p-2 flex-auto" />
          <input type="submit" value="Submit" class="border shadow-sm lg:w-32 2xl:w-52 bg-emerald-700 hover:bg-emerald-600 p-2 text-white cursor-pointer rounded-md" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      this.addTodo(this.title);
    },
  },
};
</script>
