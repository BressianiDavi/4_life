<template>
    <v-container>
        <td class="index">{{ current + 1 }} de {{ indexTotal }}</td>
        <div class="text-center">
            <v-card :loading="loading" class="mx-auto my-3" max-width="350">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>
                <div class="text-center">
                    <v-avatar size="200">
                        <span class="white--text text-h5">
                            <img :src="games[current].imagem" />
                        </span>
                    </v-avatar>
                </div>

                <v-card-title>
                    <a class="link" target="_blank" :href="game.site">
                        {{ games[current].nome }}                        
                      </a>
                </v-card-title>
                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating
                            :value="games[current].avaliacao"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">
                            {{ games[current].avaliacao }}
                        </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1 text-start mt-5">
                        Plataformas: {{ games[current].plataformas.join(", ").toString() }}
                    </div>

                    <div class="my-4 text-subtitle-1 text-start ">
                          <p>Descrição: {{game[current].descricao}}</p>  
                        </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                    <v-btn color="deep-purple lighten-2" text @click="reserve">
                        Reserve:
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
            <div class="buttons">
                <v-btn @click="previousGame()" v-if="current > 0" class="ma-2 previous" color="blue lighten-1" dark>
                    <v-icon dark left> mdi-arrow-left </v-icon>
                </v-btn>
                <v-btn @click="nextGame()" v-if="current < 9" class="ma-2 next" color="blue lighten-1" dark>
                    <v-icon dark left> mdi-arrow-right </v-icon>
                </v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "ListProfessionals",

    props: {
        current: { type: Number, required: true },

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
        nextGame() {
            if (this.current < this.games.length) {
                this.current++;
            }
        },

        previousGame() {
            if (this.current > 0) {
                this.current = this.current - 1;
            }
        },

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
