<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" type="text" />
    <button type="submit">Add Todo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit("add-todo", newTodo);
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 30px;
}
input {
  width: 400px;
  height: 30px;
  padding-left: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: inset 2px 3px 3px 1px rgba(34, 60, 80, 0.4);
}
button {
  padding: 0;
  width: 70px;
  height: 30px;
  margin: 0 10px;
  border-radius: 10px;
  text-align: center;
  background: white;
  border: none;
  box-shadow: 2px 3px 8px 0px rgba(34, 60, 80, 0.5);
  cursor: pointer;
}
button:hover {
  box-shadow: inset 2px 4px 4px 0px rgba(34, 60, 80, 0.5);
}
</style>
