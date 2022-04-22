import axios from "axios" // Needed to make http requests to the backend

const state = {
  todos: []
}
const getters = {
  allTodos: (state) => state.todos
}
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")

    commit("setTodos", response.data)
  },

  async addTodo({ commit }, todo) {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", { title: todo, complete: false })

    commit("newTodo", response.data)

  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

    commit("removeTodo", id)
  },

  async filterTodo({ commit }, e) {
    // get selected number
    const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)

    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    commit("setTodos", response.data)
  },

  async updateTodo({ commit }, updTodo) {
    // use put to update
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo}`, updTodo)

    console.log(response.data)
    commit("updTodo", response.data)
  },
}
const mutations = {
  setTodos: (state, todos) => state.todos = todos,
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter((todo) => todo.id !== id),
  updTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo)
    if (index !== -1) {
      state.todo.splice(index, 1, updTodo)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations,
}