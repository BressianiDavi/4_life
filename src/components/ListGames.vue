<template>
    <v-container>
        <tr v-for="(game, index) of games" :key="game.id">
            <td class="index">{{ index + 1 }} de {{ indexTotal }}</td>
            <div class="text-center">
                <v-card :loading="loading" class="mx-auto my-3" max-width="350">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>
                    <div class="text-center">
                        <v-avatar size="200">
                            <span class="white--text text-h5">
                                <img :src="game.imagem" />
                            </span>
                        </v-avatar>
                    </div>

                    <v-card-title>
                        <a class="link" target="_blank" :href="game.site">
                            {{ game.nome }}
                        </a>
                    </v-card-title>
                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating
                                :value="game.avaliacao"
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                            ></v-rating>

                            <div class="grey--text ms-4">
                                {{ game.avaliacao }}
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1 text-start mt-5">
                            Plataformas: {{ game.plataformas.join(", ").toString() }}
                        </div>

                        <div class="my-4 text-subtitle-1 text-start ">
                            <p>Descrição: {{ game.descricao }}</p>
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-actions>
                        <v-btn color="deep-purple lighten-2" text @click="reserve">
                            Reserve
                        </v-btn>
                    </v-card-actions>
                    <div class="list">
                        <ul v-for="video of videos" :key="video.id">
                            <li>
                                <a target="_blank" :href="video.site">
                                    {{ video.nome }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </v-card>
            </div>
        </tr>
    </v-container>
</template>

<script>
export default {
    name: "ListProfessionals",

    props: {
        games: {
            type: Array,
            required: true,
        },
        indexTotal: {
            type: Number,
            required: true,
        },
        videos: {
            type: Array,
            required: true,
        },
    },
    data: () => ({
        loading: false,
        selection: 1,
    }),
    methods: {
        reserve() {
            this.loading = true;

            setTimeout(() => (this.loading = false), 2000);
        },
    },
};
</script>

<style scoped>
.v-avatar img {
    width: 50vw;
}

.index {
    display: flex;
    justify-content: flex-end;
}

.link {
    text-decoration: none;
    color: #000;
    cursor: pointer;
}

.list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 16px;
}

.list ul {
    padding: 0;
}

.list li {
    list-style: none;
    font-size: 16px;
}

.list a {
    text-decoration: none;
    color: gray;
}
</style>
