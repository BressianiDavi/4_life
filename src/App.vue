<template>
    <v-app>
        <Header />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import Header from "./components/shared/Header.vue";
export default {
    name: "App",
    components: {
        Header,
    },

    data: () => ({
        //
    }),
};
</script>

<style scoped>
    main {
        background: #fffafa;
    }   
</style>