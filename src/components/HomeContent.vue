<script setup lang="ts">
import { JobCard, TileList } from '@/components'
import ContributionHeatmap from '@/components/ContributionHeatmap.vue'
import { store } from '@/store'

let jobs = await store().getJobs

let expertise = await store().getExperties

const langs = [
  'Rust',
  'Unreal',
  'Blender',
  'Go',
  'C++',
  'Typescript',
  'Java',
  'C#',
  'Perforce',
  'Git',
  'Github',
  'Vue',
  'React',
  'Mongo',
  'Dynamo',
  'Node.js',
  'Docker',
  'Kubernetes',
  'Linux',
  'AWS',
  'Google Cloud'
]
</script>

<template>
  <div class="profile">
    <img
      class="profile-image"
      src="https://cdn.hyperbolic.studio/images/profile.jpg"
      alt="profile picture"
    />
    <p class="profile-text">
      Building simple elegant solutions that solve complex problems. Expert in systems programming
      and inspiring others. When product requirements come down to a tight deadline, hunkering down
      to finish strong isn't the only requirement but also thriving in the chaos.
    </p>
  </div>
  <h2 class="content-header">Experience:</h2>
  <div class="experience-container">
    <JobCard v-for="(job, i) in jobs" :key="i" :job="job" />
  </div>
  <p class="content-redirect">
    <a class="bordered-text" @click="$router.push('/experience')"
      >More<i class="fa-solid fa-arrow-right"></i
    ></a>
  </p>

  <h2 class="content-header">Technical Expertise:</h2>
  <TileList :content="langs" />
  <Suspense fallback="loading">
    <ContributionHeatmap />
  </Suspense>
  <!--  <h2 class="content-header">Recent Blog Posts:</h2>-->
  <!--  <p class="content-redirect">-->
  <!--    <a  class="bordered-text" @click="$router.push('/posts')">More<i class="fa-solid fa-arrow-right"></i></a>-->
  <!--  </p>-->

  <!--  <h2 class="content-header">Recent Videos:</h2>-->
  <!--  <p class="content-redirect">-->
  <!--    <a  class="bordered-text" href="https://www.youtube.com/@thenewlebowski">More<i class="fa-solid fa-arrow-right"></i></a>-->
  <!--  </p>-->
</template>

<style scoped>
.content-redirect {
  text-align: center;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: 5rem;
}

.profile-image {
  height: 300px;
  border-radius: 150px;
}

.profile-text {
  font-size: 2rem;
  font-weight: 600;
  color: #b8dbd9;
}

.content-header {
  font-weight: 700;
  margin: 1rem;
  color: #b8dbd9;
  font-size: 3rem;
  text-align: center;
}

.experience-container {
  grid-template-columns: 1fr;
  display: grid;
}

@media (min-width: 800px) {
  .profile {
    flex-direction: row;
    gap: 5rem;
  }

  .experience-container {
    grid-template-columns: 1fr 1fr;
  }

  h2 {
    text-align: left;
  }
}

.experience-container > * {
  margin: 0.5rem;
}
</style>
