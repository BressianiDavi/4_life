<template>
    <ListProfessionals
        :professionals="listProfessionals"
        :indexTotal="listProfessionals.length"
        :videos="listAppVideo"
        :current="current"
    />
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
            listAppVideo: [],
            current: 0,
        };
    },
    created() {
        fetch("https://it3-gdf-default-rtdb.firebaseio.com/saude/profissionais.json")
            .then((response) => response.json())
            .then((json) => {
                this.listProfessionals = json;
            });

        fetch("https://it3-gdf-default-rtdb.firebaseio.com/online/videoChamada.json")
            .then((response) => response.json())
            .then((json) => {
                this.listAppVideo = json;
            });
    },
};
</script>

<style scoped></style>
