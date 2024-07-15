<script setup lang="ts">
import { JobCard, TileList } from '@/components'
import ContributionHeatmap from '@/components/ContributionHeatmap.vue'

let jobs = [
  {
    picture: 'https://cdn.hyperbolic.studio/images/plumbersstock.png',
    title: 'Plumbersstock',
    description:
      'An application built using Laravel 7 and MySQL. Helped integrate third party platforms and increased profit margins by 5% by optimizing database performance.',
    tool: 'Laravel',
    position: 'Web Developer'
  },
  {
    picture: 'picture',
    title: 'Mercury',
    description:
      'A tool used by Dynata partners to set up small market insight observations that would be executed and prioritized higher than our broad tools like CMIX.',
    position: 'Software Engineer',
    tool: 'Go & React'
  },
  {
    picture: 'https://cdn.hyperbolic.studio/images/gogrello.png',
    title: 'GoGrello',
    description:
      'The task management software that Gogreen went on to use as their primary task management software. It easily integrated with Eclipse (our inventory management software) and made communication with product management simpler and more efficient.',
    position: 'Web Developer',
    tool: 'Vue & Nuxt'
  },
  {
    title: 'Respondent Exchange (REX)',
    picture: 'https://cdn.hyperbolic.studio/images/rust-logo-512x512.png',
    description:
      'A information exchange system developed for sharing and networking respondent data internally and between our partners. This system was build entirely using rust with the communication layer leveraging gRPC.',
    position: 'Senior Software Engineer',
    tool: 'Rust & gRPC'
  },
  {
    picture: 'picture',
    title: 'Partner Portal',
    position: 'Senior Software Engineer',
    tool: 'Rust & React',
    description:
      'A metric, configuration, & optimization tool for partners to provide realtime market feedback data. Introduced seamless partner integration into the REX project to cut out pre-existing redundant work.'
  },
  {
    picture: 'https://cdn.hyperbolic.studio/images/python-logo-only.png',
    title: 'Natural Language Compiler',
    position: 'Software Engineer',
    description:
      'An A.I. solution that enabled partners to write more effective market surveys to give better insights into their products and how they could improve on them. When used internally this increased our production releases by 50%!',
    tool: 'Python & Go'
  }
]

const langs = [
  'Rust',
  'Unreal',
  'Blender',
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
