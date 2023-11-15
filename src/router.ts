import { createRouter, createWebHashHistory, Router } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

const Buttons = () => import("./views/Buttons.vue");
const Avartar = () => import("./views/Avartar.vue");
const Badge = () => import("./views/Badge.vue");
const Card = () => import("./views/Card.vue");
const Modal = () => import("./views/Modal.vue");
const Form = () => import("./views/Form.vue");

export const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/avatar",
    name: "Avatar",
    component: Avartar,
  },
  {
    path: "/badge",
    name: "Badge",
    component: Badge,
  },
  {
    path: "/card",
    name: "Caed",
    component: Card,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes,
});

export default router;
