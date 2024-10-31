<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Arsen Mazmanyan</strong><i> (The Birdman)</i>, an experienced HTML5 Game Developer with 4+ years of
      experience under my belt. <br />My main goal in my career is to make better games for those who play. <br />With
      my math knowledge I can implement some basic physics in games, like
      <strong>gravity, collisions, and movements.</strong>
      <br />
      <br />
      <br />If you found this and you have an interesting offer, feel free to
      <router-link to="/contact">contact me</router-link>.
      <br />

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/CV_Arsen_Mazmanyan.pdf" target="_blank"
          ><i class="fa fa-download fa-lg fa-fw"></i> Download my CV</a
        >
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <template v-for="work in workExperienceData">
        <WorkExperience :key="work.startDate" :work="work" />
      </template>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Hard Skills</h3>
        <SkillRate name="JavaScript" :rate="5" />
        <SkillRate name="PixiJS" :rate="5" />
        <SkillRate name="HTML5 Game Development" :rate="5" />
        <SkillRate name="Phaser3" :rate="4" />
        <SkillRate name="TypeScript" :rate="4" />
        <SkillRate name="Adobe Photoshop" :rate="3" />
        <SkillRate name="Vue.js" :rate="3" />
        <SkillRate name="ThreeJS" :rate="3" />
        <SkillRate name="MatterJS" :rate="3" />
      </div>

      <div class="skill-set">
        <h3>Soft Skills</h3>
        <SkillRate name="Adaptability" :rate="5" />
        <SkillRate name="Teamwork" :rate="5" />
        <SkillRate name="Problem Solving" :rate="5" />
        <SkillRate name="Open for Healthy Criticism" :rate="4" />
        <SkillRate name="Confidence" :rate="4" />
        <SkillRate name="Communication" :rate="4" />
        <SkillRate name="Collaboration" :rate="4" />
      </div>
      <div style="clear:both" />
      <br />
      <hr />

      <h2>Education</h2>

      <h3>Yerevan State University</h3>
      <h4>Faculty of <i>Informatics and Applied Math</i></h4>
      <div>2019 - 2023</div>
      <div>Thesis: Making 2D Web Games Engine</div>

      <h3>Yerevan State University</h3>
      <h4>Faculty of <i>Information Security</i></h4>
      <div>2018 - 2019</div>
      <br />
      <hr />

      <h2>Languages</h2>

      <h3>Armenian</h3>
      <div><i>Native</i></div>

      <h3>Russian</h3>
      <div><i>Intermediate</i></div>

      <h3>English</h3>
      <div><i>Intermediate</i></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";
import workExperienceData from "@/data/WorkExperienceData.ts";
import WorkExperience from "@/components/WorkExperience.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
    WorkExperience,
  },
  data() {
    return {
      workExperienceData,
    };
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
