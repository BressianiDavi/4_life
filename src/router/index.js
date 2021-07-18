import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MatchPage from '../views/MatchPage';
import GamesPage from '../views/GamesPage';

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
    {
        path: "/gamespage",
        name: "GamesPage",
        component: GamesPage,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
