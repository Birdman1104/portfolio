<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      Here are the games that I worked on which are not under NDA.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      <i>* Most of the games I worked on are under NDA and cannot be shown</i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function() {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
