<template>
    <v-container class="container">
        <td class="index">{{ current + 1 }} de {{ indexTotal }}</td>
        <div class="text-center">
            <v-card :loading="loading" class="mx-auto my-3" max-width="350">
                <template slot="progress">
                    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                </template>
                <div class="text-center">
                    <v-avatar size="100">
                        <span class="white--text text-h5"><img :src="professionals[current].imagem"/></span>
                    </v-avatar>
                </div>

                <v-card-title>{{ professionals[current].nome }}</v-card-title>
                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                        <div class="grey--text ms-4">
                            4.5 (413)
                        </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1 localidade">Localidade: {{ professionals[current].local }}</div>
                    <div class="servicos my-4 text-subtitle-1">
                        Serviços: {{ professionals[current].servicos.join(", ").toString() }}
                    </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Disponibilidade para hoje</v-card-title>

                <v-card-text>
                    <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
                        <v-chip>17:30</v-chip>

                        <v-chip>19:30</v-chip>

                        <v-chip>20:00</v-chip>

                        <v-chip>21:00</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="deep-purple lighten-2" text @click="reserve">
                        Reserve
                    </v-btn>
                </v-card-actions>
            </v-card>
            <div class="buttons">
                <v-btn
                    @click="previousProfessional()"
                    v-if="current > 0"
                    class="ma-2 previous"
                    color="blue lighten-1"
                    dark
                >
                    <v-icon dark left> mdi-arrow-left </v-icon>
                </v-btn>
                <v-btn @click="nextProfessional()" v-if="current < 9" class="ma-2 next" color="blue lighten-1" dark>
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
        professionals: {
            type: Array,
            required: true,
        },
        indexTotal: {
            type: Number,
            required: true,
        },
    },
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        nextProfessional() {
            if (this.current < this.professionals.length) {
                this.current++;
            }
        },

        previousProfessional() {
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
    width: 25vw;
}

.index {
    display: flex;
    justify-content: flex-end;
}

.servicos {
    display: flex;
    justify-content: flex-start;
}

.localidade {
    display: flex;
    justify-content: flex-start;
}

.buttons {
    display: flex;
    justify-content: space-between;
}
</style>
