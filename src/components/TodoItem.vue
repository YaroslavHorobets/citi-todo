<template>
  <div class="todoItem">
    <input type="checkbox" @change="todoItem.completed = !todoItem.completed" />
    <p v-bind:class="{ completed: todoItem.completed }">{{ todoItem.title }}</p>
    <input
      class="editInput"
      v-bind:class="{ editing: !editing }"
      type="text"
      v-model="todoItem.title"
    />
    <div>
      <button @click="editTodo">&#9998;</button>
      <button @click="$emit('remove-todo', todo.id)">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editing: false,
      todoItem: this.todo,
    };
  },
  methods: {
    editTodo() {
      console.log(this.todo);
      if (!this.todoItem.completed) this.editing = !this.editing;
    },
  },
};
</script>

<style scoped>
.todoItem {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  margin: 10px auto;
}
.todoItem button {
  padding: 0;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  border-radius: 10px;
  text-align: center;
  background: white;
  border: none;
  box-shadow: 2px 3px 8px 0px rgba(34, 60, 80, 0.5);
  cursor: pointer;
}
.todoItem button:hover {
  box-shadow: inset 2px 4px 4px 0px rgba(34, 60, 80, 0.5);
}
.completed {
  text-decoration: line-through;
  color: green;
}
.editing {
  visibility: hidden;
}
.editInput {
  position: absolute;
  width: 500px;
  height: 30px;
  padding-left: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: inset 2px 3px 3px 1px rgba(34, 60, 80, 0.4);
}
</style>
