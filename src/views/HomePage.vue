<template>
   <v-container>
       <h2 class="text-h5 text-center text1 white--text mb-3 mt-5">Seja Feliz na Pandemia!</h2>
        <v-img
            class="mb-7"
             max-height="350"
             max-width="150vw"
            src="https://i.imgur.com/bgHAgoR.png"
        ></v-img>
    <p class="text-center text white--text">A 4Life te conecta com várias pessoas do mundo para que você não se sinta sozinho nessa pandemia.
       Clicando nos botôes abaixo você pode encontrar jogos para se divertir com os amigos e profissionais para te ajudar fisica e mentalmente.
       Chega de ficar no sofá se lamentando e se conecte com a 4Life!</p>
        <div class="buttons">
          <v-col>
            <v-btn class="blue lighten-1 white--text">Jogos</v-btn>
          </v-col>
          <v-col>
            <v-btn class="blue lighten-1 white--text">Profissionais</v-btn>
          </v-col>
        </div>         
  </v-container>
</template>

<style scoped>

  .buttons {
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>

export default {
    name: "HomePage",

    components: {
        
    },
};
</script>


