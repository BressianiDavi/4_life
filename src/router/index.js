import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import MatchPage from "../views/MatchPage";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/matchpage",
        name: "MatchPage",
        component: MatchPage,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
