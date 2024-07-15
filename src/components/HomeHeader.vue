<script setup lang="ts">
const links = [
  {
    href: 'https://github.com/thenewlebowski',
    text: 'Github',
    icon: 'github'
  },
  {
    href: 'https://www.linkedin.com/in/coltonn/',
    text: 'LinkedIn',
    icon: 'linkedin'
  },
  {
    icon: 'youtube',
    text: 'Youtube',
    href: 'https://www.youtube.com/@thenewlebowski',
  },
  {
    icon: 'twitch',
    href: 'https://www.twitch.tv/thenewlebowski',
    text: 'Twitch',
  },
  {
    icon: 'twitter',
    text: 'Twitter',
    href: 'https://twitter.com/thenewlebowski',
  },
  {
    text: 'Resume',
    href: 'https://cdn.hyperbolic.studio/documents/resume.pdf'
  }
]
</script>

<template>
  <div class="header">
<!--    <div class="title-container">-->

      <div class="title">
        <h1>
          <video playsinline loop autoplay preload="metadata" class="logo">
            <source src="https://cdn.hyperbolic.studio/videos/hyperbolic-logo.mp4" type="video/mp4" />
            Your browser does not support the video tag or the file format of this video.
          </video>
          Colton Nielsen
        </h1>
        <small>Senior Software Engineer | Gameplay Programmer</small>
      </div>
    
<!--    </div>-->
    <div class="links">
      <a v-for="link in links" :key="link.icon" :href="link.href">
        <i v-if="link.icon"  :class="`fa-brands fa-${link.icon}`"></i>
        <p v-if="!link.icon" class="bordered-text">{{link.text}}</p>
      </a>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  grid-template-columns: 1fr;
  display: grid;
  z-index: 999;
  background: #3a3335;
}

.logo {
  display: inline;
  border-radius: 50px;
  height: 50px;
}

.title-container {
  display:flex;
  align-items: center;
  flex-direction: column-reverse;
}

.title {
  text-align: center;
  font-weight: 700;
  color: #6c8ead;
  margin: 0;
}

.title h1 {
  margin: 0;
  font-size: 2.5rem;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.links {
  display: flex;
  justify-content: center;
  align-self: center;
  height: 50px;
}

.links p {
  margin: 0;
}

@media (min-width: 800px) {
  .header {
    grid-template-columns: 1fr 1fr;
  }

  .title {
    font-size: 3.5rem;
    text-align: left;
  }

  .title h1 {
    justify-content: left;

  }

  .links {
    justify-content: flex-end;
  }
}

.links > * {
  margin: 0rem 0.25rem 0rem 0.25rem;
  align-self: center;
  align-content: center;
}

.title small {
  display: block;
  font-size: 1.125rem;
  font-weight: 400;
}
</style>
