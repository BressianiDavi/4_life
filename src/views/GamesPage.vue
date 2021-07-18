<template>
  <v-container>
      <ListGames 
        :games="listGames"
        :indexTotal="listGames.length"
        :videos="listAppVideos"
      />
  </v-container>
</template>

<script>

import ListGames from '../components/ListGames.vue'

export default {
  name: 'GamesPage',
  components: {
        ListGames,
    },
  data() {
        return {
            listGames: [],
            listAppVideos: [],         
        };
    },
    created() {
        fetch("https://it3-gdf-default-rtdb.firebaseio.com/online/jogos.json")
            .then((response) => response.json())
            .then((json) => {
                this.listGames = json;
                console.log('listgames', this.listGames)
            });  
            
        fetch("https://it3-gdf-default-rtdb.firebaseio.com/online/videoChamada.json")
            .then((response) => response.json())
            .then((json) => {
                this.listAppVideos = json;                
            });
    },
}
</script>