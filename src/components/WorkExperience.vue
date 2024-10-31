<template>
  <div>
    <div class="projects-list">
      <h2>{{ work.title }} - {{ work.company }}</h2>
      <h4>{{ work.startDate }} - {{ work.endDate }}</h4>
      <div>
        <template v-for="r in work.responsibilities">
          <span :key="r.id">{{ r }}<br /></span>
        </template>
      </div>

      <div class="tech-stack">
        <p>Tech Stack: {{ getStringFromStack(work.techStack) }}</p>
      </div>
    </div>

    <hr />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WorkExperience",
  props: {
    work: {
      type: Object,
      required: true,
      default: () => ({
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        responsibilities: [],
        techStack: [],
      }),
    },
  },

  methods: {
    getStringFromStack: function(techStack: string[]) {
      return techStack.join(", ");
    },
  },
});
</script>

<style scoped>
.tech-stack {
  font-style: italic;
}

h2 {
  margin-bottom: 0px;
  margin-top: 15px;
}
h4 {
  margin-top: 3px;
  margin-bottom: 3px;
}
</style>

