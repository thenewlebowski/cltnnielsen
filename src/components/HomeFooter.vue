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
  }
]
</script>

<template>
  <div class="footer">
<!--    <div class="container">-->
<!--      <div class="pages">-->
<!--        <h3>Pages</h3>-->
<!--        <p>About</p>-->
<!--        <p>Blog</p>-->
<!--      </div>-->
<!--    </div>-->
    <div class="container">
      <h3>Social</h3>
      <div class="social">
        <a v-for="link in links" :key="link.href" :href="link.href">
          <i :class="`fa-brands fa-${link.icon}`"></i><p>{{link.text}}</p>
        </a>
      </div>
    </div>
    
    <div class="container">
      <div class="contact">
        <h3>Contact</h3>
        <p>Street: 853 S Pheasant Run Dr</p>
        <p>City: Orem</p>
        <p>State: Utah</p>
        <p>Country: United States</p>
        <p>Mobile Number: +1-385-630-5807</p>
        <p>Email: cltnnielsen@gmail.com</p>
      </div>
    </div>

  </div>
  
</template>

<style scoped>
  .contact p {
    color: #6c8ead;
    display: block;
  }
  
  p, h3 {
    margin: 0;
    font-size: .85rem;
    text-align: center;
  }
  
  .footer {
    display: flex;
    gap: .5rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }
  
  .social {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    
  }
  
  .social a {
    display: flex;
    font-size: 3rem;
    align-items: center;
    gap: .5rem;
  }
  
  .social p {
    display: none;
  }

  @media (min-width: 800px) {
    .footer {
      flex-direction: row;
    }
    .social {
      flex-direction: column;
    }
    
    .social a {
      font-size: .85rem;
    }
    
    .social p {
      display: block;
    }
  }
  
</style>