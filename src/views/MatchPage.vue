<template>
    <ListProfessionals :professionals="listProfessionals" :indexTotal="listProfessionals.length" :current="current" />
</template>

<script>
import ListProfessionals from "../components/ListProfessionals";

export default {
    name: "MatchPage",
    components: {
        ListProfessionals,
    },

    data() {
        return {
            listProfessionals: [],
            current: 0,
        };
    },
    created() {
        fetch("https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json")
            .then((response) => response.json())
            .then((json) => {
                this.listProfessionals = json;
            });
    },
};
</script>

<style></style>
