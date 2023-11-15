import { createApp } from "vue";
import "./style.css";
import "./assets/tailwind.css";
import "./assets/custom-scroll.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import BaseButton from "./components/base/BaseButton.vue";
import BaseAvatar from "./components/base/BaseAvatar.vue";
import BaseBadge from "./components/base/BaseBadge.vue";
import BasePageHeader from "./components/base/BasePageheader.vue";
import BaseCard from "./components/base/BaseCard.vue";
import BaseModal from "./components/base/BaseModal.vue";
import BaseTextfield from "./components/base/BaseTextfield.vue";

const pinia = createPinia();
const app = createApp(App);

app.component("BaseAvatar", BaseAvatar);
app.component("BaseButton", BaseButton);
app.component("BaseBadge", BaseBadge);
app.component("BasePageHeader", BasePageHeader);
app.component("BaseCard", BaseCard);
app.component("BaseModal", BaseModal);
app.component("BaseTextfield", BaseTextfield);

app.use(router);
app.use(pinia);
app.mount("#app");
