import { createWebHistory, createRouter } from "vue-router";
import LoginPage from "./components/LoginPage";
import TodosPage from "./components/TodosPage";

const routes = [
  {
    path: "/citi-todo/",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/citi-todo/todo",
    name: "Todo",
    component: TodosPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
