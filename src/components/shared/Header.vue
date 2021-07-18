<template>
  <v-container class="header-bar">
    <v-app-bar color="yellow darken-2" app dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title>
          <div class="header">
              <v-img max-height="10vh" max-width="10vw" src="https://i.imgur.com/KzPVjKl.png"></v-img>
              <span>4Life</span>
          </div>
        </v-toolbar-title>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/matchpage">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Profissionais</v-list-item-title>
              </v-list-item>
          </router-link>

          <router-link to="/gamespage">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-gamepad-variant-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Jogos</v-list-item-title>
              </v-list-item>
          </router-link>
         
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
    name: "Header",

    data: () => ({
        drawer: false,
        group: null,
    }),
};
</script>

<style scoped>
  .header-bar a {
    text-decoration: none;
  }

  div .header {
    display: flex;
    align-items: center;
  }

div .header span {
    margin-left: 18px;
    font-weight: bold;
    font-size: 24px;
  }
</style>
