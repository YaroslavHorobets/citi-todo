<template>
  <div v-if="isAuthorized === true" class="todosPageWrapper">
    <div class="secBackground">
      <LogotypeBig />
    </div>
    <div class="todosCardsWrapper">
      <h1>Thank you {{ user }}</h1>
      <AddTodoForm @add-todo="addTodo" />
      <div class="todosCardsContainer">
        <TodoItem
          v-for="todo in todos"
          v-bind:todo="todo"
          :key="todo.id"
          v-on:remove-todo="removeTodo"
        />
      </div>
    </div>
  </div>
  <a class="notAuthWarn" href="/citi-todo/" v-else
    >You must LOGIN first! <br />CLICK ME TO LOGIN</a
  >
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodoForm from "./AddTodoForm.vue";
import LogotypeBig from "../assets/Logotype-big.vue";
export default {
  components: {
    TodoItem,
    AddTodoForm,
    LogotypeBig,
  },
  data() {
    return {
      isAuthorized: JSON.parse(localStorage.getItem("isAuthorized")),
      user: localStorage.getItem("User"),
      todos: [
        { id: 1, title: "Test title 1", completed: false },
        { id: 2, title: "Test title 2", completed: false },
        { id: 3, title: "Test title 3", completed: false },
      ],
    };
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>

<style>
.todosPageWrapper {
  width: 100%;
  background-color: #e5e5e5;
  height: 1080px;
  margin: 0 auto;
}
.secBackground {
  position: relative;
  height: 797px;
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
}
.todosCardsWrapper {
  position: absolute;
  width: 1191px;
  height: 660px;
  left: calc(50% - (1191px / 2));
  top: 250px;
  background: #ffffff;
  overflow: scroll;
}
.todosCardsContainer {
  display: flex;
  flex-direction: column;
}
.notAuthWarn {
  text-decoration: none;
  color: red;
}
@media (max-width: 1919px) {
  .secBackground {
    height: 597px;
  }
  .todosCardsWrapper {
    position: absolute;
    width: 920px;
    height: 660px;
    left: calc(50% - (920px / 2));
    top: 250px;
  }
}
</style>
