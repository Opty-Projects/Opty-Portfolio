<template>
  <v-app id="app">
    <app-toolbar />
    <v-divider :dark="themeService.dark" />
    <router-view class="pa-5 pa-md-10 rounded-0 flex" />
    <v-divider :dark="themeService.dark" />
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppToolbar from "@/components/AppToolbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import ThemeService from "@/services/ThemeService";

@Component({
  components: { AppToolbar, AppFooter },
})
export default class App extends Vue {
  readonly themeService = ThemeService.singleton;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.theme--light.appBackground {
  background-color: white !important;
}

.theme--dark.appBackground {
  background-color: #252530 !important;
}

.theme--light .appText,
.theme--light.v-data-table,
.theme--light.v-input input {
  color: black !important;
}

.theme--dark .appText,
.theme--dark.v-data-table,
.theme--dark.v-input input {
  color: rgba(255, 255, 255, 0.8) !important;
}

.theme--light .svg-inline--fa,
.theme--light .v-input__slot {
  color: rgb(105, 60, 185) !important;
}

.theme--light.v-divider,
.theme--light.v-btn--outlined {
  border-color: rgb(105, 60, 185) !important;
}

.theme--light .v-input__slot {
  caret-color: rgb(105, 60, 185) !important;
}

.theme--dark .svg-inline--fa,
.theme--dark .v-input__slot {
  color: rgb(255, 185, 75) !important;
}

.theme--dark.v-divider,
.theme--dark.v-btn--outlined {
  border-color: rgb(255, 185, 75) !important;
}

.theme--dark .v-input__slot {
  caret-color: rgb(255, 185, 75) !important;
}

.theme--light .bodyIcon,
.theme--light.v-data-table a {
  color: rgb(60, 65, 160) !important;
}

.theme--dark .bodyIcon,
.theme--dark.v-data-table a {
  color: rgb(120, 130, 205) !important;
}

.theme--light.v-data-table .v-row-group__header,
.theme--light.v-data-table tr:hover {
  background: rgba(0, 0, 0, 0.05) !important;
}

.theme--dark.v-data-table .v-row-group__header,
.theme--dark.v-data-table tr:hover {
  background: rgba(255, 255, 255, 0.05) !important;
}

.v-input,
.v-data-table__mobile-row__header {
  font-weight: normal !important;
}

.v-btn {
  letter-spacing: normal;
  text-transform: none;
  font-size: large !important;
}

.v-application .ma-0 {
  margin-inline: 1% !important;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td.text-start {
  font-size: medium !important;
}

@keyframes periodicallySpin {
  0% {
    transform: rotateZ(0deg);
  }
  5% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
